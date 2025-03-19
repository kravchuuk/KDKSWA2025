from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    bio = models.TextField(blank=True, null=True)

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",  # Уникальное related_name
        blank=True
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_permissions",  # Уникальное related_name
        blank=True
    )
