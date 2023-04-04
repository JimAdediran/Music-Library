# Generated by Django 4.1.1 on 2022-09-11 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('artist', models.CharField(max_length=255)),
                ('album', models.CharField(max_length=255)),
                ('release_date', models.DateField()),
                ('genre', models.CharField(max_length=255)),
                ('likes', models.IntegerField(default=0)),
            ],
        ),
    ]
