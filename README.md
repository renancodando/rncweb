# RNCWeb · Demonstrações Mi Tech Jaú

Duas propostas de **site institucional** para apresentação à Mi Tech Jaú, totalmente em HTML, CSS e JavaScript, sem login, banco de dados, serviços pagos ou dependências de outros repositórios.

**Site publicado:** https://rncweb-mitech-demonstracoes.vercel.app/

**Abrir uma versão diretamente:**
- Tradicional: https://rncweb-mitech-demonstracoes.vercel.app/?demo=1
- CSCell adaptado: https://rncweb-mitech-demonstracoes.vercel.app/?demo=2

## Organização

| Arquivo | Função |
| --- | --- |
| `index.html` | Escolha das demonstrações e estrutura da proposta tradicional |
| `styles.css` | Estilos da página inicial e do Demonstrativo 1 |
| `app.js` | Alternador, links próprios e mensagens do WhatsApp da versão 1 |
| `demo2.html` | Demonstrativo 2, derivado do layout CSCell |
| `demo2-cscell.css` | Estilos, animações, celular e órbitas em CSS |
| `demo2-cscell.js` | Menus, modais, serviços, formulário e mapa do Demonstrativo 2 |

O modelo 2 foi recriado **usando a estrutura e as interações do código CSCell que já está no repositório `renancodando/sonotechcell`**, mas sem dependência de imagens externas ou do outro repositório. O smartphone do hero é construído apenas com CSS. Os dois projetos funcionam na mesma página, com o botão de alternar sempre disponível.

## Funcionamento

- Menu responsivo em ambos os modelos.
- Botões de atendimento, assistência e serviços; modais e formulário.
- A navegação para WhatsApp é voluntária e abre uma conversa preenchida, sem envio automático.
- Botão copiar link da versão e URLs com `?demo=1` e `?demo=2`.
- Mapa por busca do nome da loja em Jaú; endereço exato ainda não confirmado.
- Nenhuma opinião de cliente, quantidade de avaliações, garantia ou horário foi inventado.

## Dados que devem ser confirmados com a loja

O telefone da demonstração **(14) 99194-8943** foi identificado na página da [Mi Tech Atacado](https://mitechatacado.loja.click/pagina/quem-somos). A Mi Tech Atacado atua em peças para manutenção de celulares, mas não foi possível confirmar que seu WhatsApp atende a **Mi Tech Celular de Jaú**. Validar com a empresa **antes de mandar a página como site oficial**. Até a confirmação, o texto informa a origem do contato nas partes pertinentes.

Também será necessário confirmar endereço preciso, horários, lista de serviços, política de garantia, identidade visual/logotipo oficial e redes sociais.

Para atualizar o WhatsApp, substituir `PHONE_NUMBER` em `app.js` e `business.whatsapp`/`business.phone` em `demo2-cscell.js`, além dos números visíveis em `index.html` e `demo2.html`.

## Deploy

A publicação atual foi realizada pela API da **Vercel** com todos os arquivos do projeto. A URL acima é pública, mas **a sincronização automática GitHub → Vercel ainda não está ativa**: a conta Vercel não possui a conexão de login GitHub exigida para vincular o repositório. Novos commits não entram automaticamente no ar até configurar essa conexão.

Para hospedagem no **Cloudflare Pages**, faça a integração do repositório GitHub com framework `None`, sem comando de build, publicando os arquivos da raiz do projeto.

Projeto conceitual da **RNCWeb** para apresentação.
