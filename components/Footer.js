import Link from "next/link";
const Footer = () => {
    return ( 
 <div>
    <footer className="footer">
        <div className="footer__container">
            <Link href="/" className='menu' >projets </Link>
            <Link href="/about" className='menu'>a propos </Link>
            <Link href="/contact" className='menu'>contact </Link>
        </div>
        <div className="container">
            <div className="logo">
                <img src="../Vector1.png" alt="" />
            </div>
            <div className="name">
            <p >Mourad zoghlami</p>
            </div>
           <div className="prof">
           <p >architecte</p>
           </div>
         
        </div>
    </footer>
 </div>
     );
}
 
export default Footer;