/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from '../pages/components/MovieCard/MovieCard';
import Footer from './components/Footer/Footer'
import Navbar from '../pages/components/navbar/Navbar';
import { MoviesContainer, Title } from "./components/HomeContent/HomeContent-Styles";
import { searchURL, apiKey } from "../services/api";
import { Container } from "./Search-Styles";

const Loading = () => <div>Loading...</div>;


const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch  {
      alert("Algo Deu errado")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const searchMoviesURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchMoviesURL);
  }, [query]);

  if (loading) return <Loading />;
 ;
  ;

  return (
    <Container>
      <Navbar />
      <Title>Resultados por: {query}</Title>
      <MoviesContainer>
        {movies.length > 0 && 
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showLink={true} NoBorder={false} />
          ))
        }
      </MoviesContainer>
      <Footer />
    </Container>
  );
};

export default Search;
