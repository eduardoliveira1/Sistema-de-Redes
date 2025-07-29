from rest_framework import viewsets
from contact.models import Contact
from contact.serializer import ContactSerializer

# Este pequeno pedaço de código faz todo o CRUD de contatos
class ContactView(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    