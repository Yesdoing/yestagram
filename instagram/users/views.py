from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers


class ExploreUsers(APIView):

    def get(self, request, format=None):

        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ListUserSerializer(last_five, many=True)

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

class UnfollowUsers(APIView):

    def post(self, request, user_id, format=None):

        user = request.user
        print(user)

        try: 
            user_to_follow = models.User.objects.get(id=user_id)

            user.following.remove(user_to_follow)

            user_to_follow.followers.remove(user)

            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.User.DoesNotExist:

            return Response(status=status.HTTP_404_NOT_FOUND)

unfollow_users_view = UnfollowUsers.as_view()

class UserProfile(APIView):

    def get(self, request, username, format=None):

        try:
            user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(user)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

user_profile_view = UserProfile.as_view()

class UserFollwers(APIView):

    def get(self, request, username, format=None):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        follow_user = found_user.followers.all()

        serializer = serializers.ListUserSerializer(follow_user, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

user_followers_view = UserFollwers.as_view()

class UserFollowing(APIView):

    def get(self, request, username, format=None):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        following_user = found_user.following.all()

        serializer = serializers.ListUserSerializer(following_user, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

user_following_view = UserFollowing.as_view()

class Search(APIView):

    def get(self, request, format=None):

        username = request.query_params.get('username', None)

        if username is not None:
            
            users = models.User.objects.filter(username__istartswith=username)

            serializer = serializers.ListUserSerializer(users, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

user_search_view = Search.as_view()