import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component{

    state = {
        giphys: []
    }


    fetchGifs = (query = "dolphin") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=hUVHDBcRDALGTsjYZOXnR3J6egr5U8kE&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({giphys: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }


    componentDidMount(){
        this.fetchGifs()
    }

    render(){
        return(
            <div>
                <GifList gifs={this.state.giphys}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }
}

export default GifListContainer