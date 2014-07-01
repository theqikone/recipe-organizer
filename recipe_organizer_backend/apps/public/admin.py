from django.contrib import admin

from apps.public.models import *


# Register your models here.
admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(IngredientCategory)