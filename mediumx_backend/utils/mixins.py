from django.core.exceptions import ObjectDoesNotExist
from utils.exception import SerializerValidationException

class CRUDOperationMixin():
    def get_single_obj(self, pk: int, model):

        try: 
            obj = model.objects.get(pk=pk)
        except model.DoesNotExist:
            raise ObjectDoesNotExist(f'{model.__name__} with id <{pk}> not found')
        
        return obj
           
    def validate_serializer(self, serializer):
        if not serializer.is_valid():
            raise SerializerValidationException(serializer.errors)
