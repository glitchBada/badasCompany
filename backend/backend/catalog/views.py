# from rest_framework import viewsets
# from .models import Service, BlogPost
# from .serializers import ServiceSerializer, BlogPostSerializer
# from django.core.mail import send_mail
# from django.conf import settings
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# import requests
#
# class ServiceViewSet(viewsets.ModelViewSet):
#     queryset = Service.objects.all()
#     serializer_class = ServiceSerializer
#
# class BlogPostViewSet(viewsets.ModelViewSet):
#     queryset = BlogPost.objects.all()
#     serializer_class = BlogPostSerializer
#
# def send_order_email(order_data):
#     subject = f"Новый заказ от {order_data['full_name']}"
#     message = f"ФИО: {order_data['full_name']}\nEmail: {order_data['email']}\nТелефон: {order_data['phone']}\nТехническое задание: {order_data['technical_task']}"
#     recipient_list = ['klbog7386@gmail.com']
#
#     send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list)
#
# def send_order_to_telegram(order_data):
#     telegram_token = 'your-telegram-bot-token'  # Замените на ваш токен
#     chat_id = '@Badadooom'  # ID чата или юзернейм вашего канала/группы
#     message = f"Новый заказ:\nФИО: {order_data['full_name']}\nEmail: {order_data['email']}\nТелефон: {order_data['phone']}\nТехническое задание: {order_data['technical_task']}"
#
#     url = f'https://api.telegram.org/bot{telegram_token}/sendMessage'
#     params = {
#         'chat_id': chat_id,
#         'text': message
#     }
#
#     response = requests.get(url, params=params)
#     if response.status_code == 200:
#         print('Сообщение отправлено в Telegram')
#     else:
#         print(f"Ошибка при отправке в Telegram: {response.status_code}")
#
#         # API для обработки заказов
#     @api_view(['POST'])
#     def order_view(request):
#         order_data = request.data
#
#          # Отправляем email
#         send_order_email(order_data)
#
#         # Отправляем сообщение в Telegram
#         send_order_to_telegram(order_data)
#
#             # Возвращаем успешный ответ
#         return Response({"message": "Order received successfully"})
#
from django.contrib.auth.decorators import login_required
# from rest_framework import viewsets
# from .models import Service, BlogPost
# from .serializers import ServiceSerializer, BlogPostSerializer
# from django.core.mail import send_mail
# from django.conf import settings
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# import requests
# from django.shortcuts import render, redirect
# from django.contrib.auth import login, authenticate
# from django.contrib.auth.views import LoginView
# from .forms import UserRegisterForm
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth.models import User
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json


