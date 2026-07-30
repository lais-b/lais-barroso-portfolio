# Laís Barroso, portfólio

Perfil profissional, currículo digital e portfólio de projetos, em português
e inglês. Feito em HTML, CSS e JavaScript puro: **sem framework, sem build,
sem dependência externa e sem nenhuma requisição para fora**, as fontes ficam
dentro do próprio repositório, então o site abre até offline.

**Posicionamento:** Marketing Operations, Growth & Business Operations
**Nível:** trainee · analista júnior · analista pleno
**Disponibilidade:** remoto no Brasil, remoto internacional, híbrido em BH e Rio

---

## Índice

1. [A regra mais importante](#1-a-regra-mais-importante)
2. [Arquivos](#2-arquivos)
3. [Como abrir no computador](#3-como-abrir-no-computador)
4. [Checklist do que falta preencher](#4-checklist-do-que-falta-preencher) ← **comece aqui**
5. [Fotografias: quais são e onde entram](#5-fotografias-quais-são-e-onde-entram)
6. [Como editar textos e traduções](#6-como-editar-textos-e-traduções)
7. [Como editar os projetos](#7-como-editar-os-projetos)
8. [Como mudar cores e fontes](#8-como-mudar-cores-e-fontes)
9. [Os adesivos](#9-os-adesivos)
10. [Como testar](#10-como-testar)
11. [Como publicar](#11-como-publicar)
12. [Domínio próprio](#12-domínio-próprio)

---

## 1. A regra mais importante

**O site publicado nunca mostra `[ADICIONAR...]`, `PREENCHER` ou link quebrado.**

Tudo que ainda não existe fica registrado em **`content-status.js`**. Quando um
campo está vazio, o componente correspondente simplesmente não é desenhado:

| Situação | O que o visitante vê |
|---|---|
| E-mail em branco | O botão de e-mail não aparece |
| LinkedIn em branco | O botão de LinkedIn não aparece |
| Nenhum contato preenchido | Uma frase discreta: "Canais de contato em atualização" |
| Currículo não enviado | O link de download não aparece |
| Projeto com `published: false` | Só a prévia, com o selo "Case em breve" |
| Foto ainda não colocada | O espaço some, sem buraco no layout |
| Métrica não validada | "Resultados serão publicados quando validados." |

**No seu computador é diferente:** ali o site mostra, em cinza, exatamente qual
arquivo falta (ex.: "ADICIONAR LAIS-HERO.JPG"). Isso é proposital, serve de
lista de tarefas para você e **desaparece sozinho** quando o site está no ar.
A diferença é detectada pelo endereço, não precisa configurar nada.

---

## 2. Arquivos

```text
lais-barroso-portfolio/
├── index.html            estrutura das seções
├── styles.css            toda a aparência
├── content.js            TODO o texto, em PT e EN, + os projetos
├── content-status.js     o que já está pronto para aparecer  ← você mexe aqui
├── script.js             comportamentos (idioma, menu, projetos, animação)
├── README.md
├── .gitignore
└── assets/
    ├── fonts/            Instrument Serif + Manrope (não mexer)
    ├── imagens/          as fotos entram aqui
    ├── curriculos/       os PDFs entram aqui
    └── favicon/
```

Na prática você só precisa mexer em **`content-status.js`** (o que está pronto)
e **`content.js`** (as palavras).

### Seções

Hero em colagem · Manifesto · Projetos · Trajetória · Como eu trabalho ·
Skills & Tools · Formação e idiomas · Quem é Laís · Contato · Rodapé

---

## 3. Como abrir no computador

Clique duas vezes em **`index.html`**. Só isso, não precisa instalar nada.

> Uma observação: abrindo o arquivo direto, o navegador bloqueia o carregamento
> das fotos em alguns casos. Se quiser ver exatamente como fica no ar, rode um
> servidor local: abra o terminal na pasta do projeto e digite
> `python -m http.server 8899`, depois acesse `http://127.0.0.1:8899`.

---

## 4. Checklist do que falta preencher

Tudo abaixo está no arquivo **`content-status.js`**.

### Contato
- [x] `professionalEmail`, preenchido a partir do currículo
- [ ] `linkedin`, endereço completo do perfil

### Currículos
- [x] Os dois PDFs já estão no site e os botões funcionam

### Datas
- [x] Todas preenchidas (Pluris: mai. 2023 a mai. 2024)

### Métricas, **só números que você confirmou**
- [ ] `metrics.betpass`, ex.: `[{ value: "12h", label: "por mês no fechamento" }]`
- [ ] `metrics.coi`, ex.: `[{ value: "3x", label: "mais leads qualificados" }]`

Enquanto as listas estiverem vazias, nenhum número aparece. **Nunca preencha
com estimativa**: um número errado num portfólio é pior do que nenhum número.

### Links dos projetos
- [ ] `link` do site do COI, do Mapa de Oportunidades e do Instagram

Cada projeto pode ter um botão "Ver o produto no ar". Enquanto o campo estiver
vazio, o botão não aparece.

### Fotos
- [ ] `og-image.jpg` (1200×630) para o link ficar bonito no LinkedIn e WhatsApp

As três fotos pessoais já estão no site.

---

## 5. Fotografias: quais são e onde entram

Coloque tudo em **`assets/imagens/`** com **exatamente** estes nomes
(minúsculas, sem acento, sem espaço). Formato `.jpg`.

| Arquivo | Onde aparece | Situação |
|---|---|---|
| `lais-hero.jpg` | Retrato principal do topo | ✅ no site (Salvador, recortada 4:5) |
| `lais-viagem.jpg` | Polaroid do topo | ✅ no site (Machu Picchu, quadrada) |
| `lais-lagoa.jpg` | Polaroid da seção "Quem é Laís" | ✅ no site (recortada 4:5) |
| `og-image.jpg` | Pré-visualização no LinkedIn e WhatsApp | ⬜ **falta**, 1200×630 exatos |

Os projetos **não usam imagem**: cada um é um cartão tipográfico, com filete
vinho, categoria, título em serifa e ferramentas. Foi decisão de projeto, não
falta de arquivo, evita depender de print de dashboard ou de tela de produto.

Para trocar uma foto, basta substituir o arquivo em `assets/imagens/` mantendo
o mesmo nome. Os recortes originais vieram de fotos maiores; se quiser refazer,
o site corta sozinho pelo centro, priorizando o topo da imagem (o rosto).

**Se um dia apagar uma foto:** o espaço some no site publicado, sem buraco.

**Cuidado com peso:** deixe cada foto abaixo de ~400 KB. Uma imagem de 5 MB
deixa o site lento no celular.

---

## 6. Como editar textos e traduções

Todo o texto está em **`content.js`**, em dois blocos: `pt:` e `en:`.

```javascript
"hero.tagline": "Eu organizo ideias, processos e dados para fazer projetos avançarem.",
```

Troque só o que está entre aspas do lado direito, e **sempre edite a mesma
chave nos dois idiomas**. Se você mudar só o português, o inglês continua
mostrando o texto antigo.

Para descobrir a chave de um texto: clique com o botão direito nele no
navegador → **Inspecionar** → procure `data-i18n="..."`.

O idioma escolhido fica salvo no navegador de quem visita.

> ⚠️ Mantenha as vírgulas e aspas no lugar. Se o site parar de trocar de idioma,
> aperte `F12`, abra a aba **Console** e veja qual linha está reclamando.

---

## 7. Como editar os projetos

Cada projeto é um bloco na lista `PROJECTS`, no fim de **`content.js`**:

```javascript
{
  id: "coi-mapa",          // não repetir, é o endereço do case (#p/coi-mapa)
  year: "2026",
  size: "tall",            // wide | tall | regular | full  → tamanho na grade
  image: "coi-mapa.jpg",   // imagem da prévia
  gallery: ["coi-mapa.jpg"],
  tools: ["Meta Ads", "Landing pages"],
  pt: { category, title, challenge, role, context, process[], deliverables[], learnings[], note },
  en: { ... }
}
```

- **`size`** controla a composição: `wide` ocupa 2/3, `tall` é vertical,
  `regular` é 1/3 e `full` atravessa a página inteira.
- **`note`** é a observação em itálico no fim do case, use para deixar claro
  o que você **não** fez (ex.: "o desenvolvimento da plataforma é do time de
  tecnologia") ou para avisar que os visuais são demonstrativos.
- Para o projeto aparecer completo, ele precisa estar como `published: true`
  em `content-status.js`.

Cada case abre num painel lateral e tem endereço próprio
(`.../#p/coi-mapa`), dá para mandar o link direto de um projeto numa
candidatura.

---

## 8. Como mudar cores e fontes

No começo de **`styles.css`**:

```css
--paper:     #F4F0E8;   /* fundo */
--surface:   #E9E1D5;   /* superfícies e polaroids */
--ink:       #211D1C;   /* texto */
--wine:      #681F36;   /* cor principal */
--wine-deep: #40101F;   /* hover */
--clay:      #B86E6E;   /* SÓ decorativo: fitas, carimbos, filetes */
--clay-text: #A14F4F;   /* quando o tom precisa virar texto */
```

**Por que existem dois tons de rosa:** `--clay` tem contraste 3,4:1, abaixo do
mínimo de acessibilidade (4,5:1). Ele serve para decoração. Quando a cor precisa
virar palavra legível, use `--clay-text`. Se trocar as cores, confira em
<https://webaim.org/resources/contrastchecker/>.

Trocando `--wine` você muda o destaque do site inteiro. Atualize também a linha
`<meta name="theme-color">` no `index.html` e a cor do `favicon.svg`.

**Fontes:** Instrument Serif (títulos) e Manrope (texto), ambas dentro de
`assets/fonts/`. São licenciadas em SIL OFL, o que permite distribuir junto com
o site. Não apague essa pasta.

---

## 9. Os adesivos

Os elementos de colagem são feitos em CSS e SVG, **nenhum é imagem**, então
não pesam e ficam nítidos em qualquer tela. Cada um mora numa seção específica:

| Adesivo | Onde |
|---|---|
| Etiqueta de bagagem "BH, Brazil" | Hero |
| Post-it "strategy → execution" | Hero |
| Seta "sempre ligando os pontos" | Hero |
| Selos marketing / operations / data / AI | Hero |
| Pasta "ongoing projects" e funil | Projetos |
| Bloquinho de checklist | Como eu trabalho |
| Mini planilha e janela de dashboard | Skills |
| Carimbo de passaporte "PT · EN · ES · FR" | Idiomas |
| Mini mapa, "curious by nature", "from science to business" | Quem é Laís |
| Fitas adesivas | Segurando as fotos |

O título "QUEM É LAÍS" é montado letra por letra em CSS, cada uma com fundo,
fonte e inclinação diferentes, com um balanço leve. Leitores de tela leem a
frase inteira normalmente, não letra por letra.

Todos param de se mexer se a pessoa tiver "reduzir movimento" ligado no sistema.

---

## 10. Como testar

- [ ] Trocar PT/EN muda **tudo**, sem recarregar a página
- [ ] Fechar e reabrir o navegador mantém o idioma escolhido
- [ ] Clicar num projeto abre o painel; `Esc` fecha; o link `#p/...` funciona sozinho
- [ ] Nenhum `[ADICIONAR]` visível quando aberto pelo endereço publicado
- [ ] `F12` → aba **Console**: nenhuma linha vermelha
- [ ] `F12` → ícone de celular (`Ctrl+Shift+M`): testar em 390, 768, 1280 e 1440
- [ ] Nada corta nem rola para o lado em nenhuma largura
- [ ] `Tab` percorre a página e mostra contorno vinho em tudo que é clicável

---

## 11. Como publicar

O site fica em <https://lais-b.github.io/lais-barroso-portfolio/>, servido pela
branch `main`.

```bash
cd ~/projetos/lais-barroso-portfolio
git add .
git commit -m "descreva o que mudou"
git push
```

Republica sozinho em 1 a 3 minutos. Se não mudar na hora, `Ctrl + F5`.

> A identidade do git neste repositório já está configurada para a conta pessoal
> `lais-b`. Não mexa nela: o git global desta máquina aponta para a conta do COI,
> e os commits apareceriam como contribuição da empresa.

---

## 12. Domínio próprio

Se um dia registrar um domínio:

1. No painel do domínio, crie quatro registros `A` para `@` apontando para
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`,
   e um `CNAME` de `www` para `lais-b.github.io`.
2. No GitHub: **Settings → Pages → Custom domain**, digite o domínio e salve.
3. Espere o DNS propagar e marque **Enforce HTTPS**.
4. Troque o endereço em `index.html` (`canonical`, `og:url` e `og:image`).
