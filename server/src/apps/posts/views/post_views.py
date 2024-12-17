from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status, generics, filters

from django_filters.rest_framework import DjangoFilterBackend


# CUSTOM IMPORTS
from ..models.post_model import Post
from apps.posts.serializers.post_serializer import PostSerializer
from ..common.filters.post_user_filter import UserPostFilter


class PostListCreate(generics.ListCreateAPIView):
    """
    filters
    search
    pagination
    sorting
    """
    serializer_class = PostSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter
    ]
    filterset_class = UserPostFilter
    search_fields = ['title', "author__username", "status", "categories__name"]
    ordering_fields = ['id', 'title', 'created_at', "status"]

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user, status='published', post_visibility='public')


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
