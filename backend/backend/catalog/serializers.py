from rest_framework import serializers
from .models import Service
from .models import BlogPost
from .models import Profile



class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'bio', 'phone_number', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']

