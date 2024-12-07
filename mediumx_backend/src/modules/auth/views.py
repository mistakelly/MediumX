# Import necessary modules and classes from Django and DRF (Django Rest Framework)
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import authenticate  # To authenticate users

# Import user serializer for user data validation and serialization
from users.serializer import UserSerializer

# Django's timezone utility to get the current date and time
from django.utils.timezone import now


# CUSTOM DJANGO IMPORTS
from django.contrib.auth import get_user_model

# Get the User model that is currently being used (custom or default)
User = get_user_model()


# Create the API View for user registration
class RegisterUserView(APIView):
    def post(self, request: Request):
        """
        Handle user registration:
        This endpoint receives user data (like username, password, etc.) and creates a new user if valid.
        """

        try:
            # Initialize the UserSerializer with the incoming request data
            serializer = UserSerializer(data=request.data)

            serializer.is_valid(raise_exception=True)

            serializer.save()

            return Response({"message": "User registered successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)

        except ValidationError as ve:
            print('validation error', ve)
            return Response({'errors': ve.detail}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as exc:
            print('error', exc)
            return Response({'msg': 'An unexpected error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Create the API View for user login
class LoginUserView(APIView):
    def post(self, request: Request):
        """
        Handle user login:
        This endpoint authenticates a user and generates JWT tokens if successful.
        """
        try:
            # Extract username and password from request data
            username = request.data.get("username")
            password = request.data.get("password")

            # Check if both username and password are provided
            if not username or not password:
                return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

            # Check if the user exists in the system
            if not User.objects.filter(username=username).exists():
                return Response(
                    {
                        "error": "User not found",
                        "message": f"No account exists with the username '{username}'. Please ensure you have registered.",
                        "registration_link": "You can register here: /api/auth/register/"
                    },
                    status=status.HTTP_404_NOT_FOUND
                )

            # Authenticate the user by checking the username and password
            user = authenticate(request, username=username, password=password)


            if not user:
                return Response({"error": "Invalid username or password."}, status=status.HTTP_401_UNAUTHORIZED)

            # FIXME: user.isactive is not working properly, <authenticate method automatically catches the error when the user is not active.>
            # Check if the user's account is active
            if not user.is_active:
                return Response({"error": "This account is inactive. Please contact support."}, status=status.HTTP_403_FORBIDDEN)

            # Generate JWT refresh and access tokens for  user
            refresh = RefreshToken.for_user(user)

            # Update the user's last login timestamp
            user.last_login = now()
            user.save()

            return Response({
                "message": "User logged in successfully",
                "access": str(refresh.access_token),
                "refresh": str(refresh)
            }, status=status.HTTP_200_OK)

        # Catch any unexpected exceptions
        except Exception as e:
            print('error', e)
            return Response(
                {"error": "An unexpected error occurred. Please try again later."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
