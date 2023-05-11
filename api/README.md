# Glendalough api (temporary placeholder for gatsby)

```
npm init

npm i -D @babel/cli @babel/core @babel/preset-env rimraf

npm i @hapi/boom @hapi/hapi joi core-js 

npm i -g nodemon

# add to package.json "scripts":
    "start": "npm run build --scripts-prepend-node-path && nodemon dist/index.js",
    "build": "rimraf dist/ && babel ./src --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files"

# create babel.config.js
...

# run / build
npm start
npm build
```