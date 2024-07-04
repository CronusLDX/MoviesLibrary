
import {React ,useState,useEffect} from 'react'

import {moviesURL , apiKey} from '../../../services/api'

import {Container,MoviesContainer,Title,Loading} from './HomeContent-Styles'
import MovieCard from '../MovieCard/MovieCard'

const HomeContent = () => {
  const [topMovies,setTopMovies] = useState([])
    const getTopMovies = async (url)=>{
      const res = await fetch(url)
      const data = await res.json()
      setTopMovies(data.results)
      console.log(data.results)
    }

    useEffect(()=>{
     const topMoviesURL = (`${moviesURL}top_rated?${apiKey}`)
     console.log(topMoviesURL)
     getTopMovies(topMoviesURL)

    },[])

    return (
      <Container>
        <Title>Melhores Filmes da História do Cinema Moderno</Title>
        {topMovies.length === 0 && <Loading>Carregando...</Loading>}
        <MoviesContainer>
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <h4 key={movie.id}><MovieCard key={movie.id} movie={movie}/></h4>
            ))}
        </MoviesContainer>
      </Container>
    );
    
}

export default HomeContent
