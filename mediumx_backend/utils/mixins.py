from django.core.exceptions import ObjectDoesNotExist

from django.contrib.auth import get_user_model

from users.models import CustomUser

# User = get_user_model()

class CRUDOperationMixin():
    def get_single_obj(self, pk: int, model: CustomUser, error=None):

        try: 
            obj = model.objects.get(pk=pk)
        except model.DoesNotExist:
            # use the _meta property to get the model name.
            raise ObjectDoesNotExist(error)
        
        return obj