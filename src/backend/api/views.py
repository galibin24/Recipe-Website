from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
import requests

from .models import Recipe
from .serializers import RecipeSerializer

# Create your views here.


@csrf_exempt  # no csrf tokens passed
def recipe_list(request):
    if request.method == "GET":
        recipes = Recipe.objects.all()

        serializer = RecipeSerializer(recipes, many=True)
        print(serializer.data)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":

        data = JSONParser().parse(request)
        # print(data[Title])
        data["imageUrl"] = get_image_url(data["Title"])
        print(data)
        serializer = RecipeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def recipe_item(request, id):
    try:
        recipe = Recipe.objects.get(pk=id)
    except Recipe.DoesNotExist:
        HttpResponse(status=404)

    if request.method == "GET":
        serializer = RecipeSerializer(recipe)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        data["imageUrl"] = get_image_url(data["Title"])
        serializer = RecipeSerializer(recipe, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == "DELETE":
        recipe.delete()

        # lazy me I know it is suppose to return 201
        # better would be handle local deletion from state and make a call to api
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return JsonResponse(serializer.data, safe=False)


def get_image_url(Title):
    payload = {
        "client_id": "dOv0U82mN15Ftd2ikJwE5iQmCs-ZKmYz2ZA7UhNIgd8",
        "query": Title,
    }
    r = requests.get("https://api.unsplash.com/search/photos", params=payload)
    json = r.json()
    url = json["results"][0]["urls"]["small"]
    return url
