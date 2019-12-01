from django.db import models


class Cloth(models.Model):
    id = models.IntegerField(primary_key=True)
    url = models.URLField()
    img = models.ImageField(null=True)
    price = models.CharField(max_length=100)
    fav_by = models.ManyToManyField('Person')
    key_words = models.ManyToManyField('Keywords')

    def __str__(self):
        return f'cloth nr {str(self.id)}'


class Keywords(models.Model):
    word = models.CharField(max_length=100)
    clothes = models.ManyToManyField(
        'Cloth', through=Cloth.key_words.through)

    def __str__(self):
        return self.word


class Person(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    age = models.IntegerField()
    fav_clothes = models.ManyToManyField(
        to=Cloth, through=Cloth.fav_by.through)

    def __str__(self):
        return f'{self.name} {self.surname}'
