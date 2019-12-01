from django.contrib import admin
from .models import Cloth, Person, Phone, Keywords

# Register your models here.

admin.site.register([Cloth, Person, Phone, Keywords])
