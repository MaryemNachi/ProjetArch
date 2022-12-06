import Link from 'next/link';
import '../../public/im1.png';
import '../../public/im2.png';
import '../../public/im3.png';
import { useState, useContext } from 'react';
import {pageDetailsContext} from '../../contexts/pageContext'
import listeP from '../../json/data.json'


const Projets = ({}) => {
    const [page, setPage] = useContext(pageDetailsContext);

    
    return ( 
        <div className="projets">
        <div className='titres'>
            <p>Projets</p>
             <div className="projet-links">
            <Link href='/projets' className='links'>ALL </Link>
            <div className="links">|</div>
            <Link href='/projets/categ' className='links' onClick={() => setPage(1)}>RESIDENTIAL</Link>
            <div className="links">|</div>
            <Link href='/projets/categ' className='links' onClick={() => setPage(2)} >VILLAS </Link>
            <div className="links">|</div>
            <Link href='/projets/categ' className='links' onClick={() => setPage(3)} >CULTURAL</Link>
            <div className="links">|</div>
            <Link href='/projets/categ' className='links' onClick={() => setPage(4)} >OFFICES </Link>
            
            </div>
        </div>
        <div className="projets-container">
            {listeP.map(projet => (
                <div className="projet" key={projet.id}>
                    <Link href={'/projets/' + projet.id} className="projet-image">
                        <img className="image-resize"src={projet.image} />
                       <div className="trait"><hr/></div>
                    </Link>
                    <div className="projet-info">
                        <h3>{projet.name}</h3>
                        <p>{projet.location}</p>
                        </div>
                </div>
            ))}

        </div>
        </div>

     );
}
 
export default Projets;