from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NewConnectorsp657ViewSet

router = DefaultRouter()
router.register(
    "newconnectorsp657", NewConnectorsp657ViewSet, basename="newconnectorsp657"
)

urlpatterns = [
    path("connectors/", include(router.urls)),
]
