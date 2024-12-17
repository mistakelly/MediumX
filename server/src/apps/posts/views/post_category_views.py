from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser


# CUSTOM IMPORTS
from ..models.post_model import  PostCategory
from apps.posts.serializers.post_serializer import PostCategorySerializer


class PostCategoryViewSet(viewsets.ModelViewSet):
    queryset = PostCategory.objects.all()
    serializer_class = PostCategorySerializer
    permission_classes = [IsAdminUser]
