from rest_framework import serializers

from .models import Region, Literacy


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'


class LiteracySerializer(serializers.ModelSerializer):
    region = serializers.ReadOnlyField(
        source='region.name'
    )

    class Meta:
        model = Literacy
        fields = '__all__'
