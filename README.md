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

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  
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

// install: npm install afeiship/react-upload-kanzhun --save
// import : import ReactUploadKanzhun from 'react-upload-kanzhun'

class App extends React.Component{
  state = {
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = inEvent =>{
    const { value } = inEvent.target;
    console.log(value);
  };

  render(){
    return (
      <div className="hello-react-upload-kanzhun">
        <ReactUploadKanzhun onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```
