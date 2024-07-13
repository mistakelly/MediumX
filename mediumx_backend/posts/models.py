from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


User = settings.AUTH_USER_MODEL
   
class Post(models.Model):
    class PostChoices(models.TextChoices):
        DRAFT = 'df', 'Draft'
        PUBLISHED = 'pb', 'Published'
        ARCHIVED = 'ar', 'Archived'

    title = models.CharField(max_length=255)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=50, unique=True)
    img = models.FileField(upload_to='post_images', null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=2, choices=PostChoices.choices, default=PostChoices.DRAFT)

    class Meta:
        db_table = 'posts'

    def __str__(self) -> str:
        return f"Post: {self.title} (Status: {self.status} {self.author})"
    


class PostComment(models.Model):
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comment_authors')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_comments')

    class Meta:
        db_table = 'post_comments'

    def __str__(self) -> str:
        return f"Comment by {self.author.username} on {self.post.title} (Created: {self.created_at})"
    
class PostCommentLike(models.Model):
    like_count = models.PositiveIntegerField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(PostComment, on_delete=models.CASCADE)

    class Meta:
        db_table = 'post_comment_likes'

    def __str__(self) -> str:
        return f"CommentLike: {self.comment.comment[:30]}... by {self.author.username} (Likes: {self.like_count})"

class PostCommentDislike(models.Model):
    dislike_count = models.PositiveIntegerField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(PostComment, on_delete=models.CASCADE)

    class Meta:
        db_table = 'post_comment_dislikes'

    def __str__(self) -> str:
        return f"CommentDislike: {self.comment.comment[:30]}... by {self.author.username} (Dislikes: {self.dislike_count})"



class PostLike(models.Model):
    like_count = models.PositiveIntegerField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        db_table = 'post_likes'

    def __str__(self) -> str:
        return f"PostLike: {self.post.title} by {self.author.username} (Likes: {self.like_count})"

class PostDislike(models.Model):
    dislike_count = models.PositiveIntegerField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        db_table = 'post_dislikes'

    def __str__(self) -> str:
        return f"PostDislike: {self.post.title} by {self.author.username} (Dislikes: {self.dislike_count})"

class PostCategory(models.Model):
    name = models.CharField(max_length=50)
    Post = models.ManyToManyField(Post, related_name='categories')

    def __str__(self) -> str:
        return f"Category: {self.name}"