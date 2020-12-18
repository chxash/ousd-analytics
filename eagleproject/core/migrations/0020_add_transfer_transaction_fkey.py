# Generated by Django 3.1.1 on 2020-12-15 00:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0019_supplysnapshot_rebasing_credits_per_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ousdtransfer',
            name='tx_hash',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.DO_NOTHING,
                to='core.transaction'
            ),
        ),
    ]
