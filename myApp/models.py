from django.db import models
# Create your models here.

class Price(models.Model):
    my_name = models.CharField(max_length=50 , null=True, blank=True)
    my_price = models.IntegerField(null=True, blank=True)
    month = models.IntegerField(null=True, blank=True)
    Fitur_1 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_2 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_3 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_4 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_5 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_6 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_7 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_8 = models.TextField(max_length=150, null=True, blank=True)
    Fitur_9 = models.TextField(max_length=150, null=True, blank=True)


    def __str__(self):
        return self.my_name
    

class Payment(models.Model):
  id = models.AutoField(primary_key=True)
  country = [
    ('Australia', 'Australia'),
    ('United States', 'United States'),
    ('Canada', 'Canada'),
    ('United Kingdom', 'United Kingdom'),
    ('Norway', 'Norway'),
    ('Sweden', 'Sweden'),
    ('Finland', 'Finland'),
    ('Turkey', 'Turkey'),
    ('Romania', 'Romania'),
    ('Poland', 'Poland'),
    ('Austria', 'Austria'),
    ('Italy', 'Italy'),
    ('Germany', 'Germany'),
    ('Canada', 'Canada'),
    ('United States of America', 'United States of America'),
    ('France', 'France'),
    ('Spain', 'Spain'),
    ('Portugal', 'Portugal'),
  ]
  product = [
    ('ultimate', 'ultimate'),
    ('premium', 'premium'),
    ('standard', 'standard'),
    ('basic', 'basic'),
  ]

  full_name = models.CharField(max_length=100, null=True, blank=True)
  phone_number = models.CharField(max_length=12, null=True, blank=True)
  email = models.EmailField(max_length=20 ,null=True, blank=True)
  country = models.CharField(max_length=50, choices=country , null=True, blank=True)
  mac_address = models.CharField(max_length=50,null=True, blank=True)
  device = models.CharField(max_length=100, null=True, blank=True)
  product = models.CharField(max_length=50, choices=product , null=True, blank=True)

  def __str__(self):
    return str(self.full_name)