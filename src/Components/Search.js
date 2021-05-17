import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Search = ({ handleSearch }) => {
    const [location, setLocation] = useState('');
    return (
        <div className="d-flex">
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="me-1" placeholder="Search location" id="search" />
            <button className="btn btn-secondary d-flex" onClick={(e) => handleSearch(location)}>
                <span className="pe-1">
                    <FontAwesomeIcon icon={faSearchLocation} />
                </span>
                     Search</button>
        </div>
    )
}

export default Search
