import React from 'react';

import { connect } from 'react-redux';
import { postTask } from '../../actions/tasks';


import './style.css';

class Smart extends React.Component {
  state = { flag: false };
  clickFunc = () => {
    this.props.postTask();
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
  postTask: () => dispatch(postTask({})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smart);
