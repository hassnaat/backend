### Database setup

Make sure to update the configuration app with your database credentials in the `../db/knexfile.js` file.
There you need to specify the `user`, `password` (per default no password required) and the `database` you want to connect to.

The default database we try to connect to is called `library`. Please make sure it exists in your local [Postgres](https://www.postgresql.org) instance. You can either use a UI like [PgAdmin](https://www.pgadmin.org) to create the database or you can do so with `psql`

```
create database library;
```

## Execute database migration

```
npm run migrate
```

## Starting the application

```
npm run dev
```
"# backend" 
