from rest_framework import serializers
from . import models 
from instagram.users import serializers as user_serializers
from instagram.images import serializers as image_serializers

class NotificationsSerializer(serializers.ModelSerializer):

    from_user = user_serializers.ListUserSerializer() 
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'

