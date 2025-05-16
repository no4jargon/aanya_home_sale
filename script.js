let cart = JSON.parse(localStorage.getItem('cart')) || {};

function renderItems() {
  const categoriesEl = document.getElementById('categories');
  const categories = [...new Set(ITEMS_DATA.map(i => i.category))];

  categories.forEach(category => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category';
    catDiv.innerHTML = `<h3>${category}</h3><div class="items"></div>`;

    ITEMS_DATA.filter(i => i.category === category).forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = `item${cart[item.name] ? ' cart-selected' : ''}`;
      
      let currentImgIndex = 0;
      itemDiv.innerHTML = `
        <img src="${item.images[0]}" alt="${item.name}">
        <div class="name">${item.name}</div>
        <div class="description">${item.description}</div>
        <div class="price">$${item.price}</div>
      `;

      itemDiv.onclick = (e) => {
        if(e.target.tagName === 'IMG') {
          openFullscreen(item.images[currentImgIndex]);
        } else {
          toggleCart(item.name, item.price, itemDiv);
        }
      };

      itemDiv.oncontextmenu = (e) => {
        e.preventDefault();
        currentImgIndex = (currentImgIndex + 1) % item.images.length;
        itemDiv.querySelector('img').src = item.images[currentImgIndex];
      };

      catDiv.querySelector('.items').appendChild(itemDiv);
    });

    categoriesEl.appendChild(catDiv);
  });

  updateCartSummary();
}

function toggleCart(name, price, el) {
  if(cart[name]) {
    delete cart[name];
    el.classList.remove('cart-selected');
  } else {
    cart[name] = price;
    el.classList.add('cart-selected');
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartSummary();
}

function updateCartSummary() {
  const total = Object.values(cart).reduce((sum, p) => sum + p, 0);
  document.getElementById('total-price').innerText = total;
}

function openFullscreen(src) {
  const fsDiv = document.createElement('div');
  fsDiv.className = 'fullscreen';
  fsDiv.innerHTML = `<img src="${src}">`;
  document.body.appendChild(fsDiv);
  fsDiv.onclick = () => document.body.removeChild(fsDiv);
}

renderItems();