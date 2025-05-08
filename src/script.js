const content = document.getElementById('content');
content.classList.add("fade", "show");

const navLinks = document.querySelectorAll('nav a');
const toggleBtn = document.getElementById('theme-toggle');

// Tema escuro/claro
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
  }
}

// Alternar tema ao clicar
toggleBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});

// Carrega tema salvo
applyTheme(localStorage.getItem('theme') || 'light');

// Conteúdo das páginas
const pages = {
  home: `
    <section>
      <h2>O que é o Vitaconect?</h2>
      <p>Vitaconect é um dispositivo gratuito que monitora sinais vitais em tempo real. Ele é ideal para famílias de baixa renda e se conecta com a UBS mais próxima para acionar atendimento médico automaticamente em emergências.</p>
    </section>
  `,
  sobre: `
    <section>
      <h2>Quem Somos</h2>
      <p>Vitaconect é um dispositivo que monitora sinais vitais e avisa a UBS mais próxima sobre alterações. Em caso de emergência, a unidade envia uma ambulância (unidade de atendimento móvel).</p>
    </section>
  `,
  publico: `
    <section>
      <h2>Para quem é?</h2>
      <p>Grátis para famílias de baixa renda. Basta se cadastrar para receber o dispositivo.</p>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Como se cadastrar?</h2>
      <p>Não precisa detalhar muito. Pode ser algo simples — apenas informar os dados básicos para o contato.</p>
    </section>
  `,
  contato: `
    <section>
      <h2>Contato</h2>
      <p>Envie um e-mail para <a href="mailto:seugmail@gmail.com">seugmail@gmail.com</a> para saber mais.</p>
    </section>
  `
};

function loadPage(page) {
  content.classList.remove("show");

  setTimeout(() => {
    content.innerHTML = pages[page] || pages.home;
    content.classList.add("show");

    navLinks.forEach(link => {
      link.classList.toggle("active", link.dataset.page === page);
    });
  }, 300);
}

// Inicializa na home
loadPage('home');

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = e.target.dataset.page;
    loadPage(page);
  });
});
