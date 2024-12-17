from rest_framework import generics, status


# CUSTOM IMPORTS
from apps.post_comments.serializers.post_comment_serializer import PostCommentSerializer
from apps.posts.models import Post
from apps.post_comments.models import PostComment


# TODO: ADD PERMISSIONS
class PostCommentListCreate(generics.ListCreateAPIView):
    serializer_class = PostCommentSerializer
    queryset = PostComment.objects.all()

    def perform_create(self, serializer):
        post_id = self.kwargs.get("post_id")
        post = Post.objects.get(id=post_id)

        # Save comment with the associated user and post
        serializer.save(user=self.request.user, post=post)

    def get_queryset(self):
        return PostComment.objects.filter(user=self.request.user)


class PostCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PostComment.objects.all()
    serializer_class = PostCommentSerializer
