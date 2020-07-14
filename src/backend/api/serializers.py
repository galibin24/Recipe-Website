from rest_framework import serializers
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    Title = serializers.CharField(required=False)
    Description = serializers.CharField(required=False)
    imageUrl = serializers.CharField(required=False)

    class Meta:
        model = Recipe
        fields = ["id", "Title", "Description", "imageUrl"]

