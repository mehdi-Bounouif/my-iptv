# Generated by Django 4.2 on 2023-05-20 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0003_remove_payment_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='phone_number',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
    ]
