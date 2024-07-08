# Views

"""
User and CRUD Operations API Views

This module defines views for handling user-related CRUD operations, including 
creating, retrieving, updating, and deleting users. It also includes utility 
mixins and custom exception handling for validation.

Classes:
    - UserAPIView: Handles GET (list users) and POST (create user) requests.
    - UserDetailAPIView: Handles GET (retrieve user by ID), PUT (update user), 
      and DELETE (delete user by ID) requests.

Utility Classes:
    - CRUDOperationMixin: Provides common methods for retrieving objects and 
      validating serializers.
    - SerializerValidationException: Custom exception raised for serializer 
      validation errors (400 Bad Request).

Core Methods:
    - CRUDOperationMixin.get_single_obj(pk, model): Retrieves an object by its 
      primary key (pk). Raises `ObjectDoesNotExist` if not found.
    - CRUDOperationMixin.serialize_obj(serializer): Validates serializer, raising 
      `SerializerValidationException` if invalid.

"""

from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

# CUSTOM IMPORTS
from .serializer import UserSerializer
from utils.mixins import CRUDOperationMixin
from utils.exception import SerializerValidationException

# Get the User model
User = get_user_model()


class UserAPIView(APIView, CRUDOperationMixin):
    """
    API view to handle operations related to Users.
    This includes retrieving all users and creating a new user.
    """

    serializer_class = UserSerializer

    def get(self, request: Request) -> Response:
        try:
            # Fetch all users from the database
            users = User.objects.all()

            # If no users exist, provide a registration URL.
            #NOTE: {Used .exists() on the users queryset for optimization.
            # This prevents Django from retrieving all fields of all users (which happens if we simply check `if users`),
            # and instead only checks whether any records exist in the database, improving performance.}
            if not users.exists():

                return Response(
                    {
                        'message': 'No users found. Be the first to register.',
                        'registration_url': 'http://127.0.0.1:8000/api/users/register'
                    }, status=status.HTTP_200_OK)

            serializer = self.serializer_class(users, many=True)

            return Response(
                {'message': 'Users retrieved successfully', 'users': serializer.data},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response({'error': str(e)})

    def post(self, request: Request) -> Response:
        """
        Create a new user.
        """
        try:
            # Initialize serializer with data from the request
            serializer = self.serializer_class(data=request.data)

            # Validate and save the user data using the custom mixin method
            self.validate_serializer(serializer)
            serializer.save()

            return Response({'message': 'User successfully created', 'user': serializer.data})

        except SerializerValidationException as e:
            return Response({'error': e.detail}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'error': str(e)})

