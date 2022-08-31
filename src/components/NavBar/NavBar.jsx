import './NavBar.css';
import Logo from '../../assets/Logo_2.png';
import { useLocation, useNavigate } from 'react-router-dom';

function NavBar({ input, setInput, setOtherPage }) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <nav className="NavBar">
                <img id="Logo" src={Logo} alt="Logo" onClick={() => navigate('/')} />
                <ul className='NavList'>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li>Country</li>
                    <li>Language</li>
                </ul>
                <input className='search' placeholder='Search...' value={input} onChange={(e) => {
                    if (location.pathname !== '/') {
                        navigate('/');
                        setOtherPage(true);
                    }
                    setInput(e.target.value);
                }}></input>
                <button className='login-btn'>Sign in</button>
            </nav>
        </>
    )
}

export default NavBar;