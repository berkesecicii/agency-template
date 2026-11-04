'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const WA_PHONE = '440000000000';
const form = $('#project-form');
const packageSelect = $('#package-select');
let lastDialogTrigger;

const menuButton = $('.menu-toggle');
const mobileMenu = $('#mobile-menu');
function closeMenu() { mobileMenu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', window.t?.('openMenu') || 'Open menu'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; mobileMenu.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? (window.t?.('closeMenu') || 'Close menu') : (window.t?.('openMenu') || 'Open menu')); });
$$('.mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 1000) closeMenu(); });

$$('.showcase-tab').forEach(button => button.addEventListener('click', () => {
  $$('.showcase-tab').forEach(tab => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-pressed', String(tab === button)); });
  $$('[data-showcase]').forEach(panel => { panel.hidden = panel.dataset.showcase !== button.dataset.view; });
  $('.stage-index').textContent = ({ website: '01', dashboard: '02', commerce: '03' })[button.dataset.view] + ' — 03';
}));

function selectPackage(value) {
  const option = [...packageSelect.options].find(item => item.value === value);
  if (option) packageSelect.value = option.value;
  $('#form-status').textContent = window.t?.('packageSelected') || 'Your starting point is selected. Tell us a little about your business.';
}
$$('.package-choice').forEach(link => link.addEventListener('click', () => selectPackage(link.dataset.package)));

function composeBrief() {
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const business = String(data.get('business') || '').trim();
  const note = String(data.get('message') || '').trim();
  return `Hello Nimbus Web Studio!\n\nName: ${name}\nBusiness: ${business}\nPreferred website language: ${document.documentElement.lang}\nLocation: ${data.get('location')}\nInterested in: ${data.get('package')}\n${note ? `\nAbout my project:\n${note}\n` : ''}\nPlease help me with the next steps and a quote, including any separate hosting, domain and maintenance costs.`;
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const message = composeBrief();
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  $('#form-status').textContent = window.t?.('waOpened') || 'Your enquiry is ready in WhatsApp. Nothing is sent until you press Send there.';
});
$('#copy-brief').addEventListener('click', async () => {
  if (!form.reportValidity()) return;
  try { await navigator.clipboard.writeText(composeBrief()); $('#form-status').textContent = window.t?.('copied') || 'Enquiry copied. You can paste it into WhatsApp or email.'; }
  catch { $('#form-status').textContent = window.t?.('copyFailed') || 'Copy is unavailable here. Use the WhatsApp button or email us directly.'; }
});

const conceptData = {
  retail: { title: 'A collection worth discovering.', description: 'A welcoming catalogue for a boutique or independent shop. Visitors discover the products, learn about the business and start an order enquiry on WhatsApp.', features: ['Mobile-friendly product discovery', 'Clear categories and contact links', 'An easy next step on WhatsApp'], package: 'Basic Website — $400' },
  services: { title: 'Make your first impression count.', description: 'A clear, personal introduction for a local service business. Show what you do, where you work and how customers can reach you.', features: ['A distinctive introduction', 'Contact information and location', 'A clear enquiry route'], package: 'Basic Website — $400' },
  commerce: { title: 'Give every order a good start.', description: 'A design direction for a complete online store. The actual build is scoped around customer accounts, checkout, orders, inventory and shipping integrations.', features: ['Customer accounts and online payment', 'Order and inventory management', 'Notifications and shipping updates'], package: 'Premium E-Commerce — starting at $1,500+' }
};
function openDialog(dialog, trigger) { lastDialogTrigger = trigger; document.body.classList.add('dialog-open'); dialog.showModal(); $('.dialog-close', dialog).focus(); }
function closeDialog(dialog) { dialog.close(); }
$$('.concept-open').forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.concept;
  const original = conceptData[key];
  const translate = window.translateText || (text => text);
  const content = { title: translate(original.title), description: translate(original.description), features: original.features.map(translate) };
  const art = $('.concept-art', button).cloneNode(true);
  art.classList.add('dialog-art');
  art.classList.remove('concept-art');
  $('.concept-badge', art)?.remove();
  const outer = document.createElement('div'); outer.className = 'dialog-inner'; outer.append(art);
  const copy = document.createElement('div'); copy.className = 'dialog-copy';
  const tag = document.createElement('span'); tag.className = 'eyebrow dark'; tag.textContent = window.t?.('conceptLabel') || 'ILLUSTRATIVE CONCEPT';
  const title = document.createElement('h2'); title.textContent = content.title;
  const description = document.createElement('p'); description.textContent = content.description;
  const list = document.createElement('ul'); content.features.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
  const cta = document.createElement('a'); cta.href = '#contact'; cta.className = 'button button-ink'; cta.textContent = window.t?.('discussDirection') || 'Discuss a direction like this ↗'; cta.addEventListener('click', () => { selectPackage(original.package); closeDialog($('#concept-dialog')); });
  copy.append(tag, title, description, list, cta); outer.append(copy); $('#dialog-content').replaceChildren(outer); openDialog($('#concept-dialog'), button);
}));
$('#privacy-open').addEventListener('click', event => openDialog($('#privacy-dialog'), event.currentTarget));
$$('dialog').forEach(dialog => {
  $('.dialog-close', dialog).addEventListener('click', () => closeDialog(dialog));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog); } });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastDialogTrigger?.focus({ preventScroll: true }); });
});
$('.privacy-done').addEventListener('click', () => closeDialog($('#privacy-dialog')));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
$('#year').textContent = new Date().getFullYear();

const showcaseViews = {
  home: {src:'assets/showcase-home.jpg', alt:'Sample Boutique homepage preview'},
  catalogue: {src:'assets/showcase-catalogue.jpg', alt:'Sample Boutique product catalogue with occasion dresses and WhatsApp ordering'}
};
$$('[data-showcase-view]').forEach(button => button.addEventListener('click', () => {
  const view = showcaseViews[button.dataset.showcaseView];
  $('#showcase-screen-image').src = view.src;
  $('#showcase-screen-image').alt = view.alt;
  $$('[data-showcase-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
}));

// Illustrative interactions only: no data is sent and no payment is processed.
$('.demo-product-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const list = $('.demo-product-list');
  list.querySelector('.added-demo-product')?.remove();
  const row = document.createElement('div'); row.className = 'demo-product-item added-demo-product';
  const photo = document.createElement('img'); photo.src = 'assets/sample-product-a.jpg'; photo.alt = 'Demo product';
  const name = document.createElement('b'); name.textContent = String(data.get('title'));
  const price = document.createElement('span'); price.textContent = '£' + Number(data.get('price')).toFixed(2);
  const state = document.createElement('span'); state.className = 'demo-stock'; state.textContent = 'Just added';
  row.append(photo,name,price,state); list.append(row);
  $('.editor-count').textContent = '3 products'; $('.editor-success').hidden = false;
});
$$('[data-checkout-stage]').forEach(button => button.addEventListener('click', () => {
  const stage = button.dataset.checkoutStage;
  $$('[data-checkout-panel]').forEach(panel => { panel.hidden = panel.dataset.checkoutPanel !== stage; });
  $$('.checkout-progress button').forEach(item => { item.classList.toggle('selected', item.dataset.checkoutStage === stage); item.setAttribute('aria-pressed',String(item.dataset.checkoutStage === stage)); });
}));
