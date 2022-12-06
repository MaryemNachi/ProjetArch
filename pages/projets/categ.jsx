import listeP from '../../json/data.json'
import { useState, useContext } from 'react';
import {pageDetailsContext} from '../../contexts/pageContext'
import './index'
const Filtre = () => {
    const tab=["RESIDENTIAL","VILLAS","CULTURAL","OFFICES"]
    const [page, setPage] = useContext(pageDetailsContext);
    return ( 
        <div className="projets">
            <div className="projets-container">
            {listeP.map(projet => {
            {
                if (projet.cat==tab[page - 1]) {
                    return ( <div className="projet" key={projet.id}>
                    <div className="projet-image">
                        <img className="image-resize"src={projet.image} />
                       <div className="trait"><hr/></div>
                    </div>
                    <div className="projet-info">
                        <h3>{projet.name}</h3>
                        <p>{projet.location}</p>
                        </div>
                </div>)
                    
                }
               }
             })}
            </div>
          
        </div>
     );
}
 
export default Filtre;