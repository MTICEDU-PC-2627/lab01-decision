# Classificação e construção de regras

**Laboratório de pensamento computacional — Guião dos alunos**

Pensamento Computacional · Mestrado em TIC em Educação  
Escola Superior de Educação · ESE-UNIPVC  
**v1.0 · 9 de novembro de 2026**

## 1. Enquadramento e objetivos

### Enquadramento

Como podemos transformar uma forma intuitiva de resolver um problema num procedimento que outra pessoa consiga compreender, executar e avaliar? Como sabemos se esse procedimento funciona apenas nos exemplos que conhecemos ou também em situações diferentes?

Estas questões estão no centro do **pensamento computacional**: uma abordagem à resolução de problemas que envolve formular o problema com clareza, organizar e representar informação, construir procedimentos explícitos e avaliar os resultados obtidos.

O pensamento computacional não exige necessariamente programação ou utilização de um computador. Pode ser desenvolvido através de atividades de observação, organização, comparação, tomada de decisão e revisão de procedimentos. A programação é uma das formas de concretizar essas soluções e automatizar a sua execução.

Para os professores, esta abordagem permite trabalhar tanto conteúdos disciplinares como formas de raciocinar: explicitar critérios, justificar escolhas, analisar erros e procurar soluções que possam ser utilizadas noutras situações.

### Conceitos fundamentais

Nesta atividade, terão oportunidade de explorar conceitos que se articulam ao longo da resolução de um problema:

- **Decomposição** — analisar um problema e organizá-lo em partes ou decisões mais simples, mantendo a relação entre essas partes e o objetivo global.
- **Reconhecimento de padrões** — identificar semelhanças, diferenças e regularidades entre situações. Os padrões ajudam a formular hipóteses, mas precisam de ser verificados: uma regularidade observada em poucos exemplos pode não se manter noutros.
- **Abstração** — selecionar a informação relevante para um determinado objetivo e deixar de lado detalhes que não são necessários. A relevância de uma característica depende do problema que se pretende resolver.
- **Pensamento algorítmico** — construir um procedimento composto por instruções e decisões claras, organizadas de modo a poderem ser seguidas por outra pessoa ou executadas por um sistema. Um algoritmo pode incluir caminhos diferentes, consoante as condições encontradas.
- **Avaliação e depuração** — testar uma solução, analisar os resultados e localizar dificuldades ou erros. Depurar significa procurar as suas causas e rever o procedimento, voltando depois a testá-lo.
- **Generalização** — analisar em que condições uma solução pode ser aplicada a outros casos. Implica reconhecer tanto aquilo que pode ser reutilizado como os limites da solução construída.

Estes conceitos não constituem uma sequência rígida. Ao resolver um problema, podemos regressar às escolhas iniciais, rever a informação considerada relevante ou reorganizar o procedimento.

### O que se pretende explorar

Neste laboratório, vão construir um sistema de classificação baseado em perguntas com respostas **Sim ou Não**. As perguntas e as decisões serão organizadas numa **árvore de decisão**, uma representação dos diferentes percursos que podem conduzir a uma conclusão.

As cartas de animais fornecem um contexto concreto para experimentar. O objetivo da atividade é compreender como se constroem regras explícitas, como essas regras orientam decisões e como se avalia o seu funcionamento.

Ao longo das diferentes etapas, vão:

- Observar exemplos e justificar os critérios escolhidos.
- Representar um procedimento que possa ser seguido por outras pessoas.
- Aplicar esse procedimento de forma consistente.
- Testar as regras perante exemplos diferentes dos inicialmente considerados.
- Analisar dificuldades e rever a solução com base nos resultados.
- Refletir sobre a clareza, a eficácia e a eficiência do procedimento.

A identificação entre equipas constitui uma dinâmica de experimentação. Os acertos, os erros e as situações em que não é possível decidir são evidências para analisar o raciocínio e os limites das regras construídas.

### Ligação à prática docente

Enquanto professores e estudantes do Mestrado em TIC em Educação, são convidados a participar em duas perspetivas: experimentar os processos de pensamento envolvidos e considerar o seu potencial pedagógico.

Durante a atividade, procurem reconhecer que decisões exigem justificação, que dificuldades tornam o raciocínio mais visível e que aprendizagens podem ser transferidas para outros contextos.

No final, deverão conseguir explicar os conceitos explorados e propor uma adaptação à vossa disciplina ou nível de ensino, identificando o que os vossos alunos poderiam aprender e como poderiam observar essa aprendizagem.

## 2. Organização e regras da atividade

### A dinâmica Quem sou eu

A atividade utiliza uma adaptação do jogo **Quem sou eu**: cada equipa procura identificar um animal que desconhece, colocando perguntas às quais as outras equipas respondem com **Sim** ou **Não**.

