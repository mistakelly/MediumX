
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend

from django.shortcuts import get_object_or_404


from apps.reactions.post_reactions.models import PostReaction
from apps.reactions.post_reactions.serializers.post_reaction_serializer import PostReactionSerializer
from apps.posts.models import Post
from ..filters import PostReactionFilter


class PostReactionList(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostReactionSerializer

    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_class = PostReactionFilter
    queryset = PostReaction.objects.all()

    def reaction_count(self, model, post_id: int, reaction_type) -> int:
        return model.objects.filter(
            post_id=post_id, reaction_type=reaction_type
        ).count()

    def get(self, request, *args, **kwargs):
        # Apply filtering manually
        filtered_queryset = self.filter_queryset(self.get_queryset())

        # Paginate the filtered queryset
        page = self.paginate_queryset(filtered_queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        # If no pagination is required, return all objects
        serializer = self.get_serializer(filtered_queryset, many=True)
        return Response(serializer.data)

    def post(self, request: Request, post_id=None):
        serializer = self.get_serializer(
            data={
                'post': post_id,
                "reaction_type": request.data.get("reaction_type")},
            context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user,
                        post=Post.objects.filter(id=post_id).first())

        return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response("hello POST REQUST")


@api_view(['DELETE'])
def delete_post_reaction(request, post_id: int = None, reaction_type: str = None) -> Response:
    post = PostReaction.objects.filter(
        user=request.user, post_id=post_id, reaction_type=reaction_type).first()

    if not post:
        return Response(
            {"detail": f"No {reaction_type} found."},
            status=status.HTTP_404_NOT_FOUND
        )

    post.delete()

    return Response(status=status.HTTP_204_NO_CONTENT)
