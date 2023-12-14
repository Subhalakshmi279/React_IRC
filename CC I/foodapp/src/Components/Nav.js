import { Link } from 'react-router-dom'
const Nav =()=>
{
    return(
        <div class="nav-wrapper">
                <ul>
                    <li class="new-wrapper"><a href="#">FooDle</a></li>


                    <li class="nex-wrapper">Orders</li>
                    
                    <Link to='/Login'>
                    <li class="nex-wrapper">Login</li>
                    </Link>

                    <Link to='/Signup'>
                    <li class="nex-wrapper">Signup</li>
                    </Link>
                </ul>
            </div>
    )
}
export default Nav;