from rest_framework import routers
from .api import QueryViewSet

router = routers.DefaultRouter()
router.register('api/queries', QueryViewSet, 'queries')

urlpatterns = router.urls
