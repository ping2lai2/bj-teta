import React from 'react';

import './style.css';

class Smart extends React.Component {
  state = { flag: false };
  clickFunc = () => {
    this.setState({
      flag: !this.state.flag
    });
  };
  render() {
    return (
      <div className="smart">
        <button className="button" onClick={this.clickFunc}>
          {'' + this.state.flag}
        </button>
      </div>
    );
  }
}

export default Smart;
