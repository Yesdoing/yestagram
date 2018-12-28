from rest_framework.views import APIView
from rest_framework import status 
from rest_framework.response import Response
from datetime import datetime;
from . import models, serializers 

class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = models.Notification.objects.filter(to_user=user).order_by('-updated_at')

        serializer = serializers.NotificationsSerializer(notifications, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

notification_notifications_view = Notifications.as_view()

def create_notification(from_user, to_user, notification_type, image=None, comment=None):


    try:
        if notification_type is not 'comment':
            
            notification = models.Notification.objects.get(from_user=from_user, to_user=to_user, notification_type=notification_type)
            

            notification.updated_at = datetime.now()
        
        else:
            notification = models.Notification.objects.create(
                from_user = from_user,
                to_user = to_user, 
                notification_type = notification_type,
                image = image,
                comment = comment
            )

        notification.save()

    except models.Notification.DoesNotExist:

        notification = models.Notification.objects.create(
            from_user = from_user,
            to_user = to_user, 
            notification_type = notification_type,
            image = image,
            comment = comment
        )

        notification.save()
