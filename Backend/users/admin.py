from django.contrib import admin
from users.models import UserInterest, UserProfile
from django.contrib.auth import get_user_model

# get the active user model.
User = get_user_model()


# Register User model
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    """
    Admin configuration for the User model.

    Attributes:
        search_fields (list): Fields that can be searched in the admin interface.
        list_display (list): Fields displayed as columns in the admin interface.

    Usage:
        This admin interface allows managing user accounts with fields like email,
        username, active status, and last login timestamp.

    """
    search_fields = ['email']
    list_display = ['email', 'username', 'is_active', 'last_login']


# Register UserInterest model
@admin.register(UserInterest)
class UserInterestAdmin(admin.ModelAdmin):
    """
    Admin configuration for the UserInterest model.

    Attributes:
        search_fields (list): Fields that can be searched in the admin interface.

    Usage:
        This admin interface allows managing user interests associated with profiles.

    """
    search_fields = ['users_interest']


# Register UserProfile model
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    """
    Admin configuration for the UserProfile model.

    Usage:
        This admin interface allows managing user profiles.

    """
    pass

