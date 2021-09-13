// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Select and cache the main element in variable named mainEl
const mainEl = document.querySelector('main');
// console.log(mainEl);
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');

// Set the background color of mainEl to the value stored in --main-bg
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

// Set the height topMenuEl to be 100% height
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

const menuLinksEl = document.querySelectorAll('menuLinks');
menuLinksEl.forEach(function (menuLink) {
  const aEl = document.createElement('a');
  // const linkEl = document.createTextNode(menuLink.text);
  aEl.setAttribute('href', menuLink.href);
  aEl.textContent = 'menuLink.text';
  aEl.appendChild(topMenuEl);
});
