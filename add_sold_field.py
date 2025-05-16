import os, json

base_dir = 'items'

for folder in os.listdir(base_dir):
    item_path = os.path.join(base_dir, folder, 'item_info.json')
    if os.path.exists(item_path):
        with open(item_path, 'r+') as f:
            data = json.load(f)
            data['sold'] = False  # Add this line
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()

print('✅ "sold": false added to all item_info.json files.')