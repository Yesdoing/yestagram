from django.urls import path

from instagram.notifications.views import (
    notification_notifications_view,
)

app_name="notifications"

urlpatterns = [
    path("", view=notification_notifications_view, name="notifications"),
]
