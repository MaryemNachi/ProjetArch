import '../public/im1.png';
const About = () => {
    return ( 
        <div className="about">
            <p className="title">A PROPOS</p>
            <div className="about-container">
            <p className="name">Mourad Zoghlami</p>
            <p className="opt">optional text area</p>
            <img className="image-resize" src="im1.png"></img>
            <p className='titre' >Biographie</p>
            <p className='bio'>Kengo Kuma was born in 1954. He established Kengo Kuma & Associates in 1990. He is currently a University Professor and Professor Emeritus at the University of Tokyo after teaching at Keio University and the University of Tokyo. KKAA projects are currently underway in more than 30 countries. Kengo Kuma proposes architecture that opens up new relationships between nature, technology, and human beings. His major publications include Ten Sen Men (“point, line, plane”, Iwanami Shoten), Hito no Sumika (“shelters for people”, Shincho Shinsho), Makeru Kenchiku (Architecture of Defeat, Iwanami Shoten), Shizen na Kenchiku (Natural Architecture, Iwanami Shinsho), Chii-sana Kenchiku (Small Architecture, Iwanami Shinsho) and many others.</p>
            <p className='titre'>Carrière</p>
            <div className="carriere">
            <span>2020-</span>
                <p className='par'> Special/Honorary Professor at University of Tokyo (INTERNATIONAL ARCHITECTURAL EDUCATION PLATFORM SEKISUI HOUSE – KUMA LAB Advisor) Special/Honorary Professor at University of Tokyo (INTERNATIONAL ARCHITECTURAL EDUCATION PLATFORM SEKISUI HOUSE – KUMA LAB Advisor)</p>
            </div>
            <div className="carriere">
            <span>2020-</span>
            <p className='par'> Special/Honorary Professor at University of Tokyo)</p>
            </div>
            <div className="carriere">
            <span>2020-</span>
            <p className='par'> Special/Honorary Professor at University of Tokyo (INTERNATIONAL ARCHITECTURAL EDUCATION PLATFORM SEKISUI HOUSE – KUMA LAB Advisor)</p>
            </div>
          </div>
        </div>
    
     );
}
 
export default About; 