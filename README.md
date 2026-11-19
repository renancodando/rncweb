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

O **Demonstrativo 2 mantém o HTML, CSS, animações, estrutura, ícones, modais e apresentação original do projeto CSCell** do repositório `renancodando/sonotechcell`; os textos e dados empresariais foram alterados para a Mi Tech Celular de Jaú. A paleta original vermelha, o desenho do telefone e os efeitos originais foram mantidos. A névoa SVG foi copiada para este repositório e a imagem original do smartphone é carregada do repositório CSCell, até que ela possa ser armazenada também no RNCWeb. Os dois projetos funcionam na mesma página, com o botão de alternar sempre disponível.

## Funcionamento

- Menu responsivo em ambos os modelos.
- Botões de atendimento, assistência e serviços; modais e formulário.
- A navegação para WhatsApp é voluntária e abre uma conversa preenchida, sem envio automático.
- Botão copiar link da versão e URLs com `?demo=1` e `?demo=2`.
- Mapa por busca do nome da loja em Jaú; endereço exato ainda não confirmado.
- Nenhuma opinião de cliente, quantidade de avaliações, garantia ou horário foi inventado.

## Dados que devem ser confirmados com a loja

A unidade exibida no Demonstrativo 2 é a **Mi Tech Celular — Loja 1**. Endereço: Rua Lourenço Prado, 364, Centro, Jaú/SP. Telefone público: **(14) 99890-1897**. Horários divulgados: segunda a sexta, 08h–18h; sábado, 08h–17h. Confira com a empresa antes da publicação definitiva.

Também será necessário confirmar endereço preciso, horários, lista de serviços, política de garantia, identidade visual/logotipo oficial e redes sociais.

Para atualizar o WhatsApp, substituir `PHONE_NUMBER` em `app.js` e `business.whatsapp`/`business.phone` em `demo2-cscell.js`, além dos números visíveis em `index.html` e `demo2.html`.

## Deploy

A publicação atual foi realizada pela API da **Vercel** com todos os arquivos do projeto. A URL acima é pública, mas **a sincronização automática GitHub → Vercel ainda não está ativa**: a conta Vercel não possui a conexão de login GitHub exigida para vincular o repositório. Novos commits não entram automaticamente no ar até configurar essa conexão.

Para hospedagem no **Cloudflare Pages**, faça a integração do repositório GitHub com framework `None`, sem comando de build, publicando os arquivos da raiz do projeto.

Projeto conceitual da **RNCWeb** para apresentação.
