from django.db import models
from instagram.users import models as user_models
from instagram.images import models as image_models
from django.contrib.humanize.templatetags.humanize import naturaltime

class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    from_user = models.ForeignKey(user_models.User, on_delete=models.PROTECT, related_name='from_user')
    to_user = models.ForeignKey(user_models.User, on_delete=models.PROTECT, related_name='to_user')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    image = models.ForeignKey(image_models.Image, on_delete=models.PROTECT, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)

    @property
    def natural_time(self):
        return naturaltime(self.updated_at)

    class Meta:
        ordering = ['-updated_at']

    def __str__(self):
        return 'From: {} - To: {}'.format(self.from_user, self.to_user)