Issue is fixed in cucumber.js`
Issue found on [cucumber.js 8.9.0](https://www.npmjs.com/package/@cucumber/cucumber/v/8.9.0) that is fixed on [cucumber.js 8.9.1](https://www.npmjs.com/package/@cucumber/cucumber/v/8.9.1).

Folder Structures:
```
- index.js
- features
   - test.feature
-- stepDefinition
   - step.js
```

```
nvm use
npm i
```
## 1: no parallel; runs fine
```
npm run test
```

## 2: with parallel, crashes with:
```
TypeError: Cannot read properties of undefined (reading 'getInvocationParameters')
```
```
PARALLEL=1 npm run test
```
## 3: with parallel, no crashes with workaround
```
WORKAROUND=1 PARALLEL=1 npm run test
```