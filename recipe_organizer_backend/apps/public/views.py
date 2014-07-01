from rest_framework import generics

from apps.public.serializers import *


# Create your views here.
class RecipeList(generics.ListAPIView):
    model = Recipe
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Recipe
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

class IngredientList(generics.ListAPIView):
    model = Ingredient
    serializer_class = IngredientSerializer
    queryset = Ingredient.objects.all()

class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Ingredient
    serializer_class = IngredientSerializer
    queryset = Ingredient.objects.all()