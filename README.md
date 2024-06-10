# API de Lista de Tarefas
**Esta é uma API simples para gerenciar uma lista de tarefas. Ele permite criar, listar, atualizar e excluir tarefas.**

### Configuração
**Siga estas etapas para configurar e executar a API em seu ambiente local:**
**Pré-requisitos**
<ul>
 <li>Node.js instalado (v14.x ou superior)</li>
 <li>PostgreSQL instalado e em execução</li>
 <li>Um banco de dados PostgreSQL criado para a aplicação</li>
</ul>

### Instalação
**Clone este repositório em sua máquina local:**

```
https://github.com/rubens-correa/api-tasks.git
```

**Navegue até o diretório do projeto:**

```
cd api-tasks
```

**Instale as dependências do Node.js usando npm ou yarn:**

```
npm install
```

## Configuração do Banco de Dados

**Acesse o PostgreSQL usando o cliente de sua preferência.**

**Crie um banco de dados para a aplicação:**

```
CREATE DATABASE db_list;
```

**Defina as credenciais do banco de dados no arquivo .env.**

**Renomeie .env.example para .env e preencha com suas credenciais:**

```
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=nome_do_banco_de_dados
```
## Execução da API

**Inicie o servidor da API:**

```
npm start
```
A API estará disponível em:

```
http://localhost:3000
```


## Rotas da API
<ul>
 <li>GET /todolist: Retorna a lista de tarefas.</li>
 <li>POST /todolist: Cria uma nova tarefa.</li>
 <li>PUT /todolist/:id: Atualiza uma tarefa existente com o ID especificado.</li>
 <li>DELETE /todolist/:id: Exclui uma tarefa existente com o ID especificado.</li>
</ul>

## Exemplo de Requisições

<ul>
 <li><b>Criar uma tarefa:</b>
  </li>
</ul>

```
POST /tasks
Content-Type: application/json

{
  "title": "Comprar leite",
  "description": "Comprar leite desnatado no supermercado."
}
```

<ul>
 <li><b>Atualizar uma tarefa:</b></li>
</ul>

```
PUT /tasks/1
Content-Type: application/json

{
  "title": "Comprar leite",
  "description": "Comprar leite desnatado no supermercado. Não esquecer de verificar a validade."
}
```

<ul>
 <li><b>Excluir uma tarefa</b>:</li>
</ul>

```
DELETE /tasks/1
```

## Contribuição
**Contribuições são bem-vindas! Se você encontrar um bug ou desejar adicionar um novo recurso, sinta-se à vontade para abrir uma issue ou enviar um pull request.**

## Licença
**Este projeto é licenciado sob a MIT License.**
