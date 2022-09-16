import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { APIkey } from "../../config/key";
import { ContainerDitails } from "./style";

function Details () {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {


        const {title, poster_path, overview, release_date} = data
        const movie = {
            id,
            title,
            sinopse: overview,
            image: `${image_path}${poster_path}`,
            releaseDate: release_date
        }
        
        setMovie(movie)
        
    })}, [id])

    return (
        <ContainerDitails>
            <div className = "movie">
                <img src={movie.image} alt= {movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>

                    <span>{movie.sinopse}</span>
                    <span className="ReleaseDate">Data de lançamento: {movie.releaseDate}</span>

                    <Link to={'/'}><button>Voltar</button></Link> 
                </div>
            </div>
        </ContainerDitails>
    )
}

export default Details;