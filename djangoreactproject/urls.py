"""djangoreactproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mapdata import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/literacy_rate', views.literacy_rate_data),
    path('api/electricity', views.school_electricity_data),
    path('api/gross_enrolment_ratio', views.gross_enrolment_ratio_data),
    path('api/girls_toilet', views.girls_toilet_data),
    path('api/boys_toilet', views.boys_toilet_data)
]