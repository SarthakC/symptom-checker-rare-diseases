from django.db import models
import uuid
# Create your models here.


class Query(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
