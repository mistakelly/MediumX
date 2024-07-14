from typing import Any
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.base_user import AbstractBaseUser
from django.http import HttpRequest



class EmailBackend(ModelBackend):
    def authenticate(self, request: HttpRequest, email: str) -> AbstractBaseUser | None:
        usermodel  = get_user_model()

        try:
           user = usermodel.objects.get(email=email)
        except usermodel.DoesNotExist:
           return None
        
        return user