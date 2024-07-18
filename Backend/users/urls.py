from users.views import (
    homepage,
    authenticate_user, 
    checkusernameavailability
)

from users.authentication.account_creation.create_user_authentication import (
    create_username, user_interest
)

from users.authentication.account_creation.create_user_email_verification import (
    confirm_account,
)

from users.email_verification import confirm_email
from django.urls import path

# URL patterns responsible for routing requests to the appropriate view functions.
urlpatterns = [
    path("", homepage, name="decide_homepage"),
    path("authenticate/", authenticate_user, name="authenticate"),
    path("create_username/<str:email>/", create_username, name="create_username"),
    path("confirm_email/<str:uid>/<str:token>/", confirm_email, name="confirm_email"),
    path(
        "confirm_account/<str:email>/<str:token>/",
        confirm_account,
        name="confirm_account",
    ),
    path("tag/select_tag/<str:user_id>/", user_interest, name="user_interest"),
    path("check_username/", checkusernameavailability, name="checkusernameavailability"),

]

