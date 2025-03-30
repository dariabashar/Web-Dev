from django.db import models

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(default='https://via.placeholder.com/150')  # картинка
