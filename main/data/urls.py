from rest_framework import routers
from .api import ClothViewSet, PersonAPIView, KeywordsAPIView, SettingsViewSet
from django.urls import path


router = routers.DefaultRouter()
router.register('api/clothes', ClothViewSet, 'clothes')
router.register('api/settings', SettingsViewSet, 'settings')

urlpatterns = router.urls + [
    path('api/people', PersonAPIView.as_view()),
    path('api/keywords', KeywordsAPIView.as_view())
]
