import Link from 'next/link'
import '../public/Vector.png'
const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
                <img src="../Vector.png" alt="" />
            </div>
            <div className="links">
            <Link href="/projets" className='menu' >projets </Link>
            <Link href="/about" className='menu'>a propos </Link>
            <Link href="/contact" className='menu'>contact </Link>
            </div>
         

        </nav>
    
    );
}
 
export default Navbar;