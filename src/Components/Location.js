import { faAtom, faGlobe, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Location = ({ name, type, dimension, amountResidents }) => {
    return (
        <div className="card bg-light">
            <div className="card-header d-flex justify-content-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} size={"2x"}/>
                <h3 className="ms-2">{name}</h3>
            </div>
            <div className="card-body d-flex justify-content-evenly">
                <div>
                    <span className="p-2">
                        <FontAwesomeIcon icon={faGlobe} size={"2x"}/>
                    </span>
                    <p>{type}</p>
                </div>
                <div>
                    <span className="p-2">
                        <FontAwesomeIcon icon={faAtom} size={"2x"}/>
                    </span>
                    <p>{dimension}</p>
                </div>
                <div>
                    <span className="p-2">
                        <FontAwesomeIcon icon={faUser} size={"2x"}/>
                    </span>
                    <p>{amountResidents} residents</p>
                </div>
            </div>
        </div>
    )
}

export default Location
