// Importation du composant Link depuis la bibliothèque 'react-router-dom'
import { Link } from 'react-router-dom'

// Importation des fonctions useSelector et useDispatch depuis la bibliothèque 'react-redux'
import { useSelector, useDispatch } from 'react-redux';

// Importation de l'action signOut depuis le fichier '../../context/DataContext/index'
import { signOut } from '../../context/DataContext/index';

// Définition du composant Header
function Header() {
    // Utilisation du hook useSelector pour accéder à l'état de l'authentification et du nom d'utilisateur
    const isLoggedIn = useSelector(state => state.auth.token);
    const username = useSelector(state => state.auth.username) || localStorage.getItem('username');

    // Utilisation du hook useDispatch pour dispatcher des actions
    const dispatch = useDispatch();

    // Définition de la fonction handleSignOut qui dispatche l'action signOut
    const handleSignOut = () => {
        dispatch(signOut());
        // localStorage.removeItem('username');
    };

    // Si l'utilisateur est connecté, on affiche un certain header
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

// Exportation du composant Header pour être utilisé dans d'autres parties de l'application
export default Header;