# RNCWeb — Gtechservice | 4 demonstrativos

Vitrine com **quatro propostas de site institucional**, todas preenchidas com informações da **Gtechservice — Assistência Técnica de Informática e Celulares**, em Maceió (AL).

**Link único:** https://rncweb-mitech-demonstracoes.vercel.app/

**Links por modelo:**
1. Tradicional: https://rncweb-mitech-demonstracoes.vercel.app/?demo=1
2. Visual original do CSCell: https://rncweb-mitech-demonstracoes.vercel.app/?demo=2
3. Esqueleto: https://rncweb-mitech-demonstracoes.vercel.app/?demo=3
4. Técnica Alpha / bancada 3D: https://rncweb-mitech-demonstracoes.vercel.app/?demo=4

## Modelos

| Modelo | Estrutura e recursos |
| --- | --- |
| 1 — Tradicional | Institucional claro/azul, serviços, seção sobre a empresa, mapa, horários, CTA e formulário que prepara a mensagem no WhatsApp |
| 2 — CSCell | O layout original do repositório `renancodando/sonotechcell`, com paleta preta/vermelha, identidade Gtechservice, cards, modais de serviços, mapa e formulário |
| 3 — Esqueleto | Importado de `renancodando/esqueleto`. Mantém a identidade clara, grade de toque no hero, testes opcionais de pixels/som/vibração/bateria, seleção de defeitos e orçamento |
| 4 — Técnica Alpha | Importado de `renancodando/tecnica`, a origem de `tecnica-alpha.vercel.app`. Mantém Three.js, bancada e smartphone 3D, rolagem por etapas, formulário de orçamento e cena interativa. Compilado com Vite |

**Todos os quatro modelos aparecem dentro do mesmo seletor**, com alternância superior, acessíveis pelos parâmetros `?demo=1` até `?demo=4`. Os modelos 3 e 4 são carregados somente quando selecionados.

## Dados usados nos modelos

- Empresa: Gtechservice — Assistência Técnica de Informática e Celulares
- Endereço: Rua Agerson Dantas, 66, Centro, Maceió/AL, CEP 57020-310
- Telefone/WhatsApp público: (82) 98737-2264
- Horários divulgados: segunda a sexta, 08h às 18h; sábado, 08h às 14h; domingo fechado
- Atividades divulgadas: troca de telas e baterias, manutenção de placas e conectores, reparos de celulares, assistência de computadores e notebooks, venda de celulares novos/seminovos e acessórios, ponto parceiro para encomendas Mercado Livre
- Instagram mencionado publicamente: @gtechservicemcz

Referências de informações públicas (verificar antes do uso comercial):
- https://consertabrasil.com/conserto-de-celulares/maceio/gtechservice-assistencia-tecnica-de-informatica-e-celulares/
- https://paginaamarela.com.br/empresa/gtechservice-assistencia-tecnica-de-informatica-e-celulares/maceio/al/13364501
- https://meusenvios.com.br/pontos/gtechservice

**Importante:** preços, disponibilidade de peças, prazos de conserto, condições de garantia e depoimentos não foram inventados. Onde os projetos originais exibiam preços/tempos fictícios, foram substituídos por informações sob consulta. São protótipos comerciais da RNCWeb, não o site oficial da empresa.

## Estrutura de arquivos

```text
index.html                 # página inicial + demonstrativo 1 + alternador
styles.css                 # estilos do seletor e demo 1
app.js                     # rotas por ?demo= e contato da demo 1
demo2.html                 # clone do layout CSCell para Gtechservice
demo2-cscell.css           # visual e animações CSCell preservados
demo2-cscell.js            # serviços, modais, mapa, WhatsApp
demo3.html                 # projeto Esqueleto adaptado
demo3.css                  # CSS Esqueleto e fonte local embutida
demo3.js                   # testes opcionais, orçamento e WhatsApp
demo4/index.html           # projeto Técnica Alpha adaptado
demo4/src/                 # cena Three.js e interface originais
package.json               # dependências somente do demo 4
scripts/build.mjs          # compila demo 4 e copia os outros três para dist/
```

## Compilar localmente

Requer **Node 22+**.

```bash
npm install
npm run build
```

O resultado fica na pasta `dist/`: `dist/index.html`, `dist/demo2.html`, `dist/demo3.html`, `dist/demo4/index.html` e seus respectivos recursos.

Para servir localmente após o build:

```bash
npx serve dist
```

### Vercel

O deploy atual da Vercel usa:
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: `dist`
- Node: 22.x
- Projeto: `rncweb-mitech-demonstracoes` (nome histórico mantido para preservar o link)

A conta Vercel ainda não possui a conexão GitHub configurada para esse repositório; então **novos commits não são publicados automaticamente**. O deploy atual foi criado diretamente pela API a partir dos arquivos do repositório.

### Observações

O modelo 2 mantém a ilustração original de celular do repositório `sonotechcell`, carregada via URL pública do GitHub. O restante de seus estilos e scripts está presente neste repositório. Os modelos 1 e 3 não usam fotos; no modelo 4, o celular é renderizado em Three.js.

Desenvolvido pela **RNCWeb**, para apresentação de propostas à Gtechservice.
