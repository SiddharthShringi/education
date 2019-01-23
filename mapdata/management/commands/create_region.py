from mapdata.models import Region
from django.core.management.base import BaseCommand
import requests


def literacy_data():
    data_url = "https://data.gov.in/node/100084/datastore/export/json"
    response = requests.get(data_url)
    format_data = []
    for d_arr in response.json()['data']:
        format_data.append({
            'name': d_arr[0],
        })
    return format_data

class Command(BaseCommand):
    help = 'create states '

    def handle(self, *args, **kwargs):
        for obj in literacy_data():
            Region.objects.create(**obj)
