
# REST FRAMEWORK IMPORTS
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken


# REST FRAMEWORK VIEWS
from rest_framework import generics


# CUSTOM IMPORTS
from src.constants import User
from ..auth_serializer import RegisterUserSerializer


class RegisterUser(generics.CreateAPIView):
    """
        registers a user.
        overide perform_create and create methods for extra customization.
    """
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer

    def perform_create(self, serializer):
        return serializer.save()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # get user instance from the return value perform_create method
        user = self.perform_create(serializer)
        
        headers = self.get_success_headers(serializer.data)

        # GENERATE ACCESS AND REFRESH TOKEN FOR USER
        refresh_token = RefreshToken.for_user(user)
        access_token = refresh_token.access_token

        return Response(
            {
                'refresh': str(refresh_token),
                'access': str(access_token),
                'user': serializer.data
            },
            headers=headers,
            status=status.HTTP_201_CREATED
        )
