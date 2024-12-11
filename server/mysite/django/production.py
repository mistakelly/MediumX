from .base import *
# from config.env import env

from ..env import BASE_DIR, env


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool('SECRET_KEY', default=False)

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=[])
