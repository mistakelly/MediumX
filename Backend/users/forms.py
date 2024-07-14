from django import forms


class EmailRegistrationForm(forms.Form):
    """
    Form for user email registration.

    Fields:
        email (EmailField): Field for user's email address.

    Widget:
        - EmailInput with CSS class 'register-email'.

    Usage:
        Use this form to collect the user's email address for registration.

    Example:
        form = EmailRegistrationForm()
        # Render form in a template and process user input.

    """

    email = forms.EmailField(
        label="Your Email", widget=forms.EmailInput(attrs={"class": "register-email"})
    )


class CreateUsernameForm(forms.Form):
    """
    Form for creating a username.

    Fields:
        username (CharField): Field for user's desired username.

    Widget:
        - TextInput with CSS class 'create-username'.

    Usage:
        Use this form to collect the user's desired username during account activation.

    Example:
        form = CreateUsernameForm()
        # Render form in a template and process user input.

    """

    username = forms.CharField(
        label="Your username", 
        widget=forms.TextInput(attrs={"class": "create-username"}),
    )
