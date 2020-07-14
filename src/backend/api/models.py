from django.db import models
import requests

# Create your models here.

# getting an url using python is relativly slow
def get_image_url(Title):
    payload = {
        "client_id": "dOv0U82mN15Ftd2ikJwE5iQmCs-ZKmYz2ZA7UhNIgd8",
        "query": Title,
    }
    r = requests.get("https://api.unsplash.com/search/photos", params=payload)
    json = r.json()
    url = json["results"][0]["urls"]["small"]
    return url


class Recipe(models.Model):
    Title = models.CharField(max_length=80, blank=False, default="")
    Description = models.TextField()
    imageUrl = models.CharField(max_length=200, default="")

