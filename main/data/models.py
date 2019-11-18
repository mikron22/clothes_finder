from django.db import models

# Cloth model
class Cloth(models.Model):
    id = models.IntegerField(primary_key=True)
    url = models.URLField()
    img = models.ImageField(null=True)
    category = models.CharField(max_length=100)
    subcategory = models.CharField(max_length=100)
