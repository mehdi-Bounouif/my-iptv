from django import forms
from .models import Payment
class PaymentForm(forms.ModelForm):
    class Meta:
        model = Payment
        fields = [
            'full_name',
            'phone_number',
            'email',
            'country',
            'mac_address',
            'device',
            'product',
        ]
        widgets ={ 
            'full_name': forms.TextInput(attrs={'class':'form-control','required':'on'}),
            'phone_number': forms.TextInput(attrs={'class':'form-control','required':'on'}),
            'email': forms.TextInput(attrs={'class':'form-control','required':'on'}),
            'country': forms.Select(attrs={'class':'form-select','required':'on'}),
            'mac_address': forms.TextInput(attrs={'class':'form-control','required':'on'}),
            'device': forms.TextInput(attrs={'class':'form-control'}),
            'product': forms.Select(attrs={'class':'form-select','required':'on'}),
        }