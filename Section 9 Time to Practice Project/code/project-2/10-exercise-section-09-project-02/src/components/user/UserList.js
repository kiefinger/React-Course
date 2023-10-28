import './UserList.css'
function UserList(props) {
    return (
        <div className="users">
            <ul>
                {props.list.map( (user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
