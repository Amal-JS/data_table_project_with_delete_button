"""
URL configuration for data_model_projecct project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from re import Pattern
from django import urls
from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),

    #view function to get all objects data
    path('get_data/', views.get_data, name='get_data'),
    #same function on top
    path('get_name_with_age/',views.get_name_with_age,name='get_name_with_age'),

    
    path('',views.index,name='index'),
    path('name_with_age/',views.name_with_age,name="name_with_age"),

    #delete url
    path('delete/<int:id>/',views.delete,name='delete')
    
]
