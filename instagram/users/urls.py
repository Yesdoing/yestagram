from django.urls import path

from instagram.users.views import (
    explore_users_view,
)

app_name = "users"
urlpatterns = [
    path("explore", view=explore_users_view, name="explore_users"),
]
