# Generated by Django 3.2.23 on 2023-12-19 10:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dcom',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('asds1', models.CharField(max_length=100)),
                ('sdvs', models.BigIntegerField()),
                ('fdbt', models.IntegerField()),
                ('gny', models.UUIDField()),
                ('rel_dcom_1_1', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='dcom_rel_dcom_1_1', to='home.dcom')),
                ('rel_user_1_n', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='dcom_rel_user_1_n', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
