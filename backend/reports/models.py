from django.db import models

class Report(models.Model):
    ABUSE_TYPES = [
        ('Cyberbullying', 'Cyberbullying'),
        ('Online Harassment', 'Online Harassment'),
        ('Threats', 'Threats'),
        ('Other', 'Other'),
    ]

    type = models.CharField(max_length=50, choices=ABUSE_TYPES)
    description = models.TextField()
    anonymous = models.BooleanField(default=False)

    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.type