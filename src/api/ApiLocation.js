
const getLocation = (count)=>{
    const randomId = Math.floor(Math.random() * count);
    const url = `https://rickandmortyapi.com/api/location/${randomId}`;
    return fetch(url).then(res => res.json())
}
export default getLocation;