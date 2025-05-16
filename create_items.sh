#!/bin/bash

mkdir -p items

# Living room
mkdir -p "items/Cane basket"
cat > "items/Cane basket/item_info.json" <<EOF
{
  "category": "Living room",
  "price": 30,
  "description": "Woven cane basket, ideal for storage or decor."
}
EOF

mkdir -p "items/Coffee table + side table"
cat > "items/Coffee table + side table/item_info.json" <<EOF
{
  "category": "Living room",
  "price": 70,
  "description": "Set of coffee table and side table, modern and sturdy."
}
EOF

mkdir -p "items/Living room rug"
cat > "items/Living room rug/item_info.json" <<EOF
{
  "category": "Living room",
  "price": 70,
  "description": "Soft living room rug, neutral color, gently used."
}
EOF

mkdir -p "items/TV"
cat > "items/TV/item_info.json" <<EOF
{
  "category": "Living room",
  "price": 200,
  "description": "Flat screen TV, excellent condition."
}
EOF

mkdir -p "items/Light stand set"
cat > "items/Light stand set/item_info.json" <<EOF
{
  "category": "Living room",
  "price": 50,
  "description": "Matching light stand set, stylish and functional."
}
EOF

mkdir -p "items/TV console"
cat > "items/TV console/item_info.json" <<EOF
{
  "category": "Living room",
  "price": 50,
  "description": "TV console with storage, fits most TVs."
}
EOF

# Entryway
mkdir -p "items/Fake plants"
cat > "items/Fake plants/item_info.json" <<EOF
{
  "category": "Entryway",
  "description": "Decorative fake plants for a fresh look."
}
EOF

mkdir -p "items/Full length mirror"
cat > "items/Full length mirror/item_info.json" <<EOF
{
  "category": "Entryway",
  "price": 60,
  "description": "Full length mirror, perfect for entryway or bedroom."
}
EOF

mkdir -p "items/Shoe rack"
cat > "items/Shoe rack/item_info.json" <<EOF
{
  "category": "Entryway",
  "price": 15,
  "description": "Compact shoe rack, holds multiple pairs."
}
EOF

mkdir -p "items/Bench"
cat > "items/Bench/item_info.json" <<EOF
{
  "category": "Entryway",
  "price": 70,
  "description": "Entryway bench, sturdy and comfortable."
}
EOF

mkdir -p "items/Black and white rug"
cat > "items/Black and white rug/item_info.json" <<EOF
{
  "category": "Entryway",
  "price": 25,
  "description": "Black and white patterned rug, stylish accent."
}
EOF

# Kitchen
mkdir -p "items/Pots and pans"
cat > "items/Pots and pans/item_info.json" <<EOF
{
  "category": "Kitchen",
  "description": "Set of pots and pans, various sizes."
}
EOF

mkdir -p "items/Food warmer"
cat > "items/Food warmer/item_info.json" <<EOF
{
  "category": "Kitchen",
  "description": "Electric food warmer, keeps meals hot."
}
EOF

mkdir -p "items/Air fryer"
cat > "items/Air fryer/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 100,
  "description": "Air fryer, lightly used, cooks healthy meals."
}
EOF

mkdir -p "items/Nutribullet"
cat > "items/Nutribullet/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 21,
  "description": "Nutribullet blender, great for smoothies."
}
EOF

mkdir -p "items/Rice cooker"
cat > "items/Rice cooker/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 20,
  "description": "Rice cooker, easy to use, perfect rice every time."
}
EOF

mkdir -p "items/Vegetable cutter"
cat > "items/Vegetable cutter/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 20,
  "description": "Vegetable cutter, saves prep time."
}
EOF

mkdir -p "items/Kettle"
cat > "items/Kettle/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 18,
  "description": "Electric kettle, boils water quickly."
}
EOF

mkdir -p "items/Coffee machine"
cat > "items/Coffee machine/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 130,
  "description": "Coffee machine, makes delicious coffee."
}
EOF

mkdir -p "items/Knife set"
cat > "items/Knife set/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 10,
  "description": "Set of kitchen knives, sharp and reliable."
}
EOF

mkdir -p "items/Toaster"
cat > "items/Toaster/item_info.json" <<EOF
{
  "category": "Kitchen",
  "price": 15,
  "description": "Toaster, works perfectly."
}
EOF

# Household stuff
mkdir -p "items/Vacuum"
cat > "items/Vacuum/item_info.json" <<EOF
{
  "category": "Household stuff",
  "price": 150,
  "description": "Vacuum cleaner, powerful suction."
}
EOF

mkdir -p "items/Bar stools"
cat > "items/Bar stools/item_info.json" <<EOF
{
  "category": "Household stuff",
  "price": 100,
  "description": "Set of bar stools, modern design."
}
EOF

# Office
mkdir -p "items/Humanscale office chair"
cat > "items/Humanscale office chair/item_info.json" <<EOF
{
  "category": "Office",
  "price": 1500,
  "description": "Ergonomic Humanscale office chair, premium comfort."
}
EOF

mkdir -p "items/Footrest"
cat > "items/Footrest/item_info.json" <<EOF
{
  "category": "Office",
  "price": 30,
  "description": "Footrest for under desk comfort."
}
EOF

mkdir -p "items/Monitor stand"
cat > "items/Monitor stand/item_info.json" <<EOF
{
  "category": "Office",
  "description": "Monitor stand, adjustable height."
}
EOF

mkdir -p "items/Standing desk"
cat > "items/Standing desk/item_info.json" <<EOF
{
  "category": "Office",
  "price": 150,
  "description": "Standing desk, adjustable height."
}
EOF

mkdir -p "items/Laptop stand"
cat > "items/Laptop stand/item_info.json" <<EOF
{
  "category": "Office",
  "description": "Laptop stand, portable and sturdy."
}
EOF

# Bedroom
mkdir -p "items/Bedside lamps"
cat > "items/Bedside lamps/item_info.json" <<EOF
{
  "category": "Bedroom",
  "description": "Pair of bedside lamps, soft lighting."
}
EOF

mkdir -p "items/Bed frame"
cat > "items/Bed frame/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 370,
  "description": "Queen size bed frame, solid wood."
}
EOF

mkdir -p "items/Laundry basket"
cat > "items/Laundry basket/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 10,
  "description": "Laundry basket, lightweight and durable."
}
EOF

mkdir -p "items/Mattress with pillows and protector"
cat > "items/Mattress with pillows and protector/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 450,
  "description": "Queen mattress with pillows and protector, very comfortable."
}
EOF

mkdir -p "items/Chest of drawers with vanity stand"
cat > "items/Chest of drawers with vanity stand/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 120,
  "description": "Chest of drawers with attached vanity stand."
}
EOF

mkdir -p "items/Air circulator"
cat > "items/Air circulator/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 17,
  "description": "Compact air circulator fan, quiet and efficient."
}
EOF

mkdir -p "items/Bedside tables with lamps"
cat > "items/Bedside tables with lamps/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 130,
  "description": "Set of bedside tables with lamps."
}
EOF

mkdir -p "items/Fan"
cat > "items/Fan/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 30,
  "description": "Pelonis air circulator fan, powerful and quiet."
}
EOF

mkdir -p "items/Circle mirror"
cat > "items/Circle mirror/item_info.json" <<EOF
{
  "category": "Bedroom",
  "price": 40,
  "description": "Round wall mirror, modern design."
}
EOF

echo "All items and info files created."