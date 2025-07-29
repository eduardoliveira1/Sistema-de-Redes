from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    number = models.CharField(max_length=15)

    def __str__(self):
        return f"Contact \nName:{self.name}, email:{self.email}, number:{self.number}"

