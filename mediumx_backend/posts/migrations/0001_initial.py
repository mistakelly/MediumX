# Generated by Django 4.2.16 on 2024-11-11 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('body', models.TextField()),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(unique=True)),
                ('img', models.FileField(blank=True, null=True, upload_to='post_images')),
                ('status', models.CharField(choices=[('df', 'Draft'), ('pb', 'Published'), ('ar', 'Archived')], default='df', max_length=2)),
            ],
            options={
                'db_table': 'posts',
            },
        ),
        migrations.CreateModel(
            name='PostCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PostComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'post_comments',
            },
        ),
        migrations.CreateModel(
            name='PostCommentDislike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dislike_count', models.PositiveIntegerField()),
            ],
            options={
                'db_table': 'post_comment_dislikes',
            },
        ),
        migrations.CreateModel(
            name='PostCommentLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('like_count', models.PositiveIntegerField()),
            ],
            options={
                'db_table': 'post_comment_likes',
            },
        ),
        migrations.CreateModel(
            name='PostDislike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dislike_count', models.PositiveIntegerField()),
            ],
            options={
                'db_table': 'post_dislikes',
            },
        ),
        migrations.CreateModel(
            name='PostLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('like_count', models.PositiveIntegerField()),
            ],
            options={
                'db_table': 'post_likes',
            },
        ),
    ]
