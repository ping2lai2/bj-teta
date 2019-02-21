import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import SortFields from '../../components/SortFields';
import Login from '../../components/Login';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import TasksManager from '../../components/TasksManager';
import TaskCreator from '../../components/TaskCreator';
import TaskEditor from '../../components/TaskEditor';
import PaginationField from '../../components/PaginationField';

import {
  getTasks,
  postTask,
  editTask,
  clearMessages,
  login,
  logout,
} from '../../actions';

class MainContainer extends React.Component {
  state = {
    openedTaskIndex: null,
  };
  componentDidMount() {
    const { tasks, getTasks } = this.props;
    if (tasks.itemsList.length < 1) {
      getTasks();
    }
  }
  getNextPageTasks = page => {
    const {
      tasks: { sortField, sortDirection },
      getTasks,
    } = this.props;
    getTasks(sortField, sortDirection, page);
  };
  openTask = event =>
    this.setState({
      openedTaskIndex: event.currentTarget.dataset.index,
    });

  closeTask = () =>
    this.setState({
      openedTaskIndex: null,
    });

  renderTemplate = () => {
    const {
      tasks: {
        itemsList,
        totalItemsCount,
        page,
        isFetching,
        errorMessage,
        reportMessage,
      },
      user: { name },
      editTask,
      clearMessages,
    } = this.props;
    const { openedTaskIndex } = this.state;
    if (isFetching) {
      return <Container>{'Загрузка'}</Container>;
    } else if (errorMessage) {
      return <Container>{errorMessage}</Container>;
    } else {
      return (
        <Container>
          <TasksManager
            itemsList={itemsList}
            isLoggedIn={!!name}
            openTask={this.openTask}
          />
          <PaginationField
            totalItemsCount={totalItemsCount}
            itemsCountPerPage={3}
            pageRangeDisplayed={5}
            onChange={this.getNextPageTasks}
            activePage={page}
          />
          {openedTaskIndex && (
            <TaskEditor
              openedTask={itemsList[openedTaskIndex]}
              openedTaskIndex={openedTaskIndex}
              closeTask={this.closeTask}
              errorMessage={errorMessage}
              reportMessage={reportMessage}
              editTask={editTask}
              clearMessages={clearMessages}
            />
          )}
        </Container>
      );
    }
  };

  render() {
    const {
      user,
      tasks,
      login,
      logout,
      getTasks,
      postTask,
      clearMessages,
    } = this.props;
    return (
      <Layout>
        <Container>
          <Login user={user} login={login} logout={logout} />
          <TaskCreator
            postTask={postTask}
            tasks={tasks}
            clearMessages={clearMessages}
          />
          <SortFields tasks={tasks} getTasks={getTasks} />
        </Container>
        {this.renderTemplate()}
      </Layout>
    );
  }
}

const mapStateToProps = ({ tasks, user }) => ({
  tasks,
  user,
});
const mapDispatchToProps = dispatch => ({
  getTasks: (sortField, sortDirection, page) =>
    dispatch(getTasks(sortField, sortDirection, page)),
  postTask: task => dispatch(postTask(task)),
  editTask: task => dispatch(editTask(task)),
  logout: () => dispatch(logout()),
  clearMessages: () => dispatch(clearMessages()),
  login: (name, password) => dispatch(login(name, password)),
});

MainContainer.propTypes = {
  tasks: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
  postTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
