from rest_framework import serializers
from . import models 



class CommentSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.Comment
        fields = '__all__'


class LikeSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'


class ImageSerializers(serializers.ModelSerializer):

    comments = CommentSerializers(many=True)
    likes = LikeSerializers(many=True)

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'likes'
        )


