# Generated by Django 3.1.1 on 2020-10-05 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0007_auto_20200922_1548"),
    ]

    operations = [
        migrations.CreateModel(
            name="SupplySnapshot",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("block_number", models.IntegerField(db_index=True)),
                (
                    "reported_supply",
                    models.DecimalField(decimal_places=18, max_digits=64),
                ),
                (
                    "computed_supply",
                    models.DecimalField(decimal_places=18, max_digits=64),
                ),
                ("credits", models.DecimalField(decimal_places=18, max_digits=64)),
                (
                    "credits_ratio",
                    models.DecimalField(decimal_places=18, max_digits=64),
                ),
            ],
            options={
                "ordering": ["-block_number"],
            },
        ),
    ]