Neste laboratório, as perguntas são previamente organizadas numa árvore de decisão. Cada equipa constrói a sua própria árvore e utiliza-a durante o jogo, permitindo observar como as regras funcionam e identificar situações em que precisam de ser revistas.

### Constituição das equipas e organização dos testes

A turma organiza-se em **duas ou mais equipas, com um máximo de três elementos por equipa**. Os elementos de cada equipa trabalham em conjunto na observação das cartas, na escolha das características, na formulação das perguntas e na construção da árvore. As decisões devem ser discutidas e compreendidas por todos.

Os testes decorrem em **agrupamentos de duas ou três equipas**.

Em cada ronda, uma equipa procura identificar a sua carta seguindo as perguntas da árvore de decisão que construiu. As restantes equipas do agrupamento conhecem essa carta e respondem às perguntas.

**Todos os elementos das equipas que respondem participam na análise da pergunta e na construção de uma resposta comum**, comunicada como Sim ou Não. Se houver discordância, devem procurar esclarecer o significado da pergunta. Se a dúvida persistir, registem a dificuldade, sem forçar uma resposta.

Na equipa que procura identificar o animal, todos acompanham o percurso na árvore e participam no registo das respostas e das dificuldades. Um dos elementos pode comunicar as perguntas, alternando essa função entre rondas.

As equipas trocam de funções até que todas tenham realizado um teste com a sua própria árvore.

### Recursos e duração

