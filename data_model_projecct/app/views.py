from django.http import JsonResponse
from django.shortcuts import redirect, render
from . models import Person


def index(request):
    return render(request,'app/index.html')


def name_with_age(request):
    return render(request,'app/name_with_age.html')


def get_name_with_age(request):
    data = Person.objects.all().values()
    #get all objects in a list sendingas a json response
    # [{'id': 1, 'name': 'amal', 'age': 10}, {'id': 3, 'name': 'sreejith', 'age': 10}, {'id': 5, 'name': 'ashik', 'age': 10}, {'id': 6, 'name': 'akshay', 'age': 10}, {'id': 7, 'name': 'vijay', 'age': 10}, {'id': 8, 'name': 'azar', 'age': 10}, {'id': 9, 'name': 'nazim', 'age': 10}, {'id': 11, 'name': 'lokesh', 'age': 10}]
    return JsonResponse({'data': list(data)})

#same function on top
def get_data(request):
    data= Person.objects.all().values()
    return JsonResponse({'data': list(data)})

#delete object
def delete(request,id):
    obj=Person.objects.get(id=id)
    obj.delete()
    return redirect('name_with_age')
