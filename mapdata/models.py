from django.db import models

# Create your models here.

class Region(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Literacy(models.Model):
    area_choice = (
        ('all', 'All'),
        ('rural', 'Rural'),
        ('urban', 'Urban')
    )
    region = models.ForeignKey(Region,on_delete=models.CASCADE)
    area = models.CharField(max_length=10, choices=area_choice)
    year = models.SmallIntegerField()
    male = models.SmallIntegerField()
    female = models.SmallIntegerField()
    total = models.SmallIntegerField()

    def __str__(self):
        return f'{self.region}-{self.year}-{self.area}'
