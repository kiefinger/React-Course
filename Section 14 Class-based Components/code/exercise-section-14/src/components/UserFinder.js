import {Fragment, useState, useEffect, Component} from 'react';

import Users from './Users';

import './UserFinder.css';
import ErrorBoundary from "./ErrorBoundary";

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];


class UserFinder extends Component{

  constructor() {
    super();
    this.state = {
      filteredUsers: [
      ],
      searchTerm: ""
    }
  }

  searchChangeHandler (event)  {
    this.setState( (curState) => {
      return {searchTerm: event.target.value};
    });
  };

  componentDidMount() {
      // http request
      this.setState ({
          filteredUsers: [
          { id: 'u1', name: 'Max' },
          { id: 'u2', name: 'Manuel' },
          { id: 'u3', name: 'Julie' },
      ]}
      )
  }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchTerm !== this.state.searchTerm ){
            this.setState( ( {
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
            }))
        }
  }

    render () {
    return (
        <Fragment>
          <div className="finder">
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          </div>
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
        </Fragment>
    );
  }



}
const UserFinderOld = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className="finder">
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;