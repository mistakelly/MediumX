# django imports
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import get_user_model
from django.http import HttpRequest
import socket

# django messages import.
from django.contrib import messages
from django.middleware.csrf import get_token

# custom imports
from users.forms import EmailRegistrationForm
from users.authentication.account_creation.create_user_email_verification import (
    send_account_creation_email_link,
)

# custom imports
from django.http import JsonResponse
from django.http import HttpRequest
from django.shortcuts import render
from django.contrib.auth import get_user_model

from users.email_verification import send_email_confirmation_link


# helper function, to validate if request is an ajax request.
def is_ajax(request):
    return request.headers.get("x-requested-with") == "XMLHttpRequest"


# api view to check if a username is available
def checkusernameavailability(request: HttpRequest):
    """
    This view function checks if a username is available in the database.

    Args:
        request (HttpRequest): The HTTP request object containing the username to check.

    Returns:
        JsonResponse: The JSON response containing the availability status of the username.
    """
    print("I just touched the get username function")
    username = request.GET.get("username")
    exists = get_user_model().objects.filter(username=username).exists()
    return JsonResponse({"available": not exists})



def homepage(request: HttpRequest) -> HttpResponse:
    # return HttpResponse("<h1>Django Homepage</h1>")
    return render(request, template_name='home.html')



def authenticate_user(request: HttpRequest):
    """
    Handles passwordless authentication for the application.

    This function checks if a user with the provided email exists in the database.
    - If the user exists, an email with an authentication link is sent for the user to confirm their account and log in.
    - If the user does not exist, an email with a link to create an account is sent.

    Args:
        request (HttpRequest): The HTTP request object containing the user's email.

    Returns:
        HttpResponse: The rendered response to display the email registration form.
    """

    form = EmailRegistrationForm()
    userModel = get_user_model()  # Get the active user model.
    if request.method == "POST":
        form = EmailRegistrationForm(request.POST)

        if form.is_valid():
            print("Ohh yea it printed out 💃🏽")
            email = form.cleaned_data.get("email")
            try:
                if userModel.objects.filter(email=email).exists():
                    send_email_confirmation_link(
                        request, userModel.objects.get(email=email)
                    )
                else:
                    send_account_creation_email_link(request, email)
            # if the user does not have internet connection
            except socket.gaierror:
                messages.error(
                    request,
                    "No internet connection. Please check your connection and try again.",
                )
                return redirect("decide_homepage")

            except Exception as e:
                messages.error(request, f"An error occurred: {e}")
                return redirect("decide_homepage")

            messages.success(
                request,
                f"A verification link has been sent to {email}. Please check your email to complete registration.",
            )

            # handle ajax
            if is_ajax(request):
                return JsonResponse(
                    {"success": "A verification link has been sent to your email."}
                )

    context = {"form": form}
    return render(request, "public/index.html", context)
