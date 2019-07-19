import * as React from 'react';

export default class App extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    };
    return (
      <div style={style}>
        Hello sketch react plugin
      </div>
    );
  }
}
