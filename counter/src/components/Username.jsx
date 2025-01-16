import { Link } from "react-router-dom";
import "../css/App.css"

function UserName() {
    const [count, setCount] = useState(0)
    return (
    <nav className="usernav">
        <div className="username-search">
            <Link to="/">Multi-Purpose Counter</Link>
        </div>
        <h1>Multi-Purpose Counter</h1>
        <div>
            {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
            <textarea name = "username" maxLength={10} rows={1} cols={20} placeholder='Enter Username' resize:none />
            <button id='findUser' onClick={() => console.log('Find User')}>Find User</button>
        </div>
        return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
    </nav>
    )
}

export default UserName