(() => {
  "use strict";

  // Ano atual no rodapé.
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());

  // A barra superior ganha uma linha de separação depois que a página rola.
  const topbar = document.querySelector(".topbar");
  if (topbar) {
    let aguardando = false;

    const atualizar = () => {
      topbar.classList.toggle("is-scrolled", window.scrollY > 8);
      aguardando = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (aguardando) return;
        aguardando = true;
        requestAnimationFrame(atualizar);
      },
      { passive: true },
    );

    atualizar();
  }

  // Destaca no menu a seção que está no meio da tela.
  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const secoes = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && secoes.length) {
    const naFaixa = new Set();

    // Marca a seção que cruza a faixa central; no topo da página (hero), nenhuma.
    const marcar = () => {
      const atual = secoes.filter((secao) => naFaixa.has(secao)).pop();

      links.forEach((link) => {
        if (atual && link.getAttribute("href") === `#${atual.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) naFaixa.add(entrada.target);
          else naFaixa.delete(entrada.target);
        });
        marcar();
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    secoes.forEach((secao) => observador.observe(secao));
  }

  // Botão "Copiar e-mail": só aparece quando o navegador permite copiar.
  const botaoCopiar = document.querySelector("[data-copy-email]");
  const aviso = document.getElementById("copy-status");

  if (botaoCopiar && navigator.clipboard && window.isSecureContext) {
    const textoOriginal = botaoCopiar.textContent;
    let temporizador;

    botaoCopiar.hidden = false;

    botaoCopiar.addEventListener("click", async () => {
      clearTimeout(temporizador);

      try {
        await navigator.clipboard.writeText(botaoCopiar.dataset.copyEmail);
        botaoCopiar.textContent = "E-mail copiado";
        if (aviso) aviso.textContent = "E-mail copiado.";
      } catch {
        botaoCopiar.textContent = "Não foi possível copiar";
        if (aviso) aviso.textContent = "Não foi possível copiar o e-mail.";
      }

      temporizador = setTimeout(() => {
        botaoCopiar.textContent = textoOriginal;
        if (aviso) aviso.textContent = "";
      }, 2500);
    });
  }
})();
