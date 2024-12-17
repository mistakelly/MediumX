from django.urls import path
from apps.reactions.post_reactions.views import post_reaction_view
"""
Post Reactions Endpoints:
GET /api/posts/{post_id}/reactions/ - GET ALL REACTION TYPE
POST /api/posts/{post_id}/reactions/
    request_body = {
        reaction_type = "likes" or "dislikes"
    }


GET /api/posts/{post_id}/reactions/likes/ - Count likes for a post.
GET /api/posts/{post_id}/reactions/dislikes/ - Count likes for a post.


DELETE / api/posts/{post_id}/reactions/likes/ or dislikes - Remove a like from a post.
"""

urlpatterns = [
    # INCLUDE POSTS LIKES
    path('', post_reaction_view.PostReactionList.as_view(), name='post-reaction'),
    path('<str:reaction_type>/',
         post_reaction_view.delete_post_reaction, name='post-reaction-delete'),

]
