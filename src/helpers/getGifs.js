export const getGifs = async(x) =>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=OvXyPt5D47vZoQtumKJ4Qz4cR4vqYRih&q=${x}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    /* console.log(data) */

    const gifs = data.map(x => (
        {
            id: x.id,
            title: x.title,
            url: x.images.downsized_medium.url
        }
    ))
    
    return gifs;
}