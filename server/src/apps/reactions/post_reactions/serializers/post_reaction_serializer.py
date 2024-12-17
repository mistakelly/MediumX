from rest_framework import serializers

from apps.reactions.post_reactions.models import PostReaction


class PostReactionSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    post = serializers.CharField(read_only=True)
    reaction_type = serializers.ChoiceField(
        choices=PostReaction.ReactionType.choices)


    class Meta:
        model = PostReaction
        fields = ["id", "user", "post", "reaction_type"]

    def create(self, validated_data):
        user = self.context['request'].user
        post = validated_data['post']

        print('validated_data', validated_data)
        if validated_data.get("reaction_type") == "like":
            if PostReaction.objects.filter(user=user, post=post, reaction_type=PostReaction.ReactionType.LIKE).count() >= 20:
                print("reaction", PostReaction.objects.filter(
                    PostReaction.ReactionType.LIKE))
                raise serializers.ValidationError(
                    "You can only like this post up to 20 times.")
        else:
           if PostReaction.objects.filter(user=user, post=post, reaction_type=PostReaction.ReactionType.DISLIKE).count() >= 20:
            print("inside post reaction dislike")
            raise serializers.ValidationError(
                "You can only dislike this post up to 20 times.")

        return super().create(validated_data)
