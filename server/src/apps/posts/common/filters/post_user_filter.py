import django_filters
from apps.posts.models import Post


class UserPostFilter(django_filters.FilterSet):
    author = django_filters.CharFilter(
        field_name='author__username', lookup_expr="exact"
    )
    title = django_filters.CharFilter(
        field_name="title", lookup_expr="icontains"
    )
    created_at = django_filters.DateFromToRangeFilter(
        field_name='created_at'
    )
    status = django_filters.CharFilter(
        field_name="status", lookup_expr="exact"
    )
    category = django_filters.CharFilter(
        field_name='categories__name', lookup_expr="iexact"
    )

    class Meta:
        model = Post
        fields = ['author', 'title', 'created_at', "status", "category"]
