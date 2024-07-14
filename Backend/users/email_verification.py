# user imports
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth import get_user_model

# urls import
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str


# template imports
from django.http import HttpRequest
from django.shortcuts import redirect, render
from django.contrib.auth import login

# custom imports
from users.tokens import email_confirmation_token

def send_email_confirmation_link(request: HttpRequest, user: AbstractBaseUser):
    """
    Sends an email confirmation link to the user if they have an account with the application.

    Args:
        request (HttpRequest): The HTTP request object, used to build the confirmation URL.
        user (AbstractBaseUser): The user object representing the account for which the confirmation link is being sent.

    Process:
        1. Generates a token for email confirmation using the user's ID, timestamp, and is_active status.
        2. Encodes the user's ID to create a URL-safe base64 string (uid).
        3. Constructs the confirmation URL including the protocol, domain, uid, and token.
        4. Sends an email to the user's registered email address with the confirmation link.

    The confirmation URL in the user's email will look something like this:
        http://127.0.0.1:8000/confirm_email/MTA3/c8zo2j-028bea8ae89bcb5b9e08864264b91184/

    When the user clicks this link, and the link is valid it redirect the user to the confirm_email view function.

    Raises:
        ValueError: If the email sending fails.

    """
    token = email_confirmation_token.make_token(user)
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    protocol = "http"
    domain = request.get_host()
    confirmation_url = f"{protocol}://{domain}/confirm_email/{uid}/{token}/"

    # Configure and send mail
    subject = "Confirm Your Email Address"
    message = f"Click the link below to confirm your email address:\n\n{confirmation_url}"
    send_mail(subject, message, "kelvinokoye413@gmail.com", [user.email])



def confirm_email(request: HttpRequest, uid: str, token: str):
    """
    Confirms the user's email address based on the provided uid and token.

    Args:
        request (HttpRequest): The HTTP request object.
        uid (str): URL-safe base64 encoded user ID.
        token (str): Token used for email confirmation.

    Process:
        1. Decodes the uid to retrieve the user's primary key.
        2. Retrieves the user object using the decoded user ID.
        3. Validates the token to ensure it matches the user and is still valid using the .check_token() method from the custom email_confirmation_token.
        4. Activates the user's account by calling user.activate_account().
        5. Logs the user into the current session.
        6. Redirects the user to the decide_homepage view function to determine the next template to render.

    Returns:
        HttpResponseRedirect: Redirects to the decide_homepage view on successful confirmation.
        HttpResponse: Renders an email confirmation invalid page if the token is invalid or expired.

    Raises:
        ValueError: If the uid cannot be decoded or the user object cannot be retrieved.

    """
    uid = force_str(urlsafe_base64_decode(uid))

    userModel = get_user_model()

    try:
        user = userModel.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, userModel.DoesNotExist):
        user = None

    if email_confirmation_token.check_token(user, token):
        user.activate_account()
        login(request, user, backend="django.contrib.auth.backends.ModelBackend")
        return redirect("decide_homepage")
    else:
        return render(request, "public/email_confirmation_invalid.html")
