import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id, title, year, genres, medium_cover_image}) {
    return (
        <div>
            <h2>
                <Link to={`/movies/${id}`}>{title}</Link>
            </h2>
            <p>{year}</p>
            <img src={medium_cover_image} alt={title} />
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    medium_cover_image: PropTypes.string.isRequired,
}

export default Movie;