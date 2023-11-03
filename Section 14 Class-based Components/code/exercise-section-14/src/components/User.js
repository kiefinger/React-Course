import {Component} from 'react'

import './User.css';

class User extends Component{
   render() {
     return <li className="user">{this.props.name}</li>;
   }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
