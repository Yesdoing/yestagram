from rest_framework import serializers
from . import models 
from instagram.users import models as user_models
from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)

class SmallImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
        )

class CountImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'like_counts',
            'comment_counts'
        )
        

class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'username',
            'profile_image',
        )


class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator'
        )


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'




class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()
    comments = CommentSerializer(many=True)
    creator = FeedUserSerializer()

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'like_counts',
            'creator',
            'tags',
            'created_at'
        )


