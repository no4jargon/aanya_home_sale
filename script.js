let cart = JSON.parse(localStorage.getItem('cart')) || {};

function renderItems(mode = 'category') {
  document.getElementById('categories').innerHTML = '';

  let sortedItems;
  if (mode === 'price') {
    sortedItems = [...ITEMS_DATA].sort((a, b) => a.price - b.price);
    renderCategory('All Items (Low → High)', sortedItems);
  } else {
    const categories = [...new Set(ITEMS_DATA.map(i => i.category))];
    categories.forEach(category => {
      const itemsInCat = ITEMS_DATA.filter(i => i.category === category);
      renderCategory(category, itemsInCat);
    });
  }

  updateCartSummary();
}

function renderCategory(categoryTitle, items) {
  const catDiv = document.createElement('div');
  catDiv.className = 'category';
  catDiv.innerHTML = `<h3>${categoryTitle}</h3><div class="items"></div>`;

  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `item${item.name in cart ? ' cart-selected' : ''}`;
    
    let currentImgIndex = 0;
    const hasMultipleImages = item.images.length > 1;

    itemDiv.innerHTML = `
      <div class="tick">✓</div>
      ${item.sold ? '<div class="sold-overlay">SOLD</div>' : ''}
      <img src="${item.images[0]}">
      ${hasMultipleImages ? '<div class="arrow arrow-left">&#9664;</div>' : ''}
      ${hasMultipleImages ? '<div class="arrow arrow-right">&#9654;</div>' : ''}
      <div class="name">${item.name}</div>
      <div class="price">$${item.price}</div>
    `;

    itemDiv.onclick = (e) => {
      if(e.target.classList.contains('arrow-left')) {
        currentImgIndex = (currentImgIndex - 1 + item.images.length) % item.images.length;
        itemDiv.querySelector('img').src = item.images[currentImgIndex];
      } else if(e.target.classList.contains('arrow-right')) {
        currentImgIndex = (currentImgIndex + 1) % item.images.length;
        itemDiv.querySelector('img').src = item.images[currentImgIndex];
      } else if(e.target.tagName === 'IMG') {
        openFullscreen(item.images, currentImgIndex, item.description);
      } else {
        toggleCart(item.name, item.price, itemDiv);
      }
    };

    catDiv.querySelector('.items').appendChild(itemDiv);
  });

  document.getElementById('categories').appendChild(catDiv);
}

function toggleCart(name, price, el) {
  if (name in cart) {
    delete cart[name];
    document.querySelectorAll(`.item`).forEach(div => {
      if (div.querySelector('.name').innerText === name) div.classList.remove('cart-selected');
    });
  } else {
    cart[name] = price;
    document.querySelectorAll(`.item`).forEach(div => {
      if (div.querySelector('.name').innerText === name) div.classList.add('cart-selected');
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartSummary();
}

function updateCartSummary() {
  const total = Object.values(cart).reduce((sum, p) => sum + p, 0);
  document.getElementById('total-price').innerText = total;
  document.getElementById('item-count').innerText = Object.keys(cart).length + ' items';
}

function openFullscreen(images, startIndex, description) {
  let idx = startIndex;
  const fsDiv = document.createElement('div');
  fsDiv.className = 'fullscreen';

  const renderFS = () => {
    fsDiv.innerHTML = `
      <img src="${images[idx]}">
      <div class="fs-description">${description}</div>
      ${images.length > 1 ? '<div class="arrow arrow-left">&#9664;</div>' : ''}
      ${images.length > 1 ? '<div class="arrow arrow-right">&#9654;</div>' : ''}
    `;
  };

  fsDiv.onclick = (e) => {
    if(e.target.classList.contains('arrow-left')) {
      idx = (idx - 1 + images.length) % images.length;
      renderFS();
    } else if(e.target.classList.contains('arrow-right')) {
      idx = (idx + 1) % images.length;
      renderFS();
    } else {
      document.body.removeChild(fsDiv);
    }
  };

  renderFS();
  document.body.appendChild(fsDiv);
}

document.getElementById('buy-btn').onclick = () => {
  const itemsList = Object.entries(cart)
    .map(([name, price]) => `• ${name} - $${price}`)
    .join('\n');

  const total = Object.values(cart).reduce((sum, p) => sum + p, 0);

  const message = `Call or message Aanya Sanghavi at +1 (347) 410-4301. Copy the message below and send it\n\nItems selected:\n${itemsList}\n\nTotal: $${total}`;

  alert(message);
};

renderItems();