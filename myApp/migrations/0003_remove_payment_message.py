# Generated by Django 4.2 on 2023-05-19 16:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0002_alter_payment_full_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payment',
            name='message',
        ),
    ]
