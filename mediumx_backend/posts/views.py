# CORE DJANGO IMPORTS
from django.db import models

# REST FRAMEWORK IMPORTS
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view

# CUSTOM IMPORTS
from .models import Post, PostComment
from .serializers import PostSerializer, PostCommentSerializer

# TYPING
from typing import Any, Type, Optional


class PostSingleObjectMixin(APIView):
    serializer_class = PostSerializer

    def get_single_obj(self, pk: int, model: Type[models.Model]) -> Optional[models.Model]:
        try:

            obj = model.objects.get(pk=pk)
        except model.DoesNotExist:
            return None
        

        return obj

    def get(self, request: Request, pk: int) -> Response:

        post = self.get_single_obj(pk, Post)

        if not post:
            return Response({'error': 'The post was not found.'})

        return Response({'message': 'Post retrived successfully', 'post': self.serializer_class(post).data}, status=status.HTTP_200_OK)

    def put(self, request: Request, pk: int) -> Response:
        post = self.get_single_obj(pk, Post)

        if not post:
            return Response({'error': 'The post was not found.'})

        serializer = self.serializer_class(post, data=request.data)

        if not serializer.is_valid():
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        
        return Response({'message': 'Post updated successfully updated', 'post': self.serializer_class(post).data}, status=status.HTTP_200_OK)

            
    def delete(self, request: Request, pk: int = None) -> Response:
        post = self.get_single_obj(pk, Post)

        if not post:
            return Response({'error': 'The post was not found.'})
        
        post.delete()

        return Response({'message': 'Post deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

        return Response({'welcome': 'get single'})


# POSTS API VIEW.
class PostAPIManager(APIView):
    # TODO: add serializer class

    serializer_class = PostSerializer

    def serializer_isvalid(serializer):
        if not serializer.is_valid():
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        return serializer

    def get(self, request: Request) -> Response:
        try:
            posts = Post.objects.all()

            if not posts.exists():
                return Response({"message": "No posts available."}, status=status.HTTP_200_OK)

            serializer = self.serializer_class(posts, many=True)

            return Response({'message': 'post retrieved successfully', 'posts': serializer.data}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)})

    def post(self, request: Request) -> Response:

        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response({'message': 'post created successfully', 'post': serializer.data}, status=status.HTTP_201_CREATED)



# COMMENTS API VIEW
class CommentsAPIView(APIView):
    serializer_class = PostCommentSerializer
    # custom method

    def get_single_comment(self, pk):
        try:

            comment = PostComment.objects.get(pk=pk)
        except PostComment.DoesNotExist:
            return Response({'error': 'The comment was not found.'}, status=status.HTTP_404_NOT_FOUND)

        return comment

    def get(self, request: Request, pk: int = None) -> Response:

        # ########################## GET SINGLE COMMENT ###############################
        if pk:
            comment = self.get_single_comment(pk)

            return Response({'message': 'comment retrived successfully', 'comment': self.serializer_class(comment).data}, status=status.HTTP_200_OK)

        # ########################## GET ALL COMMENTS ###############################
        comments = PostComment.objects.all()

        if not comments.exists():
            return Response({"message": "No comments available."}, status=status.HTTP_200_OK)

        serializer = self.serializer_class(comments, many=True)

        return Response({'message': 'comments retrived successfully', 'comments': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request: Request) -> Response:
        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response({'message': 'Comments created succesfully', 'comment': serializer.data}, status=status.HTTP_201_CREATED)

    def patch(self, request: Request, pk: int) -> Response:

        # retrive comment
        comment = self.get_single_comment(pk)

        # set partial to True to allow partial update of comment.
        serializer = self.serializer_class(
            comment, data=request.data, partial=True)

        if not serializer.is_valid():
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response({'message': 'Comments updated succesfully', 'comment': serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request: Request, pk: int) -> Response:
        comment = self.get_single_comment(pk)

        comment.delete()

        return Response({'message': 'Comment deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


@api_view()
def trendingPosts(request: Request) -> Response:
    """
    Algorithm to determine trending post

    post with most likes,
    post with most comments.
    """
    return Response({'welcome': 'trending posts'})
