# django imports
from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model, login
from django.http import HttpRequest
from django.utils.encoding import force_str, force_bytes
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode


# custom imports
from users.forms import CreateUsernameForm
from users.models import UserInterest, UserProfile


def create_username(request: HttpRequest, email: str):
    """
    Renders a form for users to create a username and saves it as a new user.
    """
    userModel = get_user_model()
    form = CreateUsernameForm()

    if request.method == "POST":
        form = CreateUsernameForm(request.POST)
        if form.is_valid():
            # Decode the email parameter from URL safe base64
            email = force_str(urlsafe_base64_decode(email))

            # Extract username from form data
            username = form.cleaned_data.get("username")

            # Check if the user already exists in the database
            if userModel.objects.filter(email=email).exists():
                user = userModel.objects.get(email=email)
                user_id = urlsafe_base64_encode(force_bytes(user.id))
                # update the users username.
                user.update_username(username)
            else:
                # Create a new user with the provided email, username, and set active status
                user = userModel.objects.create_user(
                    email=email, username=username, is_active=True
                )
                # # Encode the user ID to pass as a parameter in the URL
                user_id = urlsafe_base64_encode(force_bytes(user.id))

            # update the users username.
            # Redirect to 'user_interest' view with user ID parameter
            return redirect("user_interest", user_id=user_id)

    context = {
        "form": form,
        "hashed_email": email,
        "unhashed_email": force_str(urlsafe_base64_decode(email)),
    }

    # Render the 'create_username.html' template with the form and email context
    return render(request, "private/account_creation/create_username.html", context)


def user_interest(request: HttpRequest, user_id: str):
    """
    Handles user interest selection during account creation.
    """
    userModel = get_user_model()

    if request.method == "POST":
        # Decode the user ID from URL safe base64
        user_id = force_str(urlsafe_base64_decode(user_id))

        # Retrieve user interests from form data
        user_choice_str = request.POST.get("user-interests")
        user_choice = user_choice_str.split(",")
        # pop the last element which is an empty list eg == ['1', '2', '3','4', ''].
        user_choice.pop() if user_choice else None  # Remove empty string elements

        print("User's selected interests:", user_choice)

        # Get user object using decoded user ID
        user = userModel.objects.get(id=user_id)

        # Log in the user using Django's login function
        login(request, user, backend="django.contrib.auth.backends.ModelBackend")

        # create user profile, the create would save the user object immediately to the database, so no need of additional user_profile.save().
        user_profile = UserProfile.objects.create(user=user)

        # Set user interests in the user profile
        if user_choice:
            user_profile.interests.set(user_choice)

        # Redirect to homepage after interest selection
        return redirect("decide_homepage")

    # Retrieve all user interests from the database
    interests = UserInterest.objects.all()

    # Prepare context data to render the template
    context = {
        "user_id": user_id,
        "interests": interests,
    }

    # Render the 'users_interest.html' template with interests and user ID context
    return render(request, "private/account_creation/users_interest.html", context)
