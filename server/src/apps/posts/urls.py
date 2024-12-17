from .views.post_category_views import PostCategoryViewSet
from .views.post_views import PostListCreate, PostDetail
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'categories', PostCategoryViewSet, basename='category')

urlpatterns = [
    path('', PostListCreate.as_view(), name='post-list-create'),
    path('<int:pk>/', PostDetail.as_view(), name='post-detail'),

    # INCLUDE POSTS LIKES
    path('<int:post_id>/reactions/', include("apps.reactions.post_reactions.urls")),
    path('<int:post_id>/likes/', include("apps.post_likes.urls")),


] + router.urls
