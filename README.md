# RNCWeb · Apresentação Mi Tech Jaú

Dois modelos **institucionais** de site, sem fotografias, login, banco de dados, loja virtual nem dependências externas.

- **Página inicial:** escolha entre os dois modelos.
- **Demonstrativo 1:** visual tradicional, claro e azul; serviços, contato, apresentação da loja, mapa e avaliações.
- **Demonstrativo 2:** visual escuro e laranja inspirado no mockup enviado, com ilustração de celular inteiramente em CSS, atalhos de serviços e painéis institucionais.
- **Alternador superior:** troca as demonstrações sem sair do site.
- **Copiar link:** compartilha o modelo específico, por meio de `?demo=1` ou `?demo=2`.
- **Contato:** formulário de assunto que abre uma mensagem pré-formatada no WhatsApp, por decisão do visitante.

## Testar localmente

Abra `index.html` no navegador. A estrutura é inteiramente estática: `index.html`, `styles.css` e `app.js`.

Para hospedar no **Cloudflare Pages**, conecte este repositório, selecione a branch `main`, escolha *Framework preset: None*, deixe o *Build command* vazio e configure o *Build output directory* como `/` (diretório raiz).

Em alguns painéis do Cloudflare, o campo de saída aceita `.` em vez de `/`; ambos indicam os arquivos na raiz da publicação, conforme a configuração da plataforma.

## Contatos, reputação e informações comerciais

**Atenção:** estas são propostas demonstrativas, não o site oficial da empresa. A razão social exata, os horários, o endereço, as avaliações, o número do WhatsApp e os serviços efetivamente prestados devem ser validados com a Mi Tech Jaú antes de a demonstração ser apresentada como site oficial.

O telefone `(14) 99194-8943` é exibido publicamente no site da [Mi Tech Atacado](https://mitechatacado.loja.click/pagina/quem-somos). Como o escopo exato da Mi Tech Atacado e da loja chamada Mi Tech Jaú pode diferir, **confirmar o canal apropriado de assistência e varejo** com a empresa. Para alterar o destino de todas as mensagens, edite a constante `PHONE_NUMBER` no começo de `app.js` e os textos de contato do `index.html`.

Nenhuma nota, quantidade de avaliações, depoimento ou horário foi inventado. O link do Google Maps usa a **pesquisa pelo nome da empresa em Jaú**, sem fixar um endereço não confirmado. Este projeto não vende aparelhos nem afirma disponibilidade de estoque.

## Próxima etapa

Depois da aprovação, substituir os conteúdos de exemplo pelos dados oficiais e publicar em um domínio personalizado. A tecnologia foi mantida simples (HTML, CSS e JavaScript), sem necessidade de backend ou cobrança de serviços de terceiros para o funcionamento básico.

Desenvolvido pela **RNCWeb**.
