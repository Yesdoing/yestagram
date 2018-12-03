from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers


class ExploreUsers(APIView):

    def get(self, request, format=None):

        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ExploreUserSerializer(last_five, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

        

explore_users_view = ExploreUsers.as_view()

class FollowUsers(APIView):

    def post(self, request, user_id, format=None):

        user = request.user
        print(user)

        try: 
            user_to_follow = models.User.objects.get(id=user_id)

            user.following.add(user_to_follow)

            user_to_follow.followers.add(user)

            return Response(status=status.HTTP_200_OK)

        except models.User.DoesNotExist:

            return Response(status=status.HTTP_404_NOT_FOUND)

follow_users_view = FollowUsers.as_view()