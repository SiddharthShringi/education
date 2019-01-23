from django.core.management.base import BaseCommand

import requests

from mapdata.models import Literacy
from mapdata.models import Region


class Command(BaseCommand):
    help = 'store fetched api data to database'

    def handle(self, *args, **kwargs):
        data_url = "https://data.gov.in/node/100084/datastore/export/json"
        response = requests.get(data_url)
        for d_arr in response.json()['data']:
            Literacy.objects.create(
                region= Region.objects.get_or_create(name=d_arr[0])[0],
                area= 'all',
                year= 1991,
                male= d_arr[1],
                female= d_arr[2],
                total= d_arr[3]
            )
            Literacy.objects.create(
                region= Region.objects.get_or_create(name=d_arr[0])[0],
                area= 'all',
                year= 2001,
                male= d_arr[4],
                female= d_arr[5],
                total= d_arr[6]
            )
            Literacy.objects.create(
                region= Region.objects.get_or_create(name=d_arr[0])[0],
                area= 'rural',
                year= 2011,
                male= d_arr[7],
                female= d_arr[8],
                total= d_arr[9],
            )
            Literacy.objects.create(
                region= Region.objects.get_or_create(name=d_arr[0])[0],
                area= 'urban',
                year= 2011,
                male= d_arr[10],
                female= d_arr[11],
                total= d_arr[12]
            )
