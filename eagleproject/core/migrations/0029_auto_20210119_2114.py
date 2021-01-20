# Generated by Django 3.1.1 on 2021-01-19 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0028_ctokensnapshot_total_reserves'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ognstaked',
            name='tx_hash',
            field=models.CharField(db_index=True, max_length=66),
        ),
        migrations.AlterUniqueTogether(
            name='ognstaked',
            unique_together={('tx_hash', 'log_index')},
        ),
    ]