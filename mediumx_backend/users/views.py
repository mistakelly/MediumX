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


Core Methods:
    - CRUDOperationMixin.get_single_obj(pk, model, error):
        Retrieves an object by its primary key (pk).
        error parameter is the custom error to raise in the view function.
        Raises `ObjectDoesNotExist` if not found.
"""

from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import get_user_model

# CUSTOM IMPORTS
from .serializer import UserSerializer
from utils.mixins import CRUDOperationMixin

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
            # NOTE: {Used .exists() on the users queryset for optimization.
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
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response({'message': 'User successfully created', 'user': serializer.data}, status=status.HTTP_201_CREATED)

        except Exception as exc:
            return Response({'error': str(exc)}, status=status.HTTP_400_BAD_REQUEST)


class UserDetailAPIView(APIView, CRUDOperationMixin):
    """
    API view to handle operations related to a single user.
    This includes retrieving, updating, and deleting a user.
    """

    serializer_class = UserSerializer

    def get(self, request: Request, pk: int) -> Response:
        """
        Retrieve a user by their primary key (ID).
        pk (int): The primary key of the user.
        """

        try:
            # Get user object by pk using the custom get_single_obj method from CRUDOperationMixin class
            user = self.get_single_obj(
                pk, User, error=f'User with id <{pk}> not found')

            serializer = self.serializer_class(user)

            return Response({'message': 'User retrieved successfully', 'user': serializer.data})

        except Exception as exc:
            return Response({'error': str(exc)}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request: Request, pk: int) -> Response:
        """
        Update a user's data.
        """
        try:
            # Retrieve the user object by pk
            user = self.get_single_obj(
                pk, User, error=f'User with id <{pk}> not found')

            # Initialize the serializer with user data and request data
            serializer = self.serializer_class(user, data=request.data)

            serializer.is_valid(raise_exception=True)

            # Save the updated user data
            serializer.save()
            return Response({'message': 'User successfully updated', 'user': serializer.data}, status=status.HTTP_200_OK)

        except Exception as exc:
            return Response({'error': str(exc)}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: Request, pk: int) -> Response:
        """
        Delete a user by their primary key (ID).
        """
        try:
            user = self.get_single_obj(
                pk, User, error=f'User with id <{pk}> not found')

            # Delete the user
            user.delete()
            return Response({'message': 'User successfully deleted'}, status=status.HTTP_204_NO_CONTENT)

        except Exception as exc:
            return Response({'error': str(exc)}, status=status.HTTP_400_BAD_REQUEST)
