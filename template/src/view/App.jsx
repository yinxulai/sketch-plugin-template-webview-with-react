import * as React from 'react';
import * as less from './style.less'
import * as scss from './style.scss'

export default class App extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '100%',
      color: '#FFFFFF',
      overflow: 'hidden',
      backgroundColor: '#333333'
    };
    return (
      <div style={style}>
        <p className={less.text}>Hello sketch react plugin</p>
        <p className={scss.text}>Hello sketch react plugin</p>
      </div>
    );
  }
}
