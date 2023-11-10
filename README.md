# nodeodbctest
Use Node.js with ODBC driver

Install the usual way

1) clone repository locally

2) install it

```
npm install
```

3) configure it.  Create a .env file in root folder with the following

```
DRIVER="<an ODBC driver name>"
SERVER="localhost"
DATABASE="<a database name>"
USERNAME="<a username>"
PASSWORD="<a password>"
SQLQUERY="select * from foo.bar"
```
4) run it

```
node ./appjs
```

or 

```
nodemon ./app.js
```