"""
URL configuration for KDKSWA2025 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework.routers import DefaultRouter
from posts.views import PostViewSet

# Функция для главной страницы
def home(request):
    return HttpResponse("<h1>Добро пожаловать в Knowledge Sharing App!</h1>")

# Создаем маршрутизатор API
router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', home, name='home'),  # Главная страница
    path('admin/', admin.site.urls),  # Админка
    path('api/', include(router.urls)),  # API-маршруты
]
