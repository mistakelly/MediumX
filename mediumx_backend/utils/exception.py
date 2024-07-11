from rest_framework.exceptions import APIException


class SerializerValidationException(APIException):
    status_code = 400
    default_detail = 'Serializer validation failed.'
    default_code = 'serializer_validation_failed'

    def __init__(self, errors):
        self.detail = errors  # Pass the serializer errors to the exception

