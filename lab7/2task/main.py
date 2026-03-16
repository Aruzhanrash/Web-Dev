from models import Product, Laptop, Smartphone

items = [
    Laptop("MacBook Air", 1000, "Apple", 16),
    Smartphone("Galaxy S24", 800, "Samsung", 6.2),
    Product("Power Bank", 50, "Baseus")
]

print("--- Inventory ---")
for item in items:
    print(f"Object: {item}")
    print(f"Details: {item.get_info()}")
    print("-" * 10)

print("\n--- Sale (20% off) ---")
for item in items:
    print(item.apply_discount(20))