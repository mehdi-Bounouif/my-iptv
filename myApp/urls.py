
from django.urls import path 
from .import views
urlpatterns = [
    path('',views.home, name='home'),
    path('payment/',views.payment, name='payment'),
    path('contact/',views.contact, name='contact'),
    path('faqs/',views.faqs, name='faqs'),
    path('subscription/',views.subscription, name='subscription'),
]
