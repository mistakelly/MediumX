from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _


from posts.models import PostCategory
from .manager import UserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(blank=True, null=True, unique=True)
    gender = models.CharField(max_length=10)
    date_joined = models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    profile_img = models.FileField(
        upload_to='user_profile', null=True, blank=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()


    class Meta:
        db_table = 'user'
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def get_username(self) -> str:
        return super().get_username()

    def __str__(self) -> str:
        return f'{self.username} {self.email} {self.date_joined}'


class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='users')
    bio = models.TextField(max_length=255, blank=True)
    birthdate = models.DateTimeField(null=True)
    post_recommend = models.ManyToManyField(PostCategory, related_name='categories')
    location = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    website = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    last_active = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'user_profiles'

    def __str__(self) -> str:
        return f'{self.user} {self.post_recommend.count()}'
