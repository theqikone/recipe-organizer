from django.db import models

# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(default="No description has been entered yet")
    ingredient = models.ManyToManyField('Ingredient')

    def __unicode__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=50)
    category = models.ManyToManyField('IngredientCategory')

    def __unicode__(self):
        return self.name

class IngredientCategory(models.Model):
    name = models.CharField(max_length=25)

    class Meta:
        verbose_name_plural = "Ingredient categories"

    def __unicode__(self):
        return self.name