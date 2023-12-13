import { Link } from 'react-router-dom'
const Nav =()=>
{
    return(
        <div class="nav-wrapper">
                <ul>
                    <li class="new-wrapper"><a href="#">FooDle</a></li>

                    <Link to='/Signup'>
                    <li class="nex-wrapper">Signup</li>
                    </Link>

                    <Link to='/Login'>
                    <li class="nex-wrapper">Login</li>
                    </Link>

                    <li class="nex-wrapper">Orders</li>
                </ul>
            </div>
    )
}
export default Nav;