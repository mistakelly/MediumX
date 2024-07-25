from typing import Dict, Any

from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    user_perms = ['is_staff', 'is_superuser']

    def _create_user(self, username: str, password: str, email: str=None, **extrafields: Dict[Any, str]):
        required_fields = ['username', 'password']

        for field in required_fields:
            if not locals()[field]:
                raise ValueError(
                    f'{field} cannot be null or empty, please provide a value for {field}')
        
        if email:
            email = self.normalize_email(email)

        user = self.model(username=username, password=password, email=email, **extrafields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, username: str, password: str, email: str=None, **extrafields: Dict[Any, str]):
        print('inside create user', **extrafields)

        # check if is_staff and is_super user is set to true for ordinary users
        for perm in self.user_perms:
            if extrafields.get(perm) is True:
                raise ValueError(
                    f'{perm} cannot be set to True for a normal user')

        return self._create_user(username, password,  email, **extrafields)

    def create_superuser(self, username: str, password: str, email: str, **extrafields: Dict[Any, str]):

        for perm in self.user_perms:
            if extrafields.get(perm) is False:
                raise ValueError(
                    f'{perm} cannot be set to False for a super_user')

        extrafields.setdefault('is_staff', True)
        extrafields.setdefault('is_superuser', True)

        return self._create_user(username, password,  email, **extrafields)
