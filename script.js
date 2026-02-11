document.addEventListener("DOMContentLoaded", function () {

  // ===== FECHAR MENU MOBILE AO CLICAR =====
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const menu = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        new bootstrap.Collapse(menu).hide();
      }
    });
  });

  // ===== SCROLL SUAVE =====
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      if (link.hash !== '') {
        e.preventDefault();
        document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== ATIVAR LINK DO MENU CONFORME SCROLL =====
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // ===== BOTÃO VOLTAR AO TOPO =====
  const topBtn = document.getElementById('topBtn');

  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== ANIMAÇÃO FADE-IN =====
  const faders = document.querySelectorAll('.fade-in');

  window.addEventListener('scroll', () => {
    faders.forEach(fader => {
      const top = fader.getBoundingClientRect().top;
      const screen = window.innerHeight / 1.2;
      if (top < screen) fader.classList.add('show');
    });
  });

  // ===== FORMULÁRIO WHATSAPP =====
  const form = document.getElementById('formContato');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = form[0].value;
      const telefone = form[1].value;
      const mensagem = form[2].value;

      const textoWhats =
        `Olá, meu nome é ${nome} (${telefone}) e gostaria de saber sobre: ${mensagem}`;

      const numeroWhats = '5584987909064';
      const urlWhats =
        `https://wa.me/${numeroWhats}?text=${encodeURIComponent(textoWhats)}`;

      window.open(urlWhats, '_blank');
      form.reset();
    });
  }

});

// ===== FUNÇÃO BOTÃO WHATS =====
function falarWhats() {
  const msg = encodeURIComponent(
    'Olá! Vim pelo site da Loja da Cida e gostaria de informações 😊'
  );
  window.open('https://wa.me/5584987909064?text=' + msg, '_blank');
}

// ===== COPIAR PIX =====
function copiarPix() {
  navigator.clipboard.writeText("849987909064");
  alert("Chave PIX copiada com sucesso!");
}
