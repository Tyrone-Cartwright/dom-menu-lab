// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

const showingSubMenu = false;

// Select and cache the main element in variable named mainEl
const mainEl = document.querySelector('main');
// console.log(mainEl);
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.getElementById('sub-menu');
// Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks
const topMenuLinks = document.querySelectorAll('a');
// console.log(topMenuLinks);

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

menuLinks.forEach(function (menuLink) {
  const aEl = document.createElement('a');
  aEl.setAttribute('href', 'menuLink.href');
  aEl.textContent = menuLink.text;
  topMenuEl.appendChild(aEl);
});

// Set the height subMenuEl to 100%
subMenuEl.style.height = '100%';
// Set the background color of subMenuEl to the value
// stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');
// Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = 'absolute';
// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = '0';
console.log(subMenuEl);

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', handleClick);
// function should call the event object's preventDefault() method
function handleClick(evt) {
  evt.preventDefault();
  // immediately return if the element clicked was not an <a> element
  if (evt.target !== topMenuEl) {
    return;
  }
  if (evt.target === 'active') {
    topMenuEl.classList.remove('active');
  }
  showingSubMenu = false;
  subMenuEl.style.top = 0;
}
