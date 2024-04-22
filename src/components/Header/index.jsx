import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../context/DataContext/index';

function Header() {
    const isLoggedIn = useSelector(state => state.auth.token);
    const username = useSelector(state => state.auth.username) || localStorage.getItem('username');
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(signOut());
        // localStorage.removeItem('username');
    };

    if (isLoggedIn){
        return (
            <header>
                <nav className="main-nav">
                    <Link className="main-nav-logo" to="/">
                        <img
                        data-testid="header-image-testid"
                        className="main-nav-logo-image"
                        src={process.env.PUBLIC_URL + '/assets/img/argentBankLogo.webp'}
                        alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    
                    <div>
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {username ? username : 'Tony'}
                        </Link>
                        <Link className="main-nav-item" to="/" onClick={handleSignOut}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>                
                </nav>
            </header>
        )
    }else{
        return (
            <header>
                <nav className="main-nav">
                    <Link className="main-nav-logo" to="/">
                        <img
                        data-testid="header-image-testid"
                        className="main-nav-logo-image"
                        src={process.env.PUBLIC_URL + '/assets/img/argentBankLogo.webp'}
                        alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    
                    <div>
                        <Link className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                        </Link>
                    </div>              
                </nav>
            </header>
        )        
    }

}

export default Header;
