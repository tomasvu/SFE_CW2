from django.shortcuts import render

posts = [
    {
        'author': 'CoreyMS',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'August 27, 2018'
    },
    {
        'author': 'Jane Doe',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'August 28, 2018'
    }
]


def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'website/home.html', context)


def flashcards(request):
    return render(request, 'website/flashcards.html', {'title': 'Flashcards'})


def multiplechoice(request):
    return render(request, 'website/multiplechoice.html', {'title': 'Multiple Choice'})
