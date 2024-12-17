from django.urls import path
from apps.reactions.post_reactions.views import post_reaction_view
from apps.post_comments.views import post_comment_views
"""
Comment Endpoints
Create a Comment on a Post:

POST /api/posts/{post_id}/comments/

Get All Comments on a Post:
GET /api/posts/{post_id}/comments/

Get a Specific Comment:
GET /api/posts/{post_id}/comments/{comment_id}/


Update a Comment:
PUT /api/posts/{post_id}/comments/{comment_id}/

Delete a Comment:
DELETE /api/posts/{post_id}/comments/{comment_id}/
"""

urlpatterns = [
    # # INCLUDE POSTS LIKES
    path(
        '',
        post_comment_views.PostCommentListCreate.as_view(),
        name='post-comment-list'
    ),
    path(
        '<int:pk>/', post_comment_views.PostCommentDetail.as_view(),
        name='post-comment-detail'
    ),

]
