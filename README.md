# RandomfactsApi

https://uselessfacts.jsph.pl/

## Api Endpoints

- /random.format?language=lg (updates on every request)
- /today.format?language=lg (updates every 24h)

Where 
- format: json, html, txt and md (default is html)
- lg: en, de

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
