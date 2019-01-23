from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests

# Create your views here.


# api view to get literacy data

@api_view(['GET', ])
def literacy_rate_data(request):
    data_url = "https://data.gov.in/node/100084/datastore/export/json"
    response = requests.get(data_url)
    format_data = []
    for d_arr in response.json()['data']:
        format_data.append({
            'region': d_arr[0],
            'area': 'all',
            'year': 1991,
            'male': d_arr[1],
            'female': d_arr[2],
            'total': d_arr[3]
        })
    for d_arr in response.json()['data']:
        format_data.append({
            'region': d_arr[0],
            'area': 'all',
            'year': 2001,
            'male': d_arr[4],
            'female': d_arr[5],
            'total': d_arr[6]
        })
    for d_arr in response.json()['data']:
        format_data.append({
            'region': d_arr[0],
            'area': 'rural',
            'year': 2011,
            'male': d_arr[7],
            'female': d_arr[8],
            'total': d_arr[9],
        })
    for d_arr in response.json()['data']:
        format_data.append({
            'region': d_arr[0],
            'area': 'urban',
            'year': 2011,
            'male': d_arr[10],
            'female': d_arr[11],
            'total': d_arr[12]
        })
    print(format_data)
    if request.method == 'GET':
        return Response(data={'data': format_data})


@api_view(['GET', ])
def school_electricity_data(request):
    data_url = "https://data.gov.in/node/4251821/datastore/export/json"
    response = requests.get(data_url)
    if request.method == 'GET':
        return Response(data=response.json())


@api_view(['GET', ])
def gross_enrolment_ratio_data(request):
    data_url = "https://data.gov.in/node/4251881/datastore/export/json"
    response = requests.get(data_url)
    if request.method == 'GET':
        return Response(data=response.json())


@api_view(['GET', ])
def girls_toilet_data(request):
    data_url = "https://data.gov.in/node/4251741/datastore/export/json"
    response = requests.get(data_url)
    if request.method == 'GET':
        return Response(data=response.json())


@api_view(['GET', ])
def boys_toilet_data(request):
    data_url = "https://data.gov.in/node/4251781/datastore/export/json"
    response = requests.get(data_url)
    if request.method == 'GET':
        return Response(data=response.json())
