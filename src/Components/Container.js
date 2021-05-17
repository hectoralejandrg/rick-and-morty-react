import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import getCountLocation from '../api/ApiCountLocation';
import getLocation from '../api/ApiLocation';
import getSearchLocation from '../api/ApiSearchLocation';
import Character from './Character';
import Location from './Location';
import Search from './Search';
import titleLogo from '../assets/title1.png'

const Container = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [dimension, setDimension] = useState('');
    const [amountResidents, setAmountResidents] = useState(0);
    const [residents, setResidents] = useState([]);
    const [visible, setVisible] = useState(true)

    /**Obtiene cantidad de location en caso de actualizacion*/
    useEffect(() => {
        getCountLocation().then(data => setCount(data.info.count))
    }, [])

    /**Obtiene un location random */
    useEffect(() => {
        getLocation(count)
            .then(data => {
                setName(data.name);
                setType(data.type);
                setDimension(data.dimension);
                setAmountResidents(data.residents.length)
                setResidents(data.residents)
            })

    }, [count])

    /**Lista de characters */
    const listCharacters = residents.map((element) => {
        return (
            <div className="col-md-2 mt-2 mb-2" key={element.split('/').pop()}>
                <Character url={element} />
            </div>
        )
    })

    /**Funcion para buscar por nombre de location */
    const getSearch = (name) => {
        getSearchLocation(name)
            .then(data => {
                console.log(data);
                setName(data.results[0].name);
                setType(data.results[0].type);
                setDimension(data.results[0].dimension);
                setAmountResidents(data.results[0].residents.length);
                setResidents(data.results[0].residents);
                setVisible(true);
            })
    }

    /**Maneja la visibilidad del componente buscar*/
    const handleVisible=()=>{
        setVisible(false)
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <img src={titleLogo}  style={{ height:"100px" ,width:"350px"}} alt="Title"/>
            </div>
            <div className="d-flex justify-content-between mb-2">
                {!visible?<Search handleSearch={getSearch}/>:<button className="btn btn-secondary" onClick={handleVisible}><FontAwesomeIcon icon={faSearchPlus}/></button>}
            </div>
            <div className="mt-1">
                <Location name={name} type={type} dimension={dimension} amountResidents={amountResidents} />
            </div>
            <div className="row">
                {listCharacters}
            </div>
        </div>
    )
}
export default Container;
