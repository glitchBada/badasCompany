# Generated by Django 4.2.9 on 2024-04-08 03:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=35)),
                ('course', models.PositiveSmallIntegerField()),
                ('direction', models.CharField(default='КОМТЕХНО', max_length=35)),
                ('stage', models.CharField(blank=True, max_length=35, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='AbstractUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(db_index=True, max_length=254, unique=True)),
                ('phone_number', models.CharField(max_length=20, unique=True)),
                ('full_name', models.CharField(max_length=60)),
                ('user_type', models.CharField(choices=[('student', 'Student'), ('headman', 'Headman'), ('teacher', 'Teacher')], max_length=10)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=False)),
                ('activation_code', models.CharField(blank=True, max_length=8)),
                ('group', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='account.group')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
