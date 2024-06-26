from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, LeadViewSet, OrderViewSet, MessageViewSet


router = DefaultRouter(trailing_slash=False)
router.register(r'customer', CustomerViewSet)
router.register(r'lead', LeadViewSet)
router.register(r'order', OrderViewSet)
router.register(r'message', MessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
