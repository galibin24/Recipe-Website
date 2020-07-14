from django.urls import path
from api import views

urlpatterns = [
    path("api/recipes/", views.recipe_list),
    path("api/recipes/<int:id>/", views.recipe_item),
]
