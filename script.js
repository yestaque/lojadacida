  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const menu = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        new bootstrap.Collapse(menu).hide();
      }
    });
  });

 const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let atual = '';

    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;

      if (top >= offset && top < offset + height) {
        atual = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + atual) {
        link.classList.add('active');
      }
    });
  });

  function falarWhats() {
    const msg = encodeURIComponent(
      'Olá! Vim pelo site da Loja da Cida e gostaria de informações 😊'
    );
    window.open('https://wa.me/5584987909064?text=' + msg, '_blank');
  }

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        if (link.hash !== '') {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
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

const topBtn = document.getElementById('topBtn');
window.onscroll = () => topBtn.style.display = (window.scrollY > 300 ? 'block' : 'none');
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.2;
        if (top < screen) fader.classList.add('show');
    });
});

document.getElementById('formContato').addEventListener('submit', e => {
    e.preventDefault();
    const nome = e.target[0].value;
    const tel = e.target[1].value;
    const msg = e.target[2].value;
    const url = `https://wa.me/5584987909064?text=Olá,%20meu%20nome%20é%20${nome}%20(${tel})%20e%20gostaria%20de%20saber:%20${msg}`;
    window.open(url, '_blank');
});

// Seleciona o formulário
const form = document.getElementById('formContato');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que a página recarregue

    // Pega os valores do formulário
    const nome = form[0].value;
    const telefone = form[1].value;
    const mensagem = form[2].value;

    // Monta a mensagem para o WhatsApp
    const textoWhats = `Olá, meu nome é ${nome} (${telefone}) e gostaria de saber sobre: ${mensagem}`;

    // Link do WhatsApp (substitua com seu número)
    const numeroWhats = '5584987909064';
    const urlWhats = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(textoWhats)}`;

    // Abre o WhatsApp em nova aba
    window.open(urlWhats, '_blank');

    // Opcional: limpar o formulário
    form.reset();
});
