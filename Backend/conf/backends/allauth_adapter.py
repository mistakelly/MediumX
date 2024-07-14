# django allauth imports
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from allauth.core.exceptions import ImmediateHttpResponse
from allauth.socialaccount.models import SocialLogin

# generic imports
from django.shortcuts import redirect
from django.http import HttpRequest
from django.urls import reverse

# import url encoder
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes

# import user model
from django.contrib.auth import get_user_model


class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    def pre_social_login(self, request: HttpRequest, sociallogin: SocialLogin):
        """
        Invoked just after a user successfully authenticates via a
        social provider, but before the login is actually processed
        (and before the pre_social_login signal is emitted).
        """
        user = sociallogin.user
        hashed_email = urlsafe_base64_encode(force_bytes(user.email))
        # Redirect to the create_username page with the email as a URL parameter
        url = reverse("create_username", kwargs={"email": hashed_email})

        # Check if the user's email already exists in the database
        if get_user_model().objects.filter(email=user.email).exists():
            if not user.username:
                raise ImmediateHttpResponse(redirect(url))
            return redirect("decide_homepage")
        else:
            # user.is_active = False
            sociallogin.connect(request, user)
            raise ImmediateHttpResponse(redirect(url))

        # Call the default implementation for other cases
        super().pre_social_login(request, sociallogin)
