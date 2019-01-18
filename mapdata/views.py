from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests

# Create your views here.


# api view to get literacy data

@api_view(['GET',])
def literacy_rate_data(request):
    data_url = "https://data.gov.in/node/100084/datastore/export/json"
    response = requests.get(data_url)
    if request.method == 'GET':
        return Response(data = response.json())


@api_view(['GET',])
def school_electricity_data(request):
    data_url = "https://data.gov.in/node/4251821/datastore/export/json"
    response = requests.get(data_url)
    if request.method == 'GET':
        return Response(data = response.json())
