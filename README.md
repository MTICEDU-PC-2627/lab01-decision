# Classificação e construção de regras

Laboratório de pensamento computacional — Mestrado em TIC em Educação, ESE-UNIPVC.

Aplicação estática com 40 cartas e construção manual de árvores de decisão. Inclui a dinâmica Quem sou eu, chaves de partilha de cartas e exportação/importação do trabalho. Não necessita de API, base de dados ou serviços ChatGPT.

## Publicar em GitHub Pages

1. Criar o repositório `decision` na organização `MTICEDU-PC-2627` (público se for usado GitHub Free).
2. Carregar o conteúdo desta pasta na raiz do repositório. O ficheiro `index.html` deve ficar na raiz, não dentro de outra pasta.
3. Em Settings → Pages, escolher Deploy from a branch, branch `main`, pasta `/ (root)`, e guardar.
4. Após a publicação, abrir https://mticedu-pc-2627.github.io/decision/ .

Este endereço é o destino previsto; a exportação não cria o repositório nem ativa o Pages.

## Editar e testar

A versão exportada preserva a aplicação existente. HTML, CSS, JavaScript, ilustrações e logótipo estão reunidos em `index.html`. Editar esse ficheiro num editor de código. Não é necessário executar um build.

Para experimentar localmente, executar `python3 -m http.server 8000` nesta pasta e abrir http://localhost:8000 . Para os testes automáticos, com Node.js instalado, executar `node check.cjs`.

Enviar as alterações para `main` atualiza a publicação configurada no Pages.

## Trabalho das equipas

Os dados são guardados no navegador, por origem. Antes de mudar do endereço anterior para o GitHub Pages, exportar através de Guardar trabalho e importar no novo endereço. Não existe sincronização automática entre dispositivos. As chaves permitem consultar a carta; as respostas são comunicadas por voz ou mensagem. As chaves são uma forma de ocultação para a atividade, não uma proteção criptográfica contra inspeção do código.

## Guião

Atividade #PC01 V1.0. O guião está integrado na aplicação e disponível em PDF. O ficheiro Markdown incluído permite editar o texto original.

A aplicação permite exportar a árvore e os resultados dos testes em PNG/SVG e as respostas de reflexão em TXT.

## Créditos

© 2026 Pedro Miguel Moreira · ESTG-UNIPVC.
Conceção e orientação pedagógica: Pedro Miguel Moreira.
Desenvolvimento com apoio do ChatGPT (OpenAI).
O logótipo institucional mantém a sua identificação. Não foi adicionada uma licença de redistribuição ao projeto.
# lab01-decision
