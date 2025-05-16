import os, json

base_dir = 'items'
items_data = []

for item_folder in sorted(os.listdir(base_dir)):
    item_path = os.path.join(base_dir, item_folder)
    if os.path.isdir(item_path):
        try:
            json_path = os.path.join(item_path, 'item_info.json')
            if os.path.exists(json_path):
                with open(json_path, 'r') as f:
                    item_info = json.load(f)
                
                images = []
                alone_img, context_img, other_imgs = None, None, []
                for img in sorted(os.listdir(item_path)):
                    if img.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                        if 'alone' in img.lower():
                            alone_img = f"{item_path}/{img}"
                        elif 'context' in img.lower():
                            context_img = f"{item_path}/{img}"
                        else:
                            other_imgs.append(f"{item_path}/{img}")

                ordered_imgs = [img for img in [alone_img, context_img] if img] + other_imgs

                items_data.append({
                    "name": item_folder,
                    "category": item_info['category'],
                    "price": item_info['price'],
                    "description": item_info['description'],
                    "images": ordered_imgs,
                    "sold": item_info['sold']
                })
        except KeyError as e:
            print(f"Error processing {item_folder}: {e}")

with open('data.js', 'w') as f:
    f.write("const ITEMS_DATA = ")
    json.dump(items_data, f, indent=2)

print("✅ data.js generated successfully.")