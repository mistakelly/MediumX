from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

# CUSTOM IMPORTS
from ..auth_serializer import LoginUserSerializer


class LoginUser(APIView):
    def post(self, request):
        # Use the LoginSerializer to validate input data
        serializer = LoginUserSerializer(data=request.data)

        # If data is invalid, the serializer will raise a validation error
        serializer.is_valid(raise_exception=True)

        # If data is valid, extract username and password
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        # Authenticate  user
        user = authenticate(request, username=username, password=password)

        if not user:
            return Response(
                {'detail': 'Invalid credentials'},
                status=status.HTTP_401_UNAUTHORIZED
            )

        # Generate access and refresh tokens
        refresh_token = RefreshToken.for_user(user)
        access_token = refresh_token.access_token

        return Response(
            {
                'id': user.pk,
                'username': user.username,
                'access': str(access_token),
                'refresh': str(refresh_token),
            },
            status=status.HTTP_200_OK
        )
