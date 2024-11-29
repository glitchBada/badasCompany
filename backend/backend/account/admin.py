from django.contrib import admin
from django.contrib.admin import ModelAdmin

from .models import AbstractUser


@admin.action(description="Make user is staff")
def set_is_staff(self, request, queryset):
    queryset.update(is_staff=True)


class UserAdmin(admin.ModelAdmin):
    list_display = ['full_name', "is_staff"]
    search_fields = ['full_name']
    actions = [set_is_staff]


admin.site.register(AbstractUser, UserAdmin)

