# Generated by Django 5.1.2 on 2024-11-08 10:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0004_remove_order_service_name_order_service'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='service',
            field=models.ForeignKey(default=8, on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='catalog.service', verbose_name='Услуга'),
            preserve_default=False,
        ),
    ]