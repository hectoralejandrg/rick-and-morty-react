const getCharacter = (url)=>{
    return fetch(url).then(res => res.json())
}
export default getCharacter;

