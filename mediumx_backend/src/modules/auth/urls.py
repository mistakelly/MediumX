
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from django.urls import path
from . import views

urlpatterns = [
    # JWT AUTHENTICATION
    path('register/', views.RegisterUserView.as_view(), name='register-user'),
    path('login/', views.LoginUserView.as_view(), name='login-user'),


    path('token/', TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]