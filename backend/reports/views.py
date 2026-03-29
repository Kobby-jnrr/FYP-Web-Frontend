from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Report
import json

@csrf_exempt
def create_report(request):
    if request.method == 'POST':
        try:
            type = request.POST.get('type')
            description = request.POST.get('description')
            anonymous = request.POST.get('anonymous') == 'true'

            name = request.POST.get('name')
            email = request.POST.get('email')

            report = Report.objects.create(
                type=type,
                description=description,
                anonymous=anonymous,
                name=name,
                email=email
            )

            return JsonResponse({'message': 'Report saved successfully'}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request'}, status=405)