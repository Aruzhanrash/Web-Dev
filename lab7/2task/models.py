class Product:
    def __init__(self, name, price, brand):
        self.name = name
        self.price = price
        self.brand = brand

    def get_info(self):
        return f"Product: {self.brand} {self.name} - ${self.price}"

    def apply_discount(self, percent):
        self.price -= self.price * (percent / 100)
        return f"New price for {self.name}: ${self.price}"

    def __str__(self):
        return f"{self.brand} {self.name}"

class Laptop(Product):
    def __init__(self, name, price, brand, ram):
        super().__init__(name, price, brand)
        self.ram = ram

    def get_info(self):
        return f"Laptop: {self.brand} {self.name}, RAM: {self.ram}GB, Price: ${self.price}"

class Smartphone(Product):
    def __init__(self, name, price, brand, screen_size):
        super().__init__(name, price, brand)
        self.screen_size = screen_size

    def get_info(self):
        return f"Smartphone: {self.brand} {self.name}, Screen: {self.screen_size}\", Price: ${self.price}"