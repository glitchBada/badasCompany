from django.contrib import admin
from .models import (BlogPost, Service, Order)

admin.site.register(BlogPost)
admin.site.register(Service)

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'service', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('user__username', 'service__title', 'full_name')

# @admin.register(Order)
# class OrderAdmin(admin.ModelAdmin):
#     list_display = ('id', 'user', 'get_service_name', 'status', 'created_at')
#
#     def get_service_name(self, obj):
#         return obj.service.title  # or another attribute
#
#     get_service_name.short_description = 'Service'