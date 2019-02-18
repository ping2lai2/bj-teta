import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Nav from '../../components/Nav';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import TasksManager from '../../components/TasksManager';
import PaginationField from '../../components/PaginationField';

import { postTask, getTasks } from '../../actions';

class Main extends React.Component {
  componentDidMount() {
    const { tasks, getTasks } = this.props;
    if (tasks.itemsList.length < 1) {
      getTasks();
    }
  }
  _onChange = page => {
    const {
      tasks: { sortField, sortDirection },
      getTasks,
    } = this.props;
    getTasks(sortField, sortDirection, page);
  };
  renderTemplate = () => {
    const {
      tasks: { itemsList, totalItemsCount, page },
    } = this.props;

    return (
      <Content>
        <TasksManager itemsList={itemsList} isAdmin={true} />
        <PaginationField
          totalItemsCount={totalItemsCount}
          itemsCountPerPage={3}
          pageRangeDisplayed={5}
          onChange={this._onChange}
          activePage={page}
        />
      </Content>
    );
  };

  render() {
    return (
      <Layout>
        <Nav />
        {this.renderTemplate()}
      </Layout>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks,
});
const mapDispatchToProps = dispatch => ({
  postTask: () => dispatch(postTask()),
  getTasks: (sortField, sortDirection, page) =>
    dispatch(getTasks(sortField, sortDirection, page)),
});

Main.propTypes = {
  tasks: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
  postTask: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
