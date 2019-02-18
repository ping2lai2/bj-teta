import React from 'react';

import { connect } from 'react-redux';
import { getTasks } from '../../actions/tasks';


import './style.css';

class Smart extends React.Component {
  state = { flag: false };
  clickFunc = () => {
    this.props.getTasks();
    this.setState({
      flag: !this.state.flag,
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
const mapStateToProps = ({ tasks }) => ({
  tasks,
});
const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smart);
