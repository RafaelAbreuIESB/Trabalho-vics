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
    <section class="hero">
    <h2>O que é o Vitaconect?</h2>
    <p>Vitaconect é um dispositivo gratuito que monitora sinais vitais em tempo real. Ele é ideal para famílias de baixa renda e se conecta com a UBS mais próxima para acionar atendimento médico automaticamente em emergências.</p>
    <img src="img/Ft1.jpg" class="hero-png" />
  </section>
  `,
  sobre: `
    <section>
      <h2>Quem Somos</h2>
      <p>Somos um grupo de estudantes de enfermagem da univerdade IESB, que através desse projeto de extensão, almejam a melhora na saúde coletiva, em especial, em situações de emergência. 
      </p>
      <P> Vitória Christina Silva Lopes - 2412220036 <br> Ana Beatriz Carvalho - 2512220063 <br> Maria Elys Everton Freire - 2512220056 <br> Natália Bomfim Lopes - 2422220039 <br> Janenkassia Magalhães Dos Santos - 2422220010
      </p>
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

    <form id="cadastro-form" class="form-box">
      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required>

      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" name="telefone" required>

      <button type="submit">Enviar</button>
    </form>

    <p id="mensagem-sucesso" class="mensagem-sucesso" style="display: none;">Cadastro enviado com sucesso!</p>
  </section>
`,
contato: `
  <section class="hero">
    <h2>Contato</h2>
    <p>Envie um e-mail para <a href="mailto:vitaconectpopular@gmail.com">vitaconectpopular@gmail.com</a> para saber mais.</p>
    <img src="img/Ft2.jpg" class="hero-png" />
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

document.addEventListener("submit", function(e) {
  if (e.target && e.target.id === "cadastro-form") {
    e.preventDefault();

    // Aqui você poderia enviar para um backend (ex: via fetch)
    const form = e.target;
    const msg = document.getElementById("mensagem-sucesso");

    form.reset();
    msg.style.display = "block";

    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  }
});