#
#
# class ServiceViewSet(viewsets.ModelViewSet):
#     queryset = Service.objects.all()
#     serializer_class = ServiceSerializer
#
# class BlogPostViewSet(viewsets.ModelViewSet):
#     queryset = BlogPost.objects.all()
#     serializer_class = BlogPostSerializer
#
# def send_order_email(order_data):
#     subject = f"Новый заказ от {order_data['full_name']}"
#     message = f"ФИО: {order_data['full_name']}\nEmail: {order_data['email']}\nТелефон: {order_data['phone']}\nВыбранная услуга: {order_data['service_name']}\nТехническое задание: {order_data['technical_task']}"
#     recipient_list = ['klbog7386@gmail.com']
#
#     send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list)
#
# def send_order_to_telegram(order_data):
#     telegram_token = '7513054311:AAHVQWTnM5UvbEYGC47V1N1rdQ8AUr7Z6So'  # Замените на ваш токен
#     chat_id = '924179001'  # ID чата или юзернейм вашего канала/группы
#     message = (
#         # f"Новый заказ:\nФИО: {order_data['full_name']}\nEmail: {order_data['email']}\nТелефон: {order_data['phone']}\nТехническое задание: {order_data['technical_task']}"
#         f"Новый заказ:\n"
#         f"ФИО: {order_data['full_name']}\n"
#         f"Email: {order_data['email']}\n"
#         f"Телефон: {order_data['phone']}\n"
#         f"Техническое задание: {order_data['technical_task']}\n"
#         f"Услуга: {order_data['service_name']}"
# )
#     url = f'https://api.telegram.org/bot{telegram_token}/sendMessage'
#     params = {
#         'chat_id': chat_id,
#         'text': message
#     }
#     try:
#         response = requests.get(url, params=params)
#         response_data = response.json()  # получаем JSON-ответ
#
#         if response.status_code == 200 and response_data.get("ok"):
#             print('Сообщение отправлено в Telegram')
#         else:
#             print(f"Ошибка при отправке в Telegram: статус {response.status_code}")
#             print(f"Ответ от Telegram: {response_data}")
#     except Exception as e:
#         print(f"Произошла ошибка при отправке в Telegram: {e}")
#     response = requests.get(url, params=params)
#     if response.status_code == 200:
#         print('Сообщение отправлено в Telegram')
#     else:
#         print(f"Ошибка при отправке в Telegram: {response.status_code}")
#
# # API для обработки заказов
# @api_view(['POST'])
# def order_view(request):
#     order_data = {
#         "full_name": request.data.get("full_name"),
#         "email": request.data.get("email"),
#         "phone": request.data.get("phone"),
#         "technical_task": request.data.get("technical_task"),
#         "service_name": request.data.get("service_name")  # Получаем название услуги из запроса
#     }
#         # request.data
#
#     # Отправляем email
#     send_order_email(order_data)
#
#     # Отправляем сообщение в Telegram
#     send_order_to_telegram(order_data)
#
#     # Возвращаем успешный ответ
#     return Response({"message": "Order received successfully"})
#
#

# def register(request):
#     if request.method == 'POST':
#         form = UserRegisterForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             return redirect('profile')  # Перенаправление на кабинет пользователя
#     else:
#         form = UserRegisterForm()
#     return render(request, 'catalog/register.html', {'form': form})
#
# class UserLoginView(LoginView):
#     template_name = 'catalog/login.html'
#
# @login_required
# def profile(request):
#     return render(request, 'catalog/profile.html')

from rest_framework import viewsets
from .models import Service, BlogPost, Profile
from .serializers import ServiceSerializer, BlogPostSerializer, ProfileSerializer
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


import json


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


def send_order_email(order_data):
    subject = f"Новый заказ от {order_data['full_name']}"
    message = f"ФИО: {order_data['full_name']}\nEmail: {order_data['email']}\nТелефон: {order_data['phone']}\nВыбранная услуга: {order_data['service_name']}\nТехническое задание: {order_data['technical_task']}"
    recipient_list = ['klbog7386@gmail.com']

    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list)


def send_order_to_telegram(order_data):
    telegram_token = '7513054311:AAHVQWTnM5UvbEYGC47V1N1rdQ8AUr7Z6So'  # Replace with your token
    chat_id = '924179001'  # Replace with your chat ID
    message = (
        f"Новый заказ:\n"
        f"ФИО: {order_data['full_name']}\n"
        f"Email: {order_data['email']}\n"
        f"Телефон: {order_data['phone']}\n"
        f"Техническое задание: {order_data['technical_task']}\n"
        f"Услуга: {order_data['service_name']}"
    )
    url = f'https://api.telegram.org/bot{telegram_token}/sendMessage'
    params = {
        'chat_id': chat_id,
        'text': message
    }
    try:
        response = requests.get(url, params=params)
        response_data = response.json()  # Get JSON response

        if response.status_code == 200 and response_data.get("ok"):
            print('Message sent to Telegram')
        else:
            print(f"Error sending to Telegram: status {response.status_code}")
            print(f"Telegram response: {response_data}")
    except Exception as e:
        print(f"Error sending to Telegram: {e}")


