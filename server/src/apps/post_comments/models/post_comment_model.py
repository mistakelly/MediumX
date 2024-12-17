from django.db import models
from django.core.validators import MinLengthValidator


class PostCommentManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)


class PostComment(models.Model):
    user = models.ForeignKey(
        "users.UserModel", related_name="user_comments", on_delete=models.CASCADE
    )
    post = models.ForeignKey(
        "posts.Post", related_name="post_comments", on_delete=models.CASCADE
    )
    # parent = models.ForeignKey(
    #     "self", null=True, blank=True, related_name="replies", on_delete=models.CASCADE
    # )
    content = models.TextField(validators=[MinLengthValidator(1)])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    objects = PostCommentManager()

    class Meta:
        db_table = "post_comments"
        verbose_name_plural = "post_comments"
        verbose_name = "post_comment"
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["post", "created_at"]),
            models.Index(fields=["user"]),
        ]

    def __str__(self):
        return f"Comment {self.id} by User {self.user.id} on Post {self.post.id}: {self.content[:20]}..."

    def delete(self, *args, **kwargs):
        self.is_deleted = True
        self.save()

    # def is_reply(self):
    #     return self.parent is not None
