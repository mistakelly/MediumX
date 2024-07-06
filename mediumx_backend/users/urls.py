from django.urls import path
from . import views

urlpatterns = [
    # USER ENDPOINTS
    path('', views.UserAPIView.as_view(), name='user-create-view'),
    path('<int:pk>', views.UserDetailAPIView.as_view(), name='user-detail-api-view'),
]