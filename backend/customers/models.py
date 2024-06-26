from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    description = models.TextField()
    status = models.CharField(max_length=20, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description

class Message(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    content = models.TextField()
    direction = models.CharField(max_length=10)  # incoming or outgoing
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
