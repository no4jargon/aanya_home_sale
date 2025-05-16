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
        <div class="tick">✓</div>
        <img src="${item.images[0]}">
        <div class="arrow arrow-left">&#9664;</div>
        <div class="arrow arrow-right">&#9654;</div>
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
          openFullscreen(item.images, currentImgIndex);
        } else {
          toggleCart(item.name, item.price, itemDiv);
        }
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
  document.getElementById('item-count').innerText = Object.keys(cart).length + ' items';
}

function openFullscreen(images, startIndex) {
  let idx = startIndex;
  const fsDiv = document.createElement('div');
  fsDiv.className = 'fullscreen';

  const renderFS = () => {
    fsDiv.innerHTML = `
      <img src="${images[idx]}">
      <div class="arrow arrow-left">&#9664;</div>
      <div class="arrow arrow-right">&#9654;</div>
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
  alert('📞 Call Aanya Sanghavi at +1 (347) 410-4301');
};

renderItems();