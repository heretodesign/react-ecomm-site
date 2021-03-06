# react-ecomm-site

An e-commerce site SPA implemented with React.

This is the branch that use redux as state management.

[Redux Live](https://redux.shopit.space/)

## State Management Library

There are two implementations of this site:

1. MobX - [`master` branch][master-branch]
1. Redux - [`redux` branch][redux-branch]
1. Redux with TypeScript - [`redux-ts` branch][redux-ts-branch]

You can cross-reference them and see the difference between them. I will put my best effort to ensure they are functionally the same.

MobX branch may be slightly ahead, as I usually work on it and then cherry-pick into redux branch.

## Backend API

The backend API that supports this site uses a json file and its DB and auto-generated images. Its code is in [this repo][backend-api-repo].

The database will refresh everytime Heroku rebuild it, so usually you can get a clean state to test this site.

## Other Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[master-branch]: https://github.com/malcolm-kee/react-ecomm-site/tree/master
[redux-branch]: https://github.com/malcolm-kee/react-ecomm-site/tree/redux
[redux-ts-branch]: https://github.com/malcolm-kee/react-ecomm-site/tree/redux-ts
[backend-api-repo]: https://github.com/malcolm-kee/ecomm-db
