import django_filters
from apps.reactions.post_reactions.models import PostReaction


class PostReactionFilter(django_filters.FilterSet):
    user_id = django_filters.NumberFilter(
        field_name='user_id', lookup_expr='exact')
    reaction_type = django_filters.ChoiceFilter(
        field_name="reaction_type",
        choices=PostReaction.ReactionType.choices,  # Add this
        lookup_expr="exact"
    )

    class Meta:
        model = PostReaction
        fields = ['user_id', 'reaction_type']
