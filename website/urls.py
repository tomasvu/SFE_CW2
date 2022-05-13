from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='website-home'),
    path('flashcards/', views.flashcards, name='website-flashcards'),
    path('multiplechoice/', views.multiplechoice, name='website-multiplechoice'),
]
