from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # USER ENDPOINTS
    path('', views.UserAPIView.as_view(), name='user-read-view'),
    path('register/', views.register_user_api_view, name='user-create-view'),
    path('<int:pk>', views.UserDetailAPIView.as_view(), name='user-detail-api-view'),

    # JWT AUTHENTICATION
    path('token/', TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]


# {
#     "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMTUxOTc2OCwiaWF0IjoxNzMxNDMzMzY4LCJqdGkiOiJjYTY0M2VlYjE4MDk0NTQyOTZjZjQwNjZjMDMzYjg0OCIsInVzZXJfaWQiOjMyfQ.uBDTPd7j4MHHI1PaAJa1dTY4ro_k1vlx4HxVWc8Vv0E"
# }
