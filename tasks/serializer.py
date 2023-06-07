from rest_framework import serializers
from .models import Task
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        #fields = '__all__'
        model = Task
        fields = (
            'id',
            'title',
            'description',
            'done'
        )
