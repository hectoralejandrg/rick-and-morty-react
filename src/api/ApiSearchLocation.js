const getSearchLocation = (name)=>{
    const url=`https://rickandmortyapi.com/api/location/?name=${name}`;
    return fetch(url).then(res => res.json());
}
export default getSearchLocation;