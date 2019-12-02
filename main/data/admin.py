from django.contrib import admin
from .models import Cloth, Person, Keywords

# Register your models here.

admin.site.register([Cloth, Person, Keywords])
