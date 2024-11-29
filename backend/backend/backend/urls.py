"""
URL configuration for backend project.

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
from catalog.views import ProfileView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from catalog import views as order_view  # Импортируем views как order_view

router = DefaultRouter()
router.register(r'services', order_view.ServiceViewSet)  # Используем order_view вместо views

urlpatterns = [
    path('', include(router.urls)),  # Здесь подключаем пути из роутера
    path('api/', include('catalog.urls')),  # Это оставляем, если у вас есть другие пути в catalog.urls
    path('admin/', admin.site.urls),
    path('api/accounts/', include('account.urls')),
    path('api/order/', order_view.order_view, name='order_view'),  # Подключаем конкретную функцию из order_view
    path('api/profiles/', ProfileView.as_view(), name='profile'),
]