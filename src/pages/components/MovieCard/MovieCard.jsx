/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import { imgURL } from '../../../services/api'; 
import { Container, Imagem, Votos, Detalhes, DetalhesContainer } from './MovieCard-Styles';
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie, showLink = true, NoBorder = false }) => {
  return (
    <Container NoBorder={NoBorder}>
      <Imagem src={imgURL + movie.poster_path} alt={movie.id} />
      <Votos><FaStar /> {movie.vote_average}</Votos>
      {showLink && (
        <DetalhesContainer>
          <Detalhes to={`/movie/${movie.id}`}>Detalhes</Detalhes>
        </DetalhesContainer>
      )}
    </Container>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  showLink: PropTypes.bool,
  NoBorder: PropTypes.bool,
};


export default MovieCard;
