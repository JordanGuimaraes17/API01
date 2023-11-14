# API01
README - Código Node.js com Knex e Express
Este README fornece uma visão geral do código Node.js que utiliza o Knex como um construtor de consultas e 
o Express como um servidor web para criar um aplicativo de gerenciamento de filmes com marcação de usuários e tags.

Estrutura do Projeto
O projeto é organizado da seguinte maneira:

src - Diretório raiz do código-fonte do aplicativo.
database - Diretório que contém o banco de dados SQLite3 e as migrações.
database.db - Banco de dados SQLite3.
knex - Diretório que contém as migrações do Knex.
routes - Diretório que contém os arquivos de rota.
utils - Diretório com utilitários.
app.js - O ponto de entrada do aplicativo Express.
server.js - O arquivo principal que inicia o servidor.
Configuração do Banco de Dados
O aplicativo utiliza o banco de dados SQLite3. A configuração do banco de dados é definida no arquivo knexfile.js. 
Ele especifica que o aplicativo está no ambiente de desenvolvimento e define a conexão com o banco de dados, as migrações e outras configurações relacionadas ao Knex.

Migrações
As migrações do banco de dados são controladas pelo Knex e estão localizadas na pasta knex/migrations. 
As migrações são usadas para criar e modificar a estrutura do banco de dados à medida que o aplicativo evolui.

Configuração do Express
O arquivo app.js cria uma instância do aplicativo Express e configura o middleware necessário. Ele também lida com erros assíncronos usando o pacote express-async-errors.

O aplicativo utiliza três conjuntos de rotas, que são importados do diretório routes e montados no aplicativo:

/users - Rotas relacionadas aos usuários.
/movie - Rotas relacionadas aos filmes e notas.
/tags - Rotas relacionadas às tags associadas aos filmes.
Tratamento de Erros
O aplicativo lida com erros usando um middleware personalizado. Se um erro for do tipo AppError, ele retornará uma resposta JSON com o status e a mensagem de erro apropriados. Caso contrário, ele retornará um erro interno do servidor com status 500.

Iniciando o Servidor
O servidor é iniciado no arquivo server.js. Ele ouve a porta 3333 e exibe uma mensagem no console quando o servidor está em execução.

Requisitos
Para executar o aplicativo, você precisará ter o Node.js instalado em sua máquina.

Executando o Aplicativo
Certifique-se de que as dependências estejam instaladas. Execute npm install no diretório raiz do projeto.

Execute as migrações para configurar o banco de dados. Use npx knex migrate:latest no terminal.

Inicie o aplicativo com o comando npm start.

O servidor estará disponível em http://localhost:3333.
