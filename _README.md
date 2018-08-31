# react-upload-kanzhun
> React upload for kanzhun, only for learning.

## proxy:
```json
proxy: {
    "/question": {
        "target": "https://www.kanzhun.com:80",
        "changeOrigin": true,
        "pathRewrite": { '^/kanzhuan_api/': '/' },
    }
}
```

## properties:
```javascript
BACKUP_PROPERTIES
```

## install && import:
```bash
npm install --save afeiship/react-upload-kanzhun --registry=https://registry.npm.taobao.org
```

```js
import ReactUploadKanzhun from 'react-upload-kanzhun';
```

```scss
// customize your styles:
$react-upload-kanzhun-options:(
);

@import 'node_modules/react-upload-kanzhun/dist/style.scss';
```


## usage:
```jsx
BACKUP_USAGE
```
