from .models import Cloth
from rest_framework import viewsets, permissions
from .serializers import ClothSerializer


class ClothViewSet(viewsets.ModelViewSet):
    queryset = Cloth.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ClothSerializer
