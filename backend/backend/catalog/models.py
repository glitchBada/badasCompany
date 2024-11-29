# from django.contrib.auth.models import User
# from django.db import models
# from django.conf import settings
#
#
#
# # Create your models here.
# class Service(models.Model):
#     title = models.CharField(max_length=200, verbose_name='Название')
#     description = models.TextField(verbose_name='Описание')
#     price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')
#     category = models.CharField(max_length=100, verbose_name='Категория')
#
#     def __str__(self):
#         return self.title
#
# class BlogPost(models.Model):
#     title = models.CharField(max_length=200)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return self.title
#
# # class Order(models.Model):
# #     STATUS_CHOICES = [
# #         ('PENDING', 'В ожидании'),
# #         ('APPROVED', 'Принята'),
# #         ('REJECTED', 'Отклонена'),
# #     ]
# #
# #     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders', verbose_name='Пользователь')
# #     service_name = models.CharField(max_length=255, verbose_name='Название услуги')
# #     full_name = models.CharField(max_length=255, verbose_name='ФИО')
# #     email = models.EmailField(verbose_name='Email')
# #     phone = models.CharField(max_length=20, verbose_name='Номер телефона')
# #     technical_task = models.TextField(verbose_name='Техническое задание')
# #     status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING', verbose_name='Статус')
# #     created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
# #
# #     def __str__(self):
# #         return f"Заказ #{self.id} - {self.service_name} ({self.user.username})"
#
#     # class Order(models.Model):
#     #     STATUS_CHOICES = [
#     #         ('pending', 'В ожидании'),
#     #         ('accepted', 'Принята'),
#     #         ('rejected', 'Отклонена'),
#     #     ]
#     #
#     #     full_name = models.CharField(max_length=100)
#     #     email = models.EmailField()
#     #     phone = models.CharField(max_length=20)
#     #     technical_task = models.TextField()
#     #     service_name = models.CharField(max_length=200)
#     #     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True, related_name="orders")
#     #     status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
#     #     created_at = models.DateTimeField(auto_now_add=True)
#     #
#     #     def __str__(self):
#     #         return f"{self.full_name} - {self.service_name} - {self.get_status_display()} - {self.user.username} - {self.id}"
#
#     class Order(models.Model):
#         STATUS_CHOICES = [
#             ('PENDING', 'В ожидании'),
#             ('APPROVED', 'Принята'),
#             ('REJECTED', 'Отклонена'),
#         ]
#
#         user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders', verbose_name='Пользователь')
#         # service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='orders', verbose_name='Услуга')
#         service = models.ForeignKey("catalog.Service", on_delete=models.CASCADE, related_name='orders', verbose_name='Услуга')
#         full_name = models.CharField(max_length=255, verbose_name='ФИО')
#         email = models.EmailField(verbose_name='Email')
#         phone = models.CharField(max_length=20, verbose_name='Номер телефона')
#         technical_task = models.TextField(verbose_name='Техническое задание')
#         status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING', verbose_name='Статус')
#         created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
#
#
#         def __str__(self):
#             return f"Заказ #{self.id} - {self.service.title} ({self.user.username})"
#
from email.policy import default

from django.contrib.auth.models import User
from django.db import models
from django.conf import settings

# Service model
class Service(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')
    category = models.CharField(max_length=100, verbose_name='Категория')

    # title = models.CharField(max_length=200, verbose_name='Название')
    # description = models.TextField(verbose_name='Описание')
    # price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')
    # category = models.CharField(max_length=100, verbose_name='Категория')

    def __str__(self):
        return self.title


# BlogPost model
class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# Order model
class Order(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'В ожидании'),
        ('APPROVED', 'Принята'),
        ('REJECTED', 'Отклонена'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders', verbose_name='Пользователь')
    service = models.ForeignKey(default=11, on_delete=models.CASCADE, to='catalog.service', related_name='orders', verbose_name='Услуга')
    full_name = models.CharField(max_length=255, verbose_name='ФИО')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    technical_task = models.TextField(verbose_name='Техническое задание')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING', verbose_name='Статус')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    def __str__(self):
        return f"Заказ #{self.id} - {self.service.title} ({self.user.username})"

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True, null=True)  # Example field for user bio
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"



