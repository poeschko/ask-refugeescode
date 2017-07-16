# ask-refugees{code}

A Q&A web app for [refugees{code}](http://www.refugeescode.at/) built with [React Starter Kit](https://reactstarter.com/), using [Node.js](https://nodejs.org/), [Express](http://expressjs.com/), [GraphQL](http://graphql.org/), and
[React](https://facebook.github.io/react/).

See the [React Starter Kit Documentation](https://github.com/kriasoft/react-starter-kit/tree/master/docs) for more technical information.

[Live website](https://ask-refugeescode.herokuapp.com/) on [Heroku](https://www.heroku.com/)

## Prerequesites

You need [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/) installed to run and develop this application locally. A great editor / IDE to write JavaScript (and other) code is [Visual Studio Code](https://code.visualstudio.com/).

## Scripts

* `yarn install`: install dependencies
* `yarn start`: start development server
* `yarn deploy`: deploy to Heroku

## Data

During local development, data is stored in an [SQLite](https://www.sqlite.org/) database `database.sqlite`. You can copy `database.sample.sqlite` to `database.sqlite` to get some initial data.

On the production server, data is stored in a [Heroku Postgres](https://www.heroku.com/postgres) database. The necessary `DATABASE_URL` environment variable is automatically set by Heroku.

To interface with the database (both locally and on production), the Node.js ORM [Sequelize](http://docs.sequelizejs.com/) is used. Data is exposed as a [GraphQL](http://graphql.org/) API, using [React Apollo](https://github.com/apollographql/react-apollo) to fetch data from React components.

Data is only editable when logged in as one of the predefined administrators via Facebook. To make Facebook login work, we set the environment variables `FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET` in the Heroku app configuration.

## TODO

* Improve design
* Improving editing workflow
* Add more tests
* Make videos answering actual questions
