
const getCountLocation = ()=>{
    const url = `https://rickandmortyapi.com/api/location`;
    return fetch(url).then(res => res.json())
}
export default getCountLocation;