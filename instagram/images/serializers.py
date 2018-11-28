from rest_framework import serializers
from . import models 


class ImageSerializers(serializers.Serializer):

    class Meta:
        model = models.Image
        fields = '__all__'


class CommentSerializers(serializers.Serializer):

    class Meta:
        model = models.Comment
        fields = '__all__'


class LikeSerializers(serializers.Serializer):

    class Meta:
        model = models.Like
        fields = '__all__'

