# Laís Barroso — site profissional

Site pessoal que funciona como perfil profissional, currículo digital,
portfólio de cases e página de contato para candidaturas — em português
e inglês, com troca de idioma instantânea.

**Posicionamento:** Marketing Operations, Growth & Business Operations.
**Nível-alvo:** trainee, analista júnior e analista pleno.
**Disponibilidade:** remoto no Brasil, remoto internacional e híbrido em
Belo Horizonte ou no Rio de Janeiro.

Feito com HTML, CSS e JavaScript puro. **Sem frameworks, sem bibliotecas,
sem instalação e sem processo de build.** Basta abrir o arquivo `index.html`.

---

## Índice

1. [Estrutura de arquivos](#1-estrutura-de-arquivos)
2. [Como abrir o site no computador](#2-como-abrir-o-site-no-computador)
3. [O que ainda precisa ser preenchido](#3-o-que-ainda-precisa-ser-preenchido) ← **comece por aqui**
4. [Como trocar os links (LinkedIn e e-mail)](#4-como-trocar-os-links-linkedin-e-e-mail)
5. [Como adicionar os currículos em PDF](#5-como-adicionar-os-currículos-em-pdf)
6. [Como editar os textos](#6-como-editar-os-textos)
7. [Como editar as traduções](#7-como-editar-as-traduções)
8. [Como atualizar os cases](#8-como-atualizar-os-cases)
9. [Como alterar as cores](#9-como-alterar-as-cores)
10. [Como adicionar uma foto profissional](#10-como-adicionar-uma-foto-profissional)
11. [Como gerar o favicon `.ico`](#11-como-gerar-o-favicon-ico)
12. [Como testar antes de publicar](#12-como-testar-antes-de-publicar)
13. [Como publicar no GitHub Pages](#13-como-publicar-no-github-pages)
14. [Como atualizar o site depois de publicado](#14-como-atualizar-o-site-depois-de-publicado)
15. [Como usar um domínio próprio no futuro](#15-como-usar-um-domínio-próprio-no-futuro)

---

## 1. Estrutura de arquivos

```text
lais-barroso-portfolio/
├── index.html          → todo o conteúdo e a estrutura das seções
├── styles.css          → toda a aparência (cores, espaçamentos, responsividade)
├── script.js           → links, traduções PT/EN, menu do celular
├── README.md           → este manual
├── .gitignore          → arquivos que não vão para o GitHub
└── assets/
    ├── curriculos/     → os PDFs do currículo entram aqui
    │   ├── ADICIONAR-CURRICULO-PT-AQUI.txt
    │   └── ADICIONAR-CURRICULO-EN-AQUI.txt
    ├── imagens/        → foto e imagem de compartilhamento (ver README interno)
    │   └── README.md
    └── favicon/        → ícone que aparece na aba do navegador
        ├── favicon.svg
        └── favicon.ico
```

**Só existem três arquivos para editar:** `index.html`, `styles.css` e `script.js`.
Abra qualquer um deles com o Bloco de Notas, o VS Code ou qualquer editor de texto.

### Seções do site

Header · Hero · Sobre · Áreas de atuação · Experiência · Cases · **Projetos** ·
Competências · Formação e idiomas · Objetivo profissional · Contato · Rodapé.

---

## 2. Como abrir o site no computador

Clique duas vezes no arquivo **`index.html`**. Ele abre no navegador padrão.

É só isso — não precisa instalar nada, não precisa de servidor e não precisa
de internet. Depois de qualquer edição, salve o arquivo e aperte `F5` no
navegador para ver o resultado.

> Se o navegador abrir uma janela de "escolher programa", clique com o botão
> direito no `index.html` → **Abrir com** → Chrome, Edge ou Firefox.

---

## 3. O que ainda precisa ser preenchido

Tudo que falta está marcado de duas formas:

- No **site**, aparece dentro de uma caixinha vinho, entre colchetes:
  `[ADICIONAR MÉTRICA REAL]`.
- No **código**, aparece como comentário: `PREENCHER:`.

Para achar tudo de uma vez, abra o arquivo e use `Ctrl + F` procurando por
`PREENCHER` e por `[ADICIONAR`.

### Lista completa dos campos pendentes

**Links e contato — arquivo `script.js`, seção "01. LINKS E ARQUIVOS"**

| Campo | O que colocar |
|---|---|
| `linkedin` | O endereço completo do perfil, ex.: `https://www.linkedin.com/in/.../` |
| `email` | O e-mail profissional de contato |
| `resumesAvailable` | Trocar `false` por `true` depois de subir os dois PDFs |

**Endereços do site — arquivo `index.html`, no topo (dentro de `<head>`)**

> A URL do site já está preenchida: `https://lais-b.github.io/lais-barroso-portfolio/`

| Campo | O que colocar |
|---|---|
| `PREENCHER_URL_IMAGEM_COMPARTILHAMENTO` (2 lugares) | O endereço da imagem de 1200×630 (ver `assets/imagens/README.md`) |

**Datas — arquivo `script.js`, seção "02. TRADUÇÕES"** (lembre de editar em PT **e** EN)

| Chave | O que colocar |
|---|---|
| `exp.betpass.period` | Período na Betpass (ex.: `Jan 2023 — atual`) |
| `exp.coi.period` | Período no COI |
| `edu.1.period` | Período da pós-graduação na FGV |
| `edu.2.period` | Período da graduação na UFMG |

**Métricas reais — arquivo `script.js`, seção "02. TRADUÇÕES"**

| Chave | O que colocar |
|---|---|
| `exp.betpass.metric` | Um resultado real: tempo economizado, volume processado, melhoria |
| `exp.coi.metric` | Um resultado real: leads, alcance, custo por lead, resultado de campanha |

**Cases — arquivo `script.js`**, todas as chaves terminadas em `Ph`
(de *placeholder*). Ver a [seção 8](#8-como-atualizar-os-cases).

**Projetos — arquivo `script.js`**

| Chave | O que colocar |
|---|---|
| `projects.2.ph` | Qual produto do COI, seu papel e o que foi entregue |
| `projects.2.stackPh` | Ferramentas usadas nesse projeto |
| `projects.3.ph` | Qual rotina você automatizou e o que mudou depois |
| `projects.3.stackPh` | Outras ferramentas de automação |

**Arquivos**

| Arquivo | Onde |
|---|---|
| `curriculo-lais-barroso-pt.pdf` | `assets/curriculos/` |
| `curriculo-lais-barroso-en.pdf` | `assets/curriculos/` |
| `og-image.png` (opcional) | `assets/imagens/` |
| Foto profissional (opcional) | `assets/imagens/` |

> **Regra importante deste site:** nenhum número foi inventado. Todos os
> resultados e métricas ficaram em branco de propósito, para serem
> preenchidos apenas com informação real e verificável.

---

## 4. Como trocar os links (LinkedIn e e-mail)

Abra o **`script.js`**. Logo no começo do arquivo está o bloco abaixo —
é o **único lugar** onde os links precisam ser mexidos:

```javascript
var profileLinks = {
  // PREENCHER: adicionar link real do LinkedIn
  linkedin: "PREENCHER_LINK_LINKEDIN",

  // PREENCHER: adicionar e-mail profissional
  email: "PREENCHER_EMAIL",

  resumePT: "assets/curriculos/curriculo-lais-barroso-pt.pdf",
  resumeEN: "assets/curriculos/curriculo-lais-barroso-en.pdf",

  resumesAvailable: false
};
```

Troque **apenas o texto entre aspas**. Exemplo depois de preenchido:

```javascript
  linkedin: "https://www.linkedin.com/in/lais-barroso/",
  email: "lais.barroso@exemplo.com",
```

Salve e recarregue a página. A partir daí:

- os botões de LinkedIn passam a abrir o perfil em uma nova aba;
- os botões de e-mail abrem o programa de e-mail já com o endereço;
- o e-mail passa a aparecer escrito na seção **Contato**.

**Enquanto os links não forem preenchidos**, os botões continuam visíveis e,
ao serem clicados, mostram um aviso educado dizendo que a informação ainda
será adicionada. Nada quebra e nenhum link falso é exibido.

> ⚠️ Mantenha as vírgulas e as aspas exatamente onde estão. Se apagar uma
> vírgula por engano, o site pode parar de trocar de idioma. Se acontecer,
> aperte `F12` no navegador, abra a aba **Console** e veja a linha do erro.

---

## 5. Como adicionar os currículos em PDF

1. Coloque os dois PDFs na pasta `assets/curriculos/`.
2. Renomeie exatamente para (minúsculas, sem acentos, sem espaços):
   - `curriculo-lais-barroso-pt.pdf`
   - `curriculo-lais-barroso-en.pdf`
3. No `script.js`, mude `resumesAvailable: false` para `resumesAvailable: true`.
4. Salve, recarregue o site e clique nos dois botões para conferir.
5. Apague os arquivos `ADICIONAR-CURRICULO-*.txt` (já não são necessários).

---

## 6. Como editar os textos

**Todos os textos visíveis do site ficam no `script.js`**, na seção
"02. TRADUÇÕES PT / EN". O `index.html` guarda a estrutura; o texto vem
das traduções.

Cada trecho do site tem uma "chave". Exemplo:

```javascript
"goal.title": "Objetivo profissional",
```

Para mudar o título dessa seção, troque o texto do lado direito:

```javascript
"goal.title": "Meu próximo passo",
```

**Sempre edite a mesma chave nos dois blocos**: primeiro no bloco `pt:`,
depois no bloco `en:`. Se esquecer o inglês, o site mostra a versão em
português como reserva — não quebra, mas fica inconsistente.

### Como achar a chave de um texto

1. Abra o site no navegador.
2. Clique com o botão direito sobre o texto → **Inspecionar**.
3. Procure o atributo `data-i18n="..."` — o que está entre aspas é a chave.
4. Procure essa mesma chave no `script.js` com `Ctrl + F`.

---

## 7. Como editar as traduções

O site inteiro existe em duas versões, guardadas lado a lado no `script.js`:

```javascript
var translations = {
  pt: {
    "nav.about": "Sobre",
    ...
  },
  en: {
    "nav.about": "About",
    ...
  }
};
```

Regras práticas:

- **Toda chave que existe em `pt` precisa existir em `en`** (e vice-versa).
- Não traduza ao pé da letra. O texto em inglês foi escrito para soar
  natural para recrutadores internacionais, não como tradução literal.
- Nomes de instituições ficam como estão: `Fundação Getulio Vargas — FGV`.
- Para trocar o idioma que abre por padrão, mude no `script.js`:
  `var DEFAULT_LANG = "pt";`

O idioma escolhido pela pessoa fica salvo no navegador (`localStorage`),
então quem visita em inglês continua em inglês na próxima visita.

---

## 8. Como atualizar os cases

Os três cases seguem uma estrutura fixa e já têm textos profissionais
escritos. O que falta são as informações e os números reais, marcados com
chaves terminadas em `Ph`.

| Case | Chaves no `script.js` |
|---|---|
| 1 — Estruturação operacional | `cases.1.contextPh`, `cases.1.problemPh`, `cases.1.toolsPh`, `cases.1.resultPh`, `cases.1.metricPh` |
| 2 — Posicionamento e crescimento do COI | `cases.2.contextPh`, `cases.2.objectivePh`, `cases.2.strategyPh`, `cases.2.channelsPh`, `cases.2.productsPh`, `cases.2.resultPh`, `cases.2.learningPh` |
| 3 — Automações e IA | `cases.3.previousPh`, `cases.3.problemPh`, `cases.3.solutionPh`, `cases.3.toolsPh`, `cases.3.timePh`, `cases.3.impactPh`, `cases.3.learningPh` |

**Exemplo.** Antes:

```javascript
"cases.1.toolsPh": "[ADICIONAR FERRAMENTAS UTILIZADAS]",
```

Depois (versão `pt`):

```javascript
"cases.1.toolsPh": "Google Sheets, Google Apps Script e Notion.",
```

E a mesma chave no bloco `en`:

```javascript
"cases.1.toolsPh": "Google Sheets, Google Apps Script and Notion.",
```

### Como tirar a aparência de "campo pendente"

Enquanto o texto está entre colchetes, ele aparece na caixinha vinho
tracejada. Depois de preencher com informação real, remova o destaque:
no `index.html`, ache aquela linha e troque

```html
<p class="placeholder-box" data-i18n="cases.1.toolsPh">
```

por

```html
<p data-i18n="cases.1.toolsPh">
```

### Como adicionar um projeto na seção "Projetos"

No `index.html`, ache a seção `id="projetos"`. No fim da lista de cartões há
um bloco comentado, pronto para copiar — basta remover as marcas `<!--` e
`-->` e preencher. Diferente do resto do site, você pode escrever o texto
direto no HTML (sem `data-i18n`) se não quiser criar a versão em inglês.

### Como adicionar um quarto case

No `index.html`, copie um bloco inteiro `<article class="case-card"> ... </article>`,
cole logo abaixo, troque `case-3-title` por `case-4-title` e troque todas as
chaves `cases.3.` por `cases.4.`. Depois crie essas chaves nos dois blocos de
tradução do `script.js`.

---

## 9. Como alterar as cores

Abra o **`styles.css`**. Tudo está no começo do arquivo, no bloco `:root`:

```css
:root {
  /* PERSONALIZAÇÃO: cor principal do site (vinho profundo). */
  --wine:        #5E1A2E;   /* cor de destaque: botões, títulos, links */
  --wine-dark:   #45111F;   /* versão mais escura, usada ao passar o mouse */
  --wine-soft:   #F4EBED;   /* fundo bem claro das caixinhas de destaque */

  --bg:          #FCFBFA;   /* fundo geral */
  --bg-alt:      #F5F2EF;   /* fundo das seções alternadas */
  --surface:     #FFFFFF;   /* fundo dos cartões */
  --border:      #E4DEDA;   /* linhas e bordas */

  --text:        #1B1719;   /* texto principal */
  --text-muted:  #5F5754;   /* texto secundário */
}
```

Mudando `--wine` você muda o destaque do site inteiro de uma vez.

Se trocar a cor principal, atualize também dois outros lugares:

1. `index.html` → `<meta name="theme-color" content="#5E1A2E">`
2. `assets/favicon/favicon.svg` → `fill="#5E1A2E"` (e gere o `.ico` de novo,
   ver [seção 11](#11-como-gerar-o-favicon-ico))

> **Cuidado com o contraste.** Se escolher uma cor mais clara, o texto branco
> em cima dela pode ficar difícil de ler. Confira em
> <https://webaim.org/resources/contrastchecker/> — a relação precisa ser de
> pelo menos **4,5:1**.

---

## 10. Como adicionar uma foto profissional

O passo a passo completo está em **`assets/imagens/README.md`**.

Resumo: salve a foto quadrada na pasta `assets/imagens/`, cole a tag `<img>`
indicada no Hero do `index.html` e cole o estilo `.hero-photo` no final do
`styles.css`.

---

## 11. Como gerar o favicon `.ico`

O favicon principal é o **`favicon.svg`** — é ele que os navegadores modernos
usam, e ele já está pronto e configurado. O `favicon.ico` serve apenas como
reserva para navegadores antigos, e também já vem incluído.

Se você mudar a cor ou as iniciais e quiser gerar um `.ico` novo:

**Opção A — site (mais simples)**
Acesse <https://realfavicongenerator.net/> ou <https://favicon.io/>,
envie o `favicon.svg`, baixe o resultado e substitua o `favicon.ico`
dentro de `assets/favicon/`.

**Opção B — sem sair do computador**
Abra o `favicon.svg` no navegador, tire um print quadrado, salve como PNG
de 32 × 32 pixels e converta em <https://convertio.co/pt/png-ico/>.

O nome do arquivo precisa continuar sendo exatamente `favicon.ico`.

---

## 12. Como testar antes de publicar

Percorra esta lista com o site aberto no navegador:

**Conteúdo**
- [ ] Nenhuma caixinha vinho `[ADICIONAR ...]` sobrou nas partes que já
      deveriam estar preenchidas
- [ ] Datas de experiência e formação preenchidas
- [ ] Nenhum número ou resultado que não seja real

**Idiomas**
- [ ] Clicar em **EN** troca *todos* os textos, sem recarregar a página
- [ ] Clicar em **PT** volta tudo ao normal
- [ ] Fechar e reabrir o navegador mantém o último idioma escolhido
- [ ] Nenhum texto ficou em português dentro da versão em inglês

**Botões e links**
- [ ] "Ver cases" e "Entrar em contato" rolam para a seção certa
- [ ] LinkedIn abre em uma aba nova
- [ ] "Enviar e-mail" abre o programa de e-mail
- [ ] Os dois botões de currículo baixam o PDF certo (ou mostram o aviso)

**Celular** — aperte `F12`, clique no ícone de celular (`Ctrl + Shift + M`)
e teste em pelo menos três larguras: 320px, 390px e 768px.
- [ ] O menu de três traços abre e fecha
- [ ] Clicar em um item do menu fecha o menu e vai para a seção
- [ ] O seletor PT/EN continua clicável
- [ ] Nenhum texto vaza para fora da tela e nada rola para o lado

**Erros**
- [ ] Aperte `F12` → aba **Console**. Não pode haver nenhuma linha vermelha.

**Teclado e acessibilidade**
- [ ] Aperte `Tab` várias vezes: aparece um contorno vinho em cada elemento
- [ ] O primeiro `Tab` na página revela o atalho "Pular para o conteúdo principal"

---

## 13. Como publicar no GitHub Pages

O repositório já está criado e enviado. Para ligar (ou reconferir) a
publicação:

1. Acesse o repositório no GitHub.
2. Clique em **Settings** (Configurações).
3. No menu da esquerda, clique em **Pages**.
4. Em **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
6. Espere de 1 a 3 minutos e recarregue a página. O endereço do site aparece
   no topo, no formato:

   ```
   https://SEU-USUARIO.github.io/lais-barroso-portfolio/
   ```

7. A URL já está preenchida no `index.html` (`canonical` e `og:url`).
   Só precisa mexer nela se um dia você usar um domínio próprio.

Pelo terminal, o mesmo resultado sai com:

```bash
gh api -X POST repos/SEU-USUARIO/lais-barroso-portfolio/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

---

## 14. Como atualizar o site depois de publicado

Sempre que editar qualquer arquivo:

```bash
cd caminho/para/lais-barroso-portfolio
git add .
git commit -m "descreva em poucas palavras o que mudou"
git push
```

O GitHub Pages republica sozinho em 1 a 3 minutos.

> Se o site não mudar na hora, aperte `Ctrl + F5` para forçar o navegador a
> baixar a versão nova em vez de usar a que ele guardou.

Preferindo não usar o terminal: no GitHub, abra o arquivo, clique no lápis
(**Edit this file**), edite, role até o fim e clique em **Commit changes**.

---

## 15. Como usar um domínio próprio no futuro

Se um dia registrar um domínio (por exemplo `laisbarroso.com`):

1. No painel de quem vendeu o domínio, crie os registros DNS:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `SEU-USUARIO.github.io` |

2. No GitHub: **Settings → Pages → Custom domain**, digite o domínio e
   salve. Isso cria automaticamente um arquivo `CNAME` no repositório.

3. Espere o DNS propagar (de alguns minutos a 24 horas) e marque
   **Enforce HTTPS**.

4. Atualize `PREENCHER_URL_DO_SITE` no `index.html` para o novo endereço.

---

## Tecnologia

HTML semântico, CSS puro e JavaScript sem bibliotecas.
Sem React, Vue, Tailwind, Bootstrap, build ou dependências externas.
Nenhuma requisição a servidores de terceiros — nem fontes externas.

Acessibilidade: estrutura semântica, hierarquia correta de títulos,
link para pular ao conteúdo, foco visível, navegação por teclado,
`aria-label` onde necessário e respeito a `prefers-reduced-motion`.
