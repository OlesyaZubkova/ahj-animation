function Collapse() {
  const block = document.createElement('div');
  block.innerHTML += '<button class="toggle-btn" id="collapse-btn">Collapse</button>';

  document.body.appendChild(block);
  block.classList.add('block');

  const btn = document.querySelector('.toggle-btn');
  const text = document.createElement('div');
  text.classList.add('text');
  text.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>';

  btn.insertAdjacentElement('afterend', text);

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    text.classList.toggle('active');
  });
}

Collapse();
