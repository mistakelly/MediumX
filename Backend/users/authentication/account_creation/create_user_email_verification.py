# urls import
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str


# template imports
from django.http import HttpRequest
from django.shortcuts import redirect, HttpResponse

# custom imports
from users.tokens import create_account_token

def send_account_creation_email_link(request: HttpRequest, email: str):
    token = create_account_token.make_token(email)

    hashed_email = urlsafe_base64_encode(force_bytes(email))

    protocol = "https" if request.is_secure() else "http"

    domain = request.get_host()

    confirmation_url = f"{protocol}://{domain}/confirm_account/{hashed_email}/{token}/"

    # configure and send mail
    subject = "Confirm Your Account creation"
    message = (
        f"Click the link below to confirm your email address:\n\n{confirmation_url}"
    )

    send_mail(subject, message, "kelvinokoye413@gmail.com", [email])


# view function responsible for confirming users email after account creation.
def confirm_account(request, email, token):
    email = force_str(urlsafe_base64_decode(email))
    try:
        if create_account_token.check_token(email, token):
            # redirect the user to the create username page, with the email.
            # rehash the email again cause we have to pass it to the create_account function.
            email = urlsafe_base64_encode(force_bytes(email))
            return redirect("create_username", email=email)
        else:
            return HttpResponse(f"onye oshi token")
    except Exception as e:
        return HttpResponse(f"Sorry error confirming email {e}")
