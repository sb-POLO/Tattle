import './NavBar.css';
import Logo from '../../assets/Logo_2.png';

function NavBar({ input, setInput }) {
    return (
        <>
            <nav className="NavBar">
                <img id="Logo" src={Logo} alt="Logo" />
                <ul className='NavList'>
                    <li>Home</li>
                    <li>Country</li>
                    <li>Language</li>
                </ul>
                <input className='search' placeholder='Search...' value={input} onChange={(e) => { setInput(e.target.value) }}></input>
                <button className='login-btn'>Sign in</button>
            </nav>
        </>
    )
}

export default NavBar;