from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='website-home'),
    path('rules/', views.rules, name='website-rules'),
    # path('about/', views.about, name='blog-about'),
]
