from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        # FIXME: date_joined not returned to the user after registeration.
        fields = ['id', 'username', 'password', 'date_joined']

    def save(self, **kwargs):

        user = User.objects.create_user(
            username=self.validated_data.get('username'),
            password=self.validated_data.get('password'),
        )

        return user
