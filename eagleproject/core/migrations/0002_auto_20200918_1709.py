# Generated by Django 3.1.1 on 2020-09-18 17:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="assetblock",
            old_name="token",
            new_name="symbol",
        ),
    ]
