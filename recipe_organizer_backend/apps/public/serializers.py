from rest_framework import serializers

from apps.public.models import *


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient