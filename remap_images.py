
import json
import os
import re

products_path = "src/data/products.json"
# We already moved images to public/products
# So we just need to list them from there and update json to use /products/filename

images_dir = "public/products"
image_files = [f for f in os.listdir(images_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

def natural_sort_key(s):
    return [int(text) if text.isdigit() else text.lower()
            for text in re.split('([0-9]+)', s)]

image_files.sort(key=natural_sort_key)

with open(products_path, 'r', encoding='utf-8') as f:
    products = json.load(f)

for i, product in enumerate(products):
    if i < len(image_files):
        # Path for public folder assets is just /products/filename
        product['image'] = f"/products/{image_files[i]}"
    else:
        product['image'] = None

with open(products_path, 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2)

print(f"Remapped {len(products)} products to public/products")
