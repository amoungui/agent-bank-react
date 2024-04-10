import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <nav class="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                    class="main-nav-logo-image"
                    src={process.env.PUBLIC_URL + '/assets/img/argentBankLogo.png'}
                    alt="Argent Bank Logo"
                    />
                    <h1 class="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="./sign-in.html">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header