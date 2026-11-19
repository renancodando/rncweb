/* RNCWeb — projeto estático, sem bibliotecas, contas, cookies ou banco de dados */
(() => {
  'use strict';

  const PHONE_NUMBER = '5582987372264'; // Telefone público da Gtechservice em Maceió.
  const views = {
    home: document.getElementById('chooser'),
    '1': document.getElementById('demo-one'),
    '2': document.getElementById('demo-two'),
    '3': document.getElementById('demo-three'),
    '4': document.getElementById('demo-four')
  };
  const toolbar = document.getElementById('demo-toolbar');
  const quoteDialog = document.getElementById('quote-dialog');
  const quoteForm = document.getElementById('quote-form');
  const serviceField = document.getElementById('quote-service');
  const deviceField = document.getElementById('quote-device');
  const detailsField = document.getElementById('quote-details');
  const toastElement = document.getElementById('toast');
  let currentView = 'home';
  let toastTimer = 0;

  function viewFromUrl() {
    const v = new URL(window.location.href).searchParams.get('demo');
    return ['1','2','3','4'].includes(v) ? v : 'home';
  }

  function buildUrl(view) {
    const url = new URL(window.location.href);
    if (view === 'home') url.searchParams.delete('demo');
    else url.searchParams.set('demo', view);
    url.hash = '';
    return url;
  }

  function setView(view, pushHistory = true, scrollTop = true) {
    if (!Object.prototype.hasOwnProperty.call(views, view)) view = 'home';
    currentView = view;
    for (const [key, element] of Object.entries(views)) element.hidden = key !== view;
    toolbar.hidden = view === 'home';
    const selectedFrame = views[view]?.querySelector('iframe[data-src]');
    if (selectedFrame && !selectedFrame.getAttribute('src')) selectedFrame.src = selectedFrame.dataset.src;
    document.body.dataset.view = view;
    document.title = view === 'home'
      ? 'Gtechservice | Demonstrações RNCWeb'
      : 'Gtechservice | Demonstrativo ' + view + ' — RNCWeb';

    document.querySelectorAll('.toolbar-tab').forEach(button => {
      const selected = button.dataset.go === view;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    document.querySelectorAll('.mobile-nav[open]').forEach(menu => menu.removeAttribute('open'));

    if (quoteDialog.open) quoteDialog.close();
    if (pushHistory) window.history.pushState({demo:view}, '', buildUrl(view));
    if (scrollTop) window.scrollTo({top:0,behavior:'instant'});
  }

  function toast(message) {
    toastElement.textContent = message;
    toastElement.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toastElement.classList.remove('visible'), 2800);
  }

  function openQuote(service) {
    if (service) {
      const found = Array.from(serviceField.options).some(option => option.value === service);
      serviceField.value = found ? service : 'Assistência técnica';
      if (!found && service) detailsField.value = 'Gostaria de informações sobre: ' + service;
    }
    if (typeof quoteDialog.showModal === 'function') quoteDialog.showModal();
    else quoteDialog.setAttribute('open', '');
  }

  document.addEventListener('click', event => {
    const changeView = event.target.closest('[data-go]');
    if (changeView) {
      event.preventDefault();
      setView(changeView.dataset.go);
      return;
    }

    const serviceButton = event.target.closest('[data-service]');
    if (serviceButton) {
      event.preventDefault();
      openQuote(serviceButton.dataset.service);
      return;
    }

    if (event.target.closest('[data-open-quote]')) {
      event.preventDefault();
      serviceField.value = 'Assistência técnica';
      deviceField.value = '';
      detailsField.value = '';
      openQuote();
      return;
    }

    if (event.target.closest('[data-close-quote]')) {
      event.preventDefault();
      quoteDialog.close();
      return;
    }

    const copy = event.target.closest('[data-copy-link]');
    if (copy) {
      const url = buildUrl(currentView).href;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(
          () => toast('Link desta demonstração copiado!'),
          () => window.prompt('Copie o link:', url)
        );
      } else {
        window.prompt('Copie o link:', url);
      }
      return;
    }

    const anchor = event.target.closest('.mobile-nav a[href^="#"]');
    if (anchor) {
      const menu = anchor.closest('details');
      if (menu) menu.removeAttribute('open');
    }
  });

  quoteDialog.addEventListener('click', event => {
    if (event.target === quoteDialog) quoteDialog.close();
  });

  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const service = serviceField.value;
    const device = deviceField.value.trim();
    const details = detailsField.value.trim();

    const message = [
      'Olá, Gtechservice! Encontrei a loja pelo site e gostaria de mais informações.',
      '',
      'Assunto: ' + service,
      device ? 'Aparelho: ' + device : '',
      details ? 'Detalhes: ' + details : '',
      '',
      'Podem me ajudar?'
    ].filter((line, index, arr) => line !== '' || (index > 0 && arr[index - 1] !== '')).join('\n');

    const whatsappUrl = 'https://wa.me/' + PHONE_NUMBER + '?text=' + encodeURIComponent(message);
    // Navegação ocorre somente depois da ação voluntária do visitante, não há envio automático.
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    quoteDialog.close();
    toast('Conversa preparada no WhatsApp.');
  });

  window.addEventListener('popstate', () => {
    setView(viewFromUrl(), false, false);
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  });

  // Um link com ?demo=1 abre o tema tradicional; ?demo=2 abre o tema premium.
  setView(viewFromUrl(), false, !window.location.hash);
  if (window.location.hash) {
    requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView();
    });
  }
})();
