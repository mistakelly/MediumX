from rest_framework import serializers
from apps.posts.models import Post, PostCategory

from src.constants import User


class PostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCategory
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


    # def create()


    def validate_categories(self, categories):
        """
        Ensure that no more than 3 categories are assigned to a post.
        """
        print('categories', len(categories))

        if len(categories) > 3:
            raise serializers.ValidationError(
                "A post can be assigned to a maximum of 3 categories.")
        return categories
