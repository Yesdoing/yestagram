from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers
from instagram.notifications import views as notification_views
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

class ExploreUsers(APIView):

    def get(self, request, format=None):

        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ListUserSerializer(last_five, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

        

explore_users_view = ExploreUsers.as_view()

class FollowUsers(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        try: 
            user_to_follow = models.User.objects.get(id=user_id)

            user.following.add(user_to_follow)

            user_to_follow.followers.add(user)

            notification_views.create_notification(user, user_to_follow, 'follow')

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
    def get_user(self, username):

        try:
            user = models.User.objects.get(username=username)
            return user
        except models.User.DoesNotExist:
            return None

    def get(self, request, username, format=None):


        user = self.get_user(username)
        
        if user is None:
        
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(user)
        
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, username, format=None):

        user = request.user

        found_user = self.get_user(username)

        if found_user is None:
        
            return Response(status=status.HTTP_404_NOT_FOUND)

        elif found_user.username != user.username:

            return Response(status=status.HTTP_401_UNAUTHORIZED)

        else:

            serializer = serializers.UserProfileSerializer(found_user, data=request.data, partial=True)

            if serializer.is_valid():

                serializer.save()

                return Response(data=serializer.data, status=status.HTTP_200_OK)
            
            else:

                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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


class ChangePassword(APIView):

    def put(self, request, username, format=None):

        user = request.user

        if user.username != username:

            return Response(status=status.HTTP_401_UNAUTHORIZED)

        current_password = request.data.get('current_password', None)

        password_match = user.check_password(current_password)

        if not password_match:

            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        new_password = request.data.get('new_password', None)

        if new_password is None:

            return Response(status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)

        user.save()

        return Response(status=status.HTTP_200_OK)

user_change_password_view = ChangePassword.as_view()

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

user_facebook_login = FacebookLogin.as_view()