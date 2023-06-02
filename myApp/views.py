from django.shortcuts import render
from django.contrib import messages
from . models import *
from . forms import PaymentForm
# Create your views here.

def home(request):
    context = {
        'prices' : Price.objects.all()
    }
    return render(request, 'pages/index.html', context)


def payment(request):
    if request.method == 'POST':
        add_command = PaymentForm(request.POST)
        if add_command.is_valid():
            add_command.save()
            messages.success(request, 'hello world')


    
    context = {
        'form' : PaymentForm(),
    }
    return render(request, 'pages/payment.html', context)


def contact(request):
    return render(request, 'pages/contact.html')


def faqs(request):
    return render(request, 'pages/faqs.html')


def subscription(request):
    context = {
        'prices' : Price.objects.all()
    }
    return render(request, 'pages/Subscription.html', context)