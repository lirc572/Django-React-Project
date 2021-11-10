from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


# This will return a list of books
@api_view(['GET'])
def todo(request):
    todos = ['work on frontend', 'work on backend', 'work on integration']
    return Response(status=status.HTTP_200_OK, data={'data': todos})
