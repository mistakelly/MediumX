from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.tokens import PasswordResetTokenGenerator

class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    """
    Custom token generator for account activation links.

    Process:
        This class inherits from Django's default PasswordResetTokenGenerator and overrides
        the _make_hash_value method to create a unique token for account activation purposes.
        The token is created using the user's ID, timestamp, and is_active status.

    Usage:
        Use this class to generate tokens for account activation links sent via email.

    Example:
        To generate a token for user 'user' at a specific 'timestamp':
            token_generator = AccountActivationTokenGenerator()
            token = token_generator.make_token(user, timestamp)

    """
    def _make_hash_value(self, user: AbstractBaseUser, timestamp: int) -> str:
        """
        Generates a hash value for creating a token.

        Args:
            user (AbstractBaseUser): The user object for whom the token is being generated.
            timestamp (int): The timestamp (in seconds) when the token is created.

        Returns:
            str: A string representation of the hash value used as the token.

        """
        return f"{user.pk}{timestamp}{user.is_active}"



class AccountCreationActivationTokenGenerator(PasswordResetTokenGenerator):
    """
    Custom token generator for account creation links.

    Process:
        This class inherits from Django's default PasswordResetTokenGenerator and overrides
        the _make_hash_value method to create a unique token for account activation purposes.
        The token is created using the user's ID, timestamp, and is_active status.

    Usage:
        Use this class to generate tokens for account creation links sent via email.

    Example:
        To generate a token for email 'user@example.com' at a specific 'timestamp':
            token_generator = AccountCreationActivationTokenGenerator()
            token = token_generator.make_token('user@example.com', timestamp)

    """
    def _make_hash_value(self, email: str, timestamp: int) -> str:
        """
        Generates a hash value for creating a token.

        Args:
            email (str): The email address for which the token is being generated.
            timestamp (int): The timestamp (in seconds) when the token is created.

        Returns:
            str: A string representation of the hash value used as the token.

        """
        return f"{email}{timestamp}"





email_confirmation_token = AccountActivationTokenGenerator()
create_account_token = AccountCreationActivationTokenGenerator()
