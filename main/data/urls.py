from rest_framework import routers
from .api import ClothViewSet


router = routers.DefaultRouter()
router.register('api/clothes', ClothViewSet, 'clothes')

urlpatterns = router.urls