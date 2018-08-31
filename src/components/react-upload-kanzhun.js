import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactUpload from 'react-upload';
import NxFileUpload from 'next-file-upload';


const KANZHUN_API = '/kanzhun_api/question/pic/upload.json';
const KANZHUN_IMG = 'http://img.kanzhun.com';

// { "imgThumbFileUrl": "/images/photo/20180831/b8f1f244367762caa6cfdae54446eb31_thumb.png", "rescode": 1, "imgFileUrl": "/images/photo/20180831/b8f1f244367762caa6cfdae54446eb31.png" }

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const { onChange } = this.props;
    const { value } = inEvent.target;
    const apis = nx.map(value, (_, file) => {
      return NxFileUpload(KANZHUN_API, { name: file });
    });

    Promise.all(apis).then(reponses => {
      const _response = reponses.map(response => {
        const item = JSON.parse(response);
        item.url = `${KANZHUN_IMG}/${item.imgFileUrl}`;
        return item;
      });
      onChange({ target: { value: _response } });
    });
  };

  render() {
    const { onChange, ...props } = this.props;
    return (
      <ReactUpload onChange={this._onChange} {...props} />
    );
  }
}
