from django.db import models
from src.constants import User



class PostReaction(models.Model):
    class ReactionType(models.TextChoices):
        LIKE = 'likes', 'likes'
        DISLIKE = 'dislikes', 'dislikes'


    user = models.ForeignKey("users.UserModel", related_name="reactions", on_delete=models.CASCADE)
    post = models.ForeignKey("posts.Post", related_name="reactions", on_delete=models.CASCADE)
    reaction_type = models.CharField(choices=ReactionType.choices, max_length=8)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        db_table = "post_reactions"

    def __str__(self):
        return f"{self.user} reacted with {self.reaction_type} on {self.post.title}"
