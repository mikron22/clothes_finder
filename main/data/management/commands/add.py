from django.core.management.base import BaseCommand
from data.models import Cloth


class Command(BaseCommand):
    help = 'Adds dummy cloth'

    def handle(self, *args, **kwargs):
        c = Cloth()
        c.url = 'https://www.google.com/'
        c.img = 'https://flylib.com/books/2/631/1/html/2/images/13fig01.jpg'
        c.price = '100PLN'
        c.save()
        self.stdout.write(self.style.SUCCESS('Successfully added'))
