# Generated by Django 4.2 on 2023-05-19 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='full_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]