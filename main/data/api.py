from .models import Cloth, Person, Keywords
from rest_framework import viewsets, permissions, generics, filters
from .serializers import ClothSerializer, PersonSerializer, KeywordsSerializer


class ClothViewSet(viewsets.ModelViewSet):
    queryset = Cloth.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ClothSerializer


class PersonAPIView(generics.ListAPIView):
    search_fields = ['name', 'surname', 'phone__brand']
    ordering_fields = ['surname']
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    queryset = Person.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PersonSerializer


class KeywordsAPIView(generics.ListAPIView):
    queryset = Keywords.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = KeywordsSerializer
