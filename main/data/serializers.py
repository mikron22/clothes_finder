from rest_framework import serializers
from .models import Cloth, Person, Keywords


class ClothSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cloth
        fields = '__all__'


class PersonSerializer(serializers.ModelSerializer):

    clothes = serializers.HyperlinkedIdentityField(Cloth)

    class Meta:
        model = Person
        fields = ['name', 'surname', 'age', 'clothes']


class KeywordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keywords
        fields = '__all__'
