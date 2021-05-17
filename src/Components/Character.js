import { faBiohazard, faDizzy, faGlobeAmericas, faHeartbeat, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import getCharacter from '../api/ApiCharacter'

const Character = ({url }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [origin, setOrigin] = useState('');
    const [episode, setEpisode] = useState('');
    /**Peticion para obtener datos del personaje */
    useEffect(() => {
        if(url){
            getCharacter(url)
                .then(data => {
                    setName(data.name);
                    setImage(data.image);
                    setStatus(data.status);
                    setSpecies(data.species);
                    setOrigin(data.origin.name);
                    setEpisode(data.episode[0].split('/').pop())
                })
        }
    }, [url])
    return (
        <div className="card bg-light">
            <img className="card-img-top h-100" src={image} alt={"Photo of character "+ name} />
            <div className="card-header">
                <h6>{name}</h6>
            </div>
            <div className="card-body text-start">
                <p className="card-text"><span className={status==='Alive'?"me-1 text-success":"me-1 text-danger"}><FontAwesomeIcon icon={status==='Alive'?faHeartbeat: faDizzy}/></span>- {status}</p>
                <p className="card-text"><span className="me-1"><FontAwesomeIcon icon={faBiohazard}/></span>- {species}</p>
                <p className="card-text"><span className="me-1"><FontAwesomeIcon icon={faGlobeAmericas}/></span>- {origin}</p>
                <p className="card-text"><span className="me-1"><FontAwesomeIcon icon={faVideo}/></span>- Episode {episode}</p>
            </div>
        </div>
    )
}
export default Character;
