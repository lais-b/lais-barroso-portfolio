# Pasta de imagens

Esta pasta guarda as imagens do site. Hoje ela está vazia de propósito:
o site foi construído **sem fotos de banco de imagens e sem ilustrações
genéricas**, o que mantém a apresentação sóbria e profissional.

Duas imagens fazem sentido serem adicionadas no futuro.

---

## 1. Foto profissional (opcional)

Se quiser incluir uma foto no topo do site:

1. Salve a foto nesta pasta com o nome `lais-barroso.jpg`
   (formato quadrado, no mínimo 600 × 600 pixels, fundo neutro).

2. No arquivo `index.html`, dentro da seção do Hero, logo **antes**
   da linha `<p class="eyebrow ...`, cole:

   ```html
   <img class="hero-photo"
        src="assets/imagens/lais-barroso.jpg"
        alt="Retrato de Laís Barroso"
        width="120" height="120">
   ```

   > O `alt` é o texto alternativo lido por leitores de tela.
   > Ele é obrigatório — não deixe vazio.

3. No arquivo `styles.css`, no final, cole:

   ```css
   .hero-photo {
     width: 120px;
     height: 120px;
     border-radius: 50%;
     object-fit: cover;
     margin-bottom: 24px;
     border: 1px solid var(--border);
   }
   ```

---

## 2. Imagem de compartilhamento (recomendada)

É a imagem que aparece quando o link do site é colado no LinkedIn ou
enviado no WhatsApp.

1. Crie uma imagem de **1200 × 630 pixels**. Uma versão simples e elegante:
   fundo claro, o nome "Laís Barroso" e a linha
   "Marketing Operations, Growth & Business Operations", com um detalhe
   na cor vinho `#5E1A2E`.

2. Salve nesta pasta com o nome `og-image.png`.

3. No arquivo `index.html`, no topo, troque os dois trechos
   `PREENCHER_URL_IMAGEM_COMPARTILHAMENTO` pelo endereço completo da
   imagem já publicada, por exemplo:

   ```
   https://SEU-USUARIO.github.io/lais-barroso-portfolio/assets/imagens/og-image.png
   ```

   > Redes sociais exigem o endereço completo (começando com `https://`).
   > Um caminho relativo como `assets/imagens/og-image.png` não funciona aqui.

4. Depois de publicar, teste o link em
   <https://www.linkedin.com/post-inspector/> para o LinkedIn atualizar
   a pré-visualização.

---

## Formatos e tamanho

- Prefira `.jpg` para fotos e `.png` para imagens com texto.
- Deixe cada arquivo abaixo de ~300 KB, para o site continuar rápido.
