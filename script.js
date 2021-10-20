//Script.js

const htmlBox = document.querySelector('.wrapper');

window.addEventListener('keydown', e => {

    console.log(e);

    htmlBox.innerHTML = `
    <div class="key">${e.key === ' ' ? 'Space' : e.key }<small>event.key</small></div>
    <div class="key">${e.keyCode}<small>event.keycode</small></div>
    <div class="key">${e.code}<small>event.code</small></div>
    `;

});