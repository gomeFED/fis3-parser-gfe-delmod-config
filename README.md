# fis3-parser-gfe-delmod-config
fis3-parser-gfe-delmod-config


## INSTALL

```bash
npm install [-g] fis3-parser-gfe-delmod-config
```

## USE

```js
fis.match('/html/**.{html,tpl}', {
    parser: fis.plugin('gfe-delmod-configs', {
    })
});
```