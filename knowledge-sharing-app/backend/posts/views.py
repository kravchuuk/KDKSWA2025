# posts/views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]  # 🔐 требует токен

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # 🔗 Привязка к пользователю
