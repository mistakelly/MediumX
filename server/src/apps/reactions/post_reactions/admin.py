from django.contrib import admin
from apps.reactions.post_reactions.models import PostReaction


class PostReactionAdmin(admin.ModelAdmin):
    list_display = ('id', 'reaction_type',  'user', 'get_post_id')

    def get_user(self, obj):
        return obj.user
    
    def get_post_id(self, obj):
        return obj.post.id


admin.site.register(PostReaction, PostReactionAdmin)
