# urls.py (no seu aplicativo)
from rest_framework.routers import DefaultRouter
from contact.views import ContactView # O nome da viewset é ContactView

router = DefaultRouter()
# O router usa 'livros' como base para gerar as URLs, não 'ContactView'
router.register(r'contacts', ContactView)

urlpatterns = router.urls