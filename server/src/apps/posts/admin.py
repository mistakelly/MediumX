from django.contrib import admin

from apps.reactions.post_reactions.models.post_reaction_model import PostReaction

from .models import Post, PostCategory


class PostCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)


class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'status', "like_count", "dislike_count")
    list_filter = ('author', 'created_at', 'categories')
    search_fields = ('title', 'content', 'author__username')
    # ordering = ('-created_at',)

    filter_horizontal = ('categories',)

    # Optionally, customize how the form is displayed
    fields = ('author', 'title', 'content', 'slug',
              'img', 'status', 'categories')

    # def comment_count(self, obj):
    #     return obj.comments.count()

    def like_count(self, obj: Post):
        return obj.reactions.filter(reaction_type=PostReaction.ReactionType.LIKE).count()
    
    def dislike_count(self, obj: Post):
        return obj.reactions.filter(reaction_type=PostReaction.ReactionType.DISLIKE).count()
    
    like_count.short_description = 'Likes'
    dislike_count.short_description = 'Dislikes'

    

        # return obj.filter.count()

    # Calculate the sum of like_count for all likes related to this post
    # return obj.post_likes.aggregate(like_count_sum=models.Sum('like_count'))['like_count_sum'] or 0


admin.site.register(Post, PostAdmin)
admin.site.register(PostCategory, PostCategoryAdmin)