@api_view(['POST'])
def order_view(request):
    order_data = {
        "full_name": request.data.get("full_name"),
        "email": request.data.get("email"),
        "phone": request.data.get("phone"),
        "technical_task": request.data.get("technical_task"),
        "service_name": request.data.get("service_name")
    }

    send_order_email(order_data)
    send_order_to_telegram(order_data)

    return Response({"message": "Order received successfully"})


# @csrf_exempt
# def register(request):
#     if request.method == 'POST':
#
#         data = json.loads(request.body)
#         username = data.get('username')
#         email = data.get('email')
#         password1 = data.get('password1')
#         password2 = data.get('password2')
#         # form = UserRegisterForm(request.POST)
#
#         if password1 == password2:
#             user = User.objects.create_user(username=username, email=email, password=password1)
#             login(request, user)
#             return JsonResponse({"message": "User registered successfully"})
#
#         return JsonResponse({"error": "Passwords do not match"}, status=400)
#         # if form.is_valid():
#         #     user = form.save()
#         #     login(request, user)  # Выполняем вход после успешной регистрации
#         #     return redirect('profile')  # Перенаправляем на страницу профиля
#         # else:
#         #     form = UserRegisterForm()
#         # return render(request, 'catalog/register.html', {'form': form})

# @csrf_exempt  # For testing only; remove this in production and use CSRF tokens.
# @require_http_methods(["POST"])  # Ensures only POST requests are allowed.
# def register(request):
#     try:
#         # Parse JSON data from the request body
#         data = json.loads(request.body)
#
#         # Extract user information
#         username = data.get('username')
#         email = data.get('email')
#         password1 = data.get('password1')
#         password2 = data.get('password2')
#
#         # Validate passwords
#         if password1 != password2:
#             return JsonResponse({"error": "Passwords do not match"}, status=400)
#
#         # Check if username already exists
#         if User.objects.filter(username=username).exists():
#             return JsonResponse({"error": "Username already exists"}, status=400)
#
#         # Check if email already exists
#         if User.objects.filter(email=email).exists():
#             return JsonResponse({"error": "Email already exists"}, status=400)
#
#         # Create the user
#         user = User.objects.create_user(username=username, email=email, password=password1)
#         user.save()
#
#         # Log the user in automatically
#         login(request, user)
#
#         # Return success message
#         return JsonResponse({"message": "User registered successfully"})
#
#     except json.JSONDecodeError:
#         return JsonResponse({"error": "Invalid JSON data"}, status=400)
#
#     # except Exception as e:
#     #     # Handle unexpected errors
#     #     return JsonResponse({"error": str(e)}, status=500)

# @csrf_exempt  # For testing only; remove this in production and use CSRF tokens.
@require_http_methods(["POST"])  # Ensures only POST requests are allowed.
def register(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from the request body
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password1 = data.get('password1')
            password2 = data.get('password2')

            # Validate passwords
            if password1 != password2:
                return JsonResponse({"error": "Passwords do not match"}, status=400)

            # Check if username or email already exists
            if User.objects.filter(username=username).exists():
                return JsonResponse({"error": "Username already exists"}, status=400)
            if User.objects.filter(email=email).exists():
                return JsonResponse({"error": "Email already exists"}, status=400)

            # Create the user
            user = User.objects.create_user(username=username, email=email, password=password1)
            user.save()

            # Log the user in automatically
            login(request, user)

            # Return success message
            return JsonResponse({"message": "User registered successfully"})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)



@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful"})

        return JsonResponse({"error": "Invalid credentials"}, status=400)


@login_required
def profile_data(request):
    if request.user.is_authenticated:
        orders = list(request.user.orders.values())  # Assuming `orders` is the related name for Order model
        user_data = {
            "username": request.user.username,
            'email': request.user.email,
            "orders": orders,
        }
        return JsonResponse({"user": user_data})
    else:
        return JsonResponse({"error": "User not authenticated"}, status=401)

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def patch(self, request):
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
