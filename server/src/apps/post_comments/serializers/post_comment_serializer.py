from rest_framework import serializers
from apps.post_comments.models import PostComment
from apps.users.serializers.user_serializer import UserSerializer



class PostCommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = PostComment
        fields = ["id", "content", "created_at", "user"]

