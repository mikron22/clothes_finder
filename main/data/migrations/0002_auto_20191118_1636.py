# Generated by Django 2.2.7 on 2019-11-18 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cloth',
            name='subcategory',
            field=models.CharField(max_length=100),
        ),
    ]
