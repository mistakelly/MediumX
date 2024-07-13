from django.urls import path
from . import views

urlpatterns = [

    # POSTS ENDPOINTS
    path('', views.PostAPIManager.as_view(), name='api view'),

    path('<int:pk>', views.PostSingleObjectMixin.as_view(), name='api view'),

    # COMMENTS ENDPOINTS

    path('comments/', views.CommentsAPIView.as_view(), name='comments-api-view'),

    path('comments/<int:pk>', views.CommentsAPIView.as_view(), name='comments-update-api-view'),



    path('trending/', views.trendingPosts, name='trending posts'),

]