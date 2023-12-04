import {Component} from 'react';
import User from './User';

import './Users.css';


const DUMMY_USERS = [
    {id: 'u1', name: 'Max'},
    {id: 'u2', name: 'Manuel'},
    {id: 'u3', name: 'Julie'},
];

class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true,
            more: 'Test'
        }
    }

    // Does not overwrite the old state, but merges with the old state
    toggleUsersHandler() {
        this.setState((curState) => {
            return {showUsers: !curState.showUsers};
        });

    }

    //Demonstrate throw
    componentDidUpdate(prevProps, prevState, snapshot) {


        if ( this.props.users.length===0) {
            throw new Error ( "No users provided");
        }
    }

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name}/>
                ))}
            </ul>);

        return (<div className="users">
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

export default Users;
