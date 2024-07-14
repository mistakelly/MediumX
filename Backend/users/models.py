from django.db import models
from conf.settings import AUTH_USER_MODEL

# models import
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# getlazy
from django.utils.translation import gettext_lazy as _

# timezone
from django.utils import timezone

# user object manager
from users.managers import CustomUserManager


# user model schema.
class User(AbstractBaseUser, PermissionsMixin):
    """
    Custom user model representing a user in the system.

    Attributes:
        email (EmailField): Email address of the user (unique).
        username (CharField): Username of the user (max length 150, unique, nullable).
        date_joined (DateTimeField): Date and time when the user joined.
        updated_at (DateTimeField): Date and time when the user was last updated.
        is_active (BooleanField): Indicates if the user account is active.
        is_staff (BooleanField): Indicates if the user is a staff member.
        is_superuser (BooleanField): Indicates if the user has superuser privileges.

    Fields:
        USERNAME_FIELD (str): Field used as the unique identifier for logging in (email).
        REQUIRED_FIELDS (list): List of fields required when creating a user.

    Manager:
        objects (CustomUserManager): Custom manager for managing user objects.

    Methods:
        update_username(self, username): Updates the user's username.
        activate_account(self): Activates the user's account by setting is_active to True.

    Meta:
        verbose_name (str): Singular name for the model in the admin interface.
        verbose_name_plural (str): Plural name for the model in the admin interface.

    """

    email = models.EmailField(_('email'), unique=True)
    username = models.CharField(_('username'), max_length=150, unique=True, null=True)
    date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
    updated_at = models.DateTimeField(_('update at'), default=timezone.now, null=True)
    is_active = models.BooleanField(_('is active'), default=True)
    is_staff = models.BooleanField(_('is staff'), default=False)
    is_superuser =  models.BooleanField(_('is superuser'), default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'Users Table'
        verbose_name_plural = 'Users Table'

    objects = CustomUserManager()

    def update_username(self, username):
        """
        Updates the username of the user.

        Args:
            username (str): New username for the user.
        """
        self.username = username
        self.save()

    def activate_account(self):
        """
        Activates the user's account by setting is_active to True.
        """
        self.is_active = True

    def __str__(self) -> str:
        """
        Returns a string representation of the user object.
        """
        return f'{self.email}'


# user preference model.
class UserInterest(models.Model):
    """
    Model representing user interests.

    Attributes:
        user_interest (CharField): User's interest (max length 100, unique).

    Meta:
        db_table (str): Database table name for the model.

    """

    user_interest = models.CharField(max_length=100, unique=True)

    class Meta:
        db_table = 'users_interest'

    def __str__(self) -> str:
        """
        Returns a string representation of the user interest object.
        """
        return f"{self.user_interest}"


class UserProfile(models.Model):
    """
    Model representing user profile and interests.

    Attributes:
        user (OneToOneField): Reference to the user associated with the profile.
        interests (ManyToManyField): User's interests related to the profile.

    Meta:
        db_table (str): Database table name for the model.

    """

    user = models.OneToOneField(AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profiles')
    interests = models.ManyToManyField(UserInterest, blank=True)

    class Meta:
        db_table = 'users_profile_interests'

    def __str__(self):
        """
        Returns a string representation of the user profile object.
        """
        return self.user.email
