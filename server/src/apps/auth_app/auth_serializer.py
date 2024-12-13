import re
from typing import Dict, Any
from src.constants import User
from rest_framework import serializers


class RegisterUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

    def validate_username(self, value):
        """
        Validate the username to ensure it meets specific criteria:
        - Starts with a lowercase letter.
        - Can only contain lowercase letters, numbers, and underscores.
        - Length between 3 and 20 characters.
        """

        username_pattern = r'^[a-z][a-z0-9_]{2,19}$'

        if not re.match(username_pattern, value):
            raise serializers.ValidationError({
                'error': "Username must start with a lowercase letter, contain only lowercase letters, numbers, and underscores, and be between 3 and 20 characters.",
                'pattern': "^[a-z][a-z0-9_]{2,19}$"
            })

        return value

    def create(self, validated_data: Dict[str, Any]):
        """
        Overide create to method in order to hash users password.
        by default django serializer create method does not hash users password.
        we make use of the custom user manager create_user method to create and hash users password.
        """
        user = User.objects.create_user(**validated_data)

        return user



class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True)
