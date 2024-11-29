from django.urls import include
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, BlogPostViewSet, ProfileView
from django.urls import path
from . import views

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'blog', BlogPostViewSet)

urlpatterns = [
    # path('services/', views.service_list, name='service_list'),

    path('', include(router.urls)),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('profile/', views.profile_data, name='profile'),
    path('api/profiles/', ProfileView.as_view(), name='profile'),
]



#
# urlpatterns = [
#
#     # path('services/', views.service_list, name='service_list'),
#
# ]
