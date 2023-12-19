from django.conf import settings
from django.db import models


class Dcom(models.Model):
    "Generated Model"
    asds1 = models.CharField(
        max_length=100,
    )
    sdvs = models.BigIntegerField()
    fdbt = models.IntegerField()
    rel_user_1_n = models.ForeignKey(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="dcom_rel_user_1_n",
    )
    rel_dcom_1_1 = models.OneToOneField(
        "home.Dcom",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="dcom_rel_dcom_1_1",
    )
