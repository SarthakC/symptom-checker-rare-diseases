# Generated by Django 2.2.7 on 2019-11-13 23:49

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_auto_20191113_2257'),
    ]

    operations = [
        migrations.AlterField(
            model_name='query',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
