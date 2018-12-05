from rest_framework.views import APIView
from rest_framework import status 
from rest_framework.response import Response
from . import models, serializers 

class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = models.Notification.objects.filter(to_user=user)

        serializer = serializers.NotificationsSerializer(notifications, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

notification_notifications_view = Notifications.as_view()

def create_notification(from_user, to_user, notification_type, image=None, comment=None):

    notification = models.Notification.objects.create(
        from_user = from_user,
        to_user = to_user, 
        notification_type = notification_type,
        image = image,
        comment = comment
    )

    notification.save()
