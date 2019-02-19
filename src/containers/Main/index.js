import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Nav from '../../components/Nav';
import Login from '../../components/Login';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import TasksManager from '../../components/TasksManager';
import PaginationField from '../../components/PaginationField';

import { postTask, getTasks, login, logout } from '../../actions';

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
      user: {name}
    } = this.props;
    //TODO: need to create loading
    return (
      <Container>
        <TasksManager itemsList={itemsList} isLoggedIn={!!name} />
        <PaginationField
          totalItemsCount={totalItemsCount}
          itemsCountPerPage={3}
          pageRangeDisplayed={5}
          onChange={this._onChange}
          activePage={page}
        />
      </Container>
    );
  };

  render() {
    const { user, tasks, login, logout, getTasks } = this.props;
    return (
      <Layout>
        <Container>
          <Login user={user} login={login} logout={logout} />
        </Container>
        <Container>
          <Nav tasks={tasks} getTasks={getTasks} />
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
  postTask: () => dispatch(postTask()),
  getTasks: (sortField, sortDirection, page) =>
    dispatch(getTasks(sortField, sortDirection, page)),
  logout: () => dispatch(logout()),
  login: (name, password) => dispatch(login(name, password)),
});

Main.propTypes = {
  tasks: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
  postTask: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
