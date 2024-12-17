from django.db import models
from django.utils import timezone
from src.constants import User


class PostCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        db_table = 'post_categories'
        verbose_name = 'Post_category'
        verbose_name_plural = 'Post_categories'

    def __str__(self) -> str:
        return f"Category: {self.name}"


class Post(models.Model):
    # TODO: SLUGIFY TITLE
    class PostStatus(models.TextChoices):
        DRAFT = 'draft', 'Draft'
        PUBLISHED = 'published', 'Published'

    class PostVisiblity(models.TextChoices):
        PUBLIC = 'public', 'Public'
        PRIVATE = 'private', 'Private'

    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.CharField(max_length=255, unique=True)
    img = models.ImageField(upload_to='post_images', null=True, blank=True)
    published_at = models.DateTimeField(null=True, blank=True)

    author = models.ForeignKey(User, on_delete=models.CASCADE)

    post_visibility = models.CharField(
        max_length=10, choices=PostVisiblity.choices, default=PostVisiblity.PUBLIC
    )
    status = models.CharField(
        max_length=10, choices=PostStatus.choices, default=PostStatus.DRAFT
    )

    # MANY TO MANY RELATIONSHIP WITH postcategories
    categories = models.ManyToManyField(PostCategory, related_name='posts')

    class Meta:
        db_table = 'posts'
        indexes = [
            models.Index(fields=['author', 'id']),
            models.Index(fields=['slug']),
            models.Index(fields=['status']),
        ]
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self) -> str:
        return f"Post: {self.title} (Status: {self.status}, Author: {self.author})"




