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