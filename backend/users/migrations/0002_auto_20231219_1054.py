# Generated by Django 3.2.23 on 2023-12-19 10:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0002_dcom"),
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="rel_dcom_1_1",
            field=models.OneToOneField(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="user_rel_dcom_1_1",
                to="home.dcom",
            ),
        ),
        migrations.AddField(
            model_name="user",
            name="rel_user_n_n",
            field=models.ManyToManyField(
                blank=True,
                null=True,
                related_name="user_rel_user_n_n",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="first_name",
            field=models.CharField(
                blank=True, max_length=150, verbose_name="first name"
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="name",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
