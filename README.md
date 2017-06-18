# MEAN
Construindo aplicações com Mongo, Express, AngularJS e Node

### O básico (comandos e configurações)


#### Instalando NODEJS e NPM no Ubuntu(versão LTS)


https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions


#### Comandos Básicos NPM (UBUNTU)

```
$ npm --version
$ nodejs --version

```

Obtendo ajuda

```
$ node --help

```
Fazendo update do NodeJS para um versão 'stable'

```
$ sudo npm cache clean -f
$ sudo npm install -g
$ sudo n stable

```

Atualizando o NPM

```
$ sudo npm install npm -g n

```

Atualizando módulos

```
$ sudo npm update -g

```

#### Nodemon - Instalando e usando

O que é Nodemon?
Casca que envolve aplicação nodejs e monitora as alterações feitas no projeto.

Para instalar:

```
$ sudo npm install -g nodemon
```

Para iniciar(dentro da pasta do projeto)

```
$ nodemon
```

* Observação: Nodemon só deve ser usado exclusivamente em ambiente de desenvolvimento! * 


#### Instalando ExpressJS (Ubuntu)

```
$ sudo npm install -g express-generator
```

Consultando a versão do express:

```
$ express --version

```

Gerar projeto express:

```
$ express

```

Iniciar projeto:

```
$ npm start

```

Installing MongoDB and Mongoose (ubuntu)

https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=2.210982160.449598684.1497638966-1010959046.1494553658


Starting MongoDB

```
$ sudo service mongod start

```

Stop MongoDB

```
$ sudo service mongod stop
```
Restart MongoDB

```
$ sudo service mongod restart
```

Removendo Mongo

- Pare o processo do mongoDB antes.

- Remova MongoDB

```
$ sudo apt-get purge mongodb-org*
```

Remove Data Directories

Remove MongoDB databases and log files.

```
$ sudo rm -r /var/log/mongodb

$ sudo rm -r /var/lib/mongodb

```

Sugestão de Deploy:

Servidor *PaaS gratuito

[Heroku](https://www.heroku.com)

Deploy

** Insira a propriedade 'engines' no arquivo package.json com a versão do NodeJS e NPM utilizados no projeto.
Também inclua um arquivo no projeto com nome Procfile(não possui extesão) com a seguinte configuração: **

```

web: npm start

```

Essa configuração informa ao Heroku como fazer o start da aplicação.


- Faça o commit do projeto
- Faça login no heroku (dentro da raíz do projeto)

```
    $ heroku login

```

- Faça o "push" da aplicação para o heroku

```
    $ git push heroku master 

```

**Plataforma como Serviço **