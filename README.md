# Home Sale Website

This repository contains a simple static site for showcasing items for sale. Items are described with small JSON files and optional images. A Python script converts these descriptions into `data.js`, which is used by the web page.

## Adding Items

1. Create a folder under `items/` with the item's name. Example:
   ```
   items/TV
   ```
2. Inside that folder create `item_info.json` with the following fields:
   ```json
   {
     "category": "Living room",
     "price": 100,
     "description": "Flat screen TV, excellent condition.",
     "sold": false
   }
   ```
3. Add any number of images to the same folder. If an image filename contains `alone` it will be the default thumbnail. A file containing `context` will be shown second. All other images appear afterwards.

## Generating `data.js`

Run the generator after adding or editing items:

```bash
python generate_data.py
```

This scans the `items/` directory and produces `data.js` for the website.

## Viewing the Site

Open `index.html` in your browser or serve the directory with a local web server. The page lets visitors sort by category or price and select items to purchase. Clicking **Buy Now** shows an alert with contact information and the cart total.

## Customizing Contact Details

Edit the message inside `script.js` (near the bottom) to include your own phone number or instructions. This text appears when a buyer clicks **Buy Now**.

## Example Layout

```
items/
├── TV
│   ├── item_info.json
│   ├── alone.jpg
│   └── context.jpg
├── Sofa
│   └── item_info.json
└── ...
```

After running `generate_data.py`, open `index.html` to view your sale page. Feel free to adapt this project to fit your needs. Happy selling!
