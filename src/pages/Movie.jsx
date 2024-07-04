/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "./components/MovieCard/MovieCard";
import { Container, ContainerContent, Description, MovieTagline, TitleDescription } from "./Movie-Styles";
import Navbar from '../pages/components/navbar/Navbar';
import { moviesURL, apiKey } from "../services/api";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovie = useCallback(async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, [id, getMovie]);

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  if (loading) return <Description>Carregando...</Description>;
  if (error) return <Description>Ocorreu um erro ao carregar os dados.</Description>;

  return (
    <Container>
      <Navbar />
      {movie && (
        <ContainerContent>
          <MovieCard movie={movie} showLink={false} NoBorder ={true} />
          {movie.tagline && <MovieTagline>{movie.tagline}</MovieTagline>}
          <TitleDescription>
            <BsWallet2 /> Orçamento:
            <Description>{formatCurrency(movie.budget)}</Description>
          </TitleDescription>
          <TitleDescription>
            <BsGraphUp /> Receita:
            <Description>{formatCurrency(movie.revenue)}</Description>
          </TitleDescription>
          <TitleDescription>
            <BsHourglassSplit /> Duração:
            <Description>{movie.runtime} minutos</Description>
          </TitleDescription>
          <TitleDescription>
            <BsFillFileEarmarkTextFill /> Descrição:
            <Description>{movie.overview}</Description>
          </TitleDescription>
        </ContainerContent>
      )}
    </Container>
  );
};



export default Movie;
