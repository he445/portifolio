# Portfólio de Everton Ferreira

Portfólio de desenvolvedor júnior, feito em HTML, CSS e JavaScript puros, sem framework e sem etapa de build. Publicado na Vercel.

## Como rodar

Qualquer servidor estático serve. Por exemplo:

```bash
python3 -m http.server 8000
```

Depois, abra http://localhost:8000.

## Estrutura

| Caminho | O que é |
| --- | --- |
| `index.html` | A página inteira (seções Projetos, Sobre e Contato) |
| `style.css` | Estilos, com as cores e as fontes definidas como variáveis no topo |
| `script.js` | Menu que acompanha a rolagem, botão de copiar e-mail e ano do rodapé |
| `assets/fonts/` | Bricolage Grotesque e Literata (variáveis, subconjunto latino), servidas do próprio site |
| `assets/` | Currículo em PDF e imagem de pré-visualização para redes sociais (`og.png`) |

## Decisões

- **Sem dependências.** A página carrega só um CSS, um JS curto e duas fontes.
- **Acessibilidade.** Link para pular ao conteúdo, foco visível, menu com `aria-current`, links externos avisando que abrem em nova aba e respeito a `prefers-reduced-motion`.
- **Fontes.** Ambas usam a licença SIL OFL 1.1; o texto da licença está em `assets/fonts/OFL.txt`.

## Atualizar o currículo

Troque o arquivo `assets/Everton-Ferreira-Curriculo-Dev-Junior.pdf` mantendo o mesmo nome. Os três botões de download da página apontam para ele.