- [Plataforma do laboratório](https://quem-sou-eu-lab-regras.flutteringwren1.chatgpt.site/), ou ficheiro HTML disponibilizado.
- Um dispositivo por equipa para construir e percorrer a árvore.
- Comunicação por voz ou mensagem entre as equipas.
- Um documento de registo partilhado pelos elementos da equipa.

**Duração de referência: cerca de 60 minutos**, numa versão focada, com leitura prévia do enquadramento e reflexões breves. Os agrupamentos de três equipas implicam mais testes sucessivos; poderá ser necessário prolongar a sessão ou concluir a síntese e os registos posteriormente. A duração será ajustada ao ritmo de trabalho.

### Exploração inicial e construção da árvore

Cada equipa começa por explorar as **12 cartas iniciais**. Observem os animais, discutam possíveis características e formulem perguntas que possam ajudar a identificá-los. Não consultem ainda as cartas reservadas para os testes seguintes.

Construam a árvore respeitando estas regras:

1. **Formular perguntas binárias.** Cada pergunta deve permitir uma resposta Sim ou Não, com um significado compreendido por todos.
2. **Utilizar características dos animais.** Nesta primeira construção, podem recorrer a características visuais, anatómicas, comportamentais ou de habitat. Não devem perguntar diretamente pelo nome do animal nem usar categorias como mamífero, ave, felino ou inseto.
3. **Separar as cartas manualmente.** Em **Explorar e separar**, escrevam a pergunta e distribuam todas as cartas por Sim e Não. Cliquem em **Registar separação**. Os dois ramos têm de conter cartas.
4. **Continuar a construção.** Entrem em cada ramo e repitam o processo quando necessário. Todas as separações são decisões da equipa; a plataforma não distribui as cartas automaticamente.
5. **Definir as decisões finais.** Quando considerarem que um percurso permite identificar o animal, escolham **Terminar com decisão** e guardem a decisão. Uma folha com uma única carta usa automaticamente o seu nome. Se ainda não conseguirem decidir, podem registar **Informação insuficiente**.
6. **Verificar e guardar.** Consultem **A nossa árvore** e guardem a versão inicial através de **Guardar trabalho**.

O objetivo é identificar o animal, independentemente da sua representação. Por exemplo, diferentes imagens de um cão devem conduzir à decisão **Cão**.

Podem observar as imagens e mobilizar conhecimentos comuns. Acordem o significado dos termos utilizados. Uma dúvida não deve ser transformada automaticamente num Não.

**Para responder e refletir**

1. O que torna uma pergunta suficientemente clara para ser utilizada por outra equipa?
2. Que razões justificam as características e as perguntas que escolheram?
3. Como vão garantir que todos os elementos compreendem e participam nas decisões do grupo?

### Preparação de um teste

1. A equipa que vai identificar o animal seleciona o conjunto de cartas indicado para a ronda.
2. Gera a sua carta e a respetiva chave, sem revelar a imagem.
3. Partilha a chave com a outra equipa ou com as duas outras equipas do agrupamento.
4. As equipas que respondem introduzem essa chave no painel do guardião e consultam a carta. A equipa que faz as perguntas mantém a carta oculta.

A chave permite consultar a carta, mas não transmite as respostas automaticamente. As perguntas e respostas são comunicadas por voz ou mensagem.

### Regras durante os testes

A equipa que procura identificar o animal deve começar na primeira pergunta da **sua própria árvore**, ler a pergunta às outras equipas, registar a resposta comum e seguir o ramo correspondente.

Durante cada teste, **não podem acrescentar perguntas, alterar regras ou saltar entre ramos**. Mesmo que suspeitem da identidade do animal, devem seguir o procedimento construído. Anunciem a decisão antes de revelar a carta.

As equipas que respondem devem responder de acordo com a carta e com o significado acordado para a pergunta, sem dar pistas adicionais ou revelar o nome do animal.

Se uma pergunta não puder ser respondida, registem o motivo e terminem esse teste sem decisão. A dificuldade será analisada depois. As regras apenas podem ser revistas entre testes, após o registo dos resultados.

## 3. Desenvolvimento das rondas e reflexão

Antes de iniciar os testes, cada equipa deve guardar a sua árvore de decisão. Nas rondas 1 a 3, as equipas alternam funções até que todas tenham utilizado a sua própria árvore para identificar uma carta.

### Ronda 1 — Testar com as cartas iniciais

**Objetivo**

Verificar se o procedimento construído pode ser seguido por outras pessoas e se permite identificar os animais utilizados na sua construção.

**Como proceder**

1. Selecionem o conjunto **12 cartas iniciais**.
2. A equipa que vai identificar o animal gera uma carta e partilha a chave com as restantes equipas do agrupamento, sem consultar a imagem.
3. Comecem na primeira pergunta da vossa árvore e sigam os ramos correspondentes às respostas recebidas.
4. Ao chegar a uma decisão, anunciem o nome do animal antes de revelar a carta.
5. Comparem a decisão com a carta e registem o resultado e o número de perguntas efetuadas.
6. Troquem de funções até que todas as equipas tenham realizado o teste.

Se não for possível responder a uma pergunta ou chegar a uma decisão, registem o ponto em que o procedimento deixou de permitir avançar.

**Para responder e refletir**

1. As perguntas foram compreendidas da mesma forma por todos? Identifiquem uma que tenha exigido esclarecimento, caso tenha acontecido.
2. Conseguiram seguir a árvore até ao fim sem improvisar? Se não, onde surgiu a dificuldade?
3. O que permite concluir este teste sobre a vossa árvore? O que ainda não permite concluir?

**Antes de avançar**

Discutam as dificuldades e, se necessário, corrijam a árvore. Registem o que alteraram e porquê. Guardem a versão que irão utilizar na ronda seguinte.

### Ronda 2 — Testar com variantes dos mesmos animais

**Objetivo**

Analisar se as regras continuam a funcionar quando a representação dos animais é diferente da utilizada na construção da árvore.

**Como proceder**

1. Selecionem o conjunto **12 variantes · mesmos animais**.
2. Repitam a dinâmica de identificação entre equipas, utilizando a árvore guardada no final da ronda anterior.
3. Mantenham as regras fixas durante o teste, mesmo que encontrem uma situação inesperada.
4. Anunciem a decisão antes de revelar a carta e registem o resultado.
5. Depois de todas as equipas terem participado, comparem os percursos e as dificuldades com os da primeira ronda.

As cartas representam animais já conhecidos, mas podem apresentar diferenças de cor, tamanho, pose, fundo ou estilo de ilustração. A decisão pretendida continua a ser o nome do animal.

**Para responder e refletir**

1. As regras funcionaram com as novas representações? Usem um exemplo do teste para justificar.
2. Alguma pergunta dependia de um detalhe da imagem inicial? Que consequência teve isso no percurso?
3. Que alteração propõem e como poderiam verificar se melhora o procedimento para além do exemplo que revelou a dificuldade?

**Antes de avançar**

Guardem a versão testada. Escolham uma regra para rever, se os resultados o justificarem, e expliquem a alteração.

Se houver tempo, façam um novo teste. Assinalem se utilizaram uma carta diferente ou repetiram uma carta já analisada: verificar uma correção num exemplo conhecido não demonstra, por si só, que a solução funciona em exemplos novos.

A área de construção continua a utilizar as 12 cartas iniciais. As variantes servem para testar e fundamentar a revisão das regras. Desfazer uma separação remove também os ramos que dela dependem; guardem a versão anterior antes de a alterar.

### Ronda 3 — Testar com animais novos

**Objetivo**

Explorar os limites do procedimento quando surgem casos que não foram considerados na construção inicial.

**Como proceder**

1. Selecionem **Segundo teste · 16 cartas de novos animais**.
2. Cada equipa realiza um teste com a sua árvore, mantendo as regras fixas.
3. Sigam o percurso até chegar a uma decisão ou encontrar uma dificuldade que impeça continuar.
4. Registem a saída obtida antes de revelar a carta.
5. Comparem a decisão com o animal apresentado e discutam o que aconteceu.

Distingam três situações no registo: o procedimento produziu uma identificação correta, produziu uma identificação incorreta ou não permitiu chegar a uma decisão.

**Para responder e refletir**

1. O que aconteceu quando a árvore recebeu um caso novo? Expliquem o percurso realizado.
2. Foi possível responder a todas as perguntas e, ainda assim, obter uma identificação incorreta? O que revela esse resultado?
3. Que alterações seriam necessárias para lidar com estes casos e que novos testes fariam para as avaliar?

**Antes de avançar**

Registem uma proposta de adaptação. Nesta fase, não precisam de reconstruir a árvore para incluir todos os animais novos.

### Ronda 4 — Analisar a eficiência do procedimento

**Objetivo**

Refletir sobre o esforço necessário para chegar a uma decisão e propor uma forma de o reduzir, mantendo a qualidade das identificações. Esta ronda é um momento de análise e proposta; a realização de novos testes depende do tempo disponível.

**Como proceder**

1. Voltem a considerar as **12 cartas iniciais**.
2. Consultem a árvore e os registos dos testes. Identifiquem percursos que exigem diferentes números de perguntas.
3. Proponham uma alteração que possa reduzir o número de perguntas necessárias para identificar os animais.
4. Expliquem como comparariam a versão atual com a versão proposta, utilizando as mesmas cartas.
5. Se houver tempo, experimentem a alteração e registem os resultados. Caso contrário, apresentem apenas a proposta e o plano de teste.

Distingam o número total de perguntas existentes na árvore do número de perguntas percorridas para identificar uma carta.

**Para responder e refletir**

1. Que estratégia propõem para reduzir o número de perguntas por identificação? Justifiquem sem se limitarem a um único animal.
2. A alteração beneficiaria todos os percursos ou apenas alguns? Como poderiam verificar?
3. Que evidências seriam necessárias para afirmar que uma árvore é mais eficiente do que outra?

## 4. Síntese e transferência para a prática docente

Cada equipa apresenta brevemente uma escolha que fez, uma dificuldade encontrada e uma revisão ou proposta de melhoria.

Guardem a árvore e os registos dos testes. Estes elementos devem permitir compreender como evoluiu o vosso raciocínio.

**Para responder e refletir**

1. Em que momentos mobilizaram decomposição, reconhecimento de padrões, abstração, pensamento algorítmico, avaliação ou generalização? Relacionem os conceitos com decisões concretas da equipa.
2. Como adaptariam a atividade à vossa disciplina e nível de ensino? Indiquem o conteúdo a trabalhar e o que os alunos deveriam aprender.
3. Que evidências procurariam para perceber se os alunos compreenderam o procedimento e conseguem justificar as suas escolhas?

## 5. Registo do trabalho da equipa

**Equipa:** …  
**Elementos:** …  
**Equipas do agrupamento:** …

### Registo dos testes

Preencham uma linha por teste. Acrescentem linhas sempre que repetirem uma experiência. Podem consultar o diário da plataforma em **Refletir** e complementar a informação neste registo.

| Ronda e conjunto | Versão da árvore | N.º de perguntas | Decisão obtida | Animal da carta | Resultado | Dificuldade ou observação |
| --- | --- | --- | --- | --- | --- | --- |
| 1 · Cartas iniciais | | | | | | |
| 2 · Variantes | | | | | | |
| 3 · Animais novos | | | | | | |

Resultados possíveis: **identificação correta**, **identificação incorreta** ou **sem decisão**. Nas observações, indiquem também se a carta já tinha sido utilizada num teste anterior.

### Registo das revisões

- **Versão anterior e nova versão:** …
- **Dificuldade que motivou a revisão:** …
- **Regra ou decisão alterada:** …
- **Justificação da alteração:** …
- **Como foi ou será testada:** …

### Elementos a reunir no final

- [ ] Árvore de decisão guardada e versões relevantes conservadas.
- [ ] Registo de, pelo menos, um teste por equipa em cada uma das rondas 1 a 3.
- [ ] Respostas breves às perguntas de reflexão, sustentadas nos testes.
- [ ] Um exemplo que tenha posto as regras à prova e a respetiva análise.
- [ ] Uma proposta de melhoria da eficiência e uma forma de a testar.
- [ ] Uma proposta de adaptação à prática docente.

---

© 2026 Pedro Miguel Moreira · ESTG-UNIPVC  
Conceção e orientação pedagógica: Pedro Miguel Moreira.  
Elaboração do guião com apoio do ChatGPT (OpenAI).

