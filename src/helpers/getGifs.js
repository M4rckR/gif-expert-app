import 'whatwg-fetch'

export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SLdm8AtCgeSyfC5QohlV54SUoACDXMMs&q=${category}&limit=10`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url : img.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs
}