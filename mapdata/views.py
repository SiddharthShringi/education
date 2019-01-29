from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Region, Literacy
from .serializers import RegionSerializer, LiteracySerializer

# Create your views here.


# api view to get literacy data


@api_view(['GET', ])
def region_list(request):

    if request.method == 'GET':
        regions = Region.objects.all()
        serializer = RegionSerializer(regions, many=True)
        return Response(serializer.data)


@api_view(['GET', ])
def literacy_rate(request):

    if request.method == 'GET':
        data = Literacy.objects.all()
        serializer = LiteracySerializer(data, many=True)
        return Response(serializer.data)


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
