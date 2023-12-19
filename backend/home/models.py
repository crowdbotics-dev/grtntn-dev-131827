from django.conf import settings
from django.db import models


class Dcom(models.Model):
    "Generated Model"
    asds1 = models.CharField(
        max_length=100,
    )
    sdvs = models.BigIntegerField()
    fdbt = models.IntegerField()
    gny = models.UUIDField()
    rel_user_1_n = models.ForeignKey(
        "users.User",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="dcom_rel_user_1_n",
    )
    rel_dcom_1_1 = models.OneToOneField(
        "home.Dcom",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="dcom_rel_dcom_1_1",
    )
