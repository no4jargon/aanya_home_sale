let cart = JSON.parse(localStorage.getItem('cart')) || {};

function renderItems(mode = 'category') {
  document.getElementById('categories').innerHTML = '';

  if (mode === 'price') {
    const sortedItems = [...ITEMS_DATA].sort((a, b) => a.price - b.price);
    renderCategory('All Items (Low → High)', sortedItems);
  } else {
    const categories = [...new Set(ITEMS_DATA.map(i => i.category))];
    categories.forEach(cat => {
      renderCategory(cat, ITEMS_DATA.filter(i => i.category === cat));
    });
  }
  updateCartSummary();
}

function renderCategory(title, items) {
  const catDiv = document.createElement('div');
  catDiv.className = 'category';
  catDiv.innerHTML = `<h3>${title}</h3><div class="items"></div>`;

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = `item${item.name in cart ? ' cart-selected' : ''}`;

    let idx = 0;
    const imagePart = item.images.length > 0 ?
      `<img src="${item.images[0]}">` :
      '<div class="no-image">No image</div>';

    div.innerHTML = `
      <div class="tick">✓</div>
      ${item.sold ? '<div class="sold-overlay">SOLD</div>' : ''}
      ${imagePart}
      ${item.images.length > 1 ? `
        <div class="arrow arrow-left">&#9664;</div>
        <div class="arrow arrow-right">&#9654;</div>` : ''}
      <div class="name">${item.name}</div>
      <div class="price">$${item.price}</div>
    `;

    div.onclick = (e) => {
      if (e.target.classList.contains('arrow-left')) {
        idx = (idx - 1 + item.images.length) % item.images.length;
        div.querySelector('img').src = item.images[idx];
      } else if (e.target.classList.contains('arrow-right')) {
        idx = (idx + 1) % item.images.length;
        div.querySelector('img').src = item.images[idx];
      } else if (e.target.tagName === 'IMG') {
        openFullscreen(item.images, idx, item.description);
      } else {
        toggleCart(item.name, item.price);
      }
    };

    catDiv.querySelector('.items').appendChild(div);
  });

  document.getElementById('categories').appendChild(catDiv);
}

function toggleCart(name, price) {
  if (name in cart) delete cart[name];
  else cart[name] = price;

  document.querySelectorAll('.item').forEach(div => {
    if (div.querySelector('.name').innerText === name)
      div.classList.toggle('cart-selected', name in cart);
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartSummary();
}

function updateCartSummary() {
  const total = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById('total-price').innerText = total;
  document.getElementById('item-count').innerText = `${Object.keys(cart).length} items`;
}

function openFullscreen(images, idx, description) {
  const fsDiv = document.createElement('div');
  fsDiv.className = 'fullscreen';

  const renderFS = () => {
    fsDiv.innerHTML = `
      <div class="close-btn">✕</div>
      <img src="${images[idx]}">
      <div class="fs-description">${description}</div>
    `;
  };

  fsDiv.onclick = e => {
    if (e.target.classList.contains('close-btn') || e.target === fsDiv) {
      document.body.removeChild(fsDiv);
    } else if (e.target.tagName === 'IMG') {
      const rect = e.target.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      if (clickX < rect.width / 2) idx = (idx - 1 + images.length) % images.length;
      else idx = (idx + 1) % images.length;
      renderFS();
    }
  };

  renderFS();
  document.body.appendChild(fsDiv);
}

document.getElementById('buy-btn').onclick = () => {
  const itemsList = Object.entries(cart)
    .map(([name, price]) => `• ${name} - $${price}`).join('\n');
  const total = Object.values(cart).reduce((sum, p) => sum + p, 0);
  alert(`Call or message Aanya Sanghavi at +1 (347) 410-4301.\n\nItems selected:\n${itemsList}\n\nTotal: $${total}`);
};

renderItems();