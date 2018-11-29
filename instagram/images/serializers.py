from rest_framework import serializers
from . import models 


class ImageSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = '__all__'


class CommentSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.Comment
        fields = '__all__'


class LikeSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'

