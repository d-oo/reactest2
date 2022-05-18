import { Link } from "react-router-dom";
function Movie({ bool, id, movie }) {
  return (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} alt={movie.id} />
      <h2>
        {bool ? <Link to={`/movie/${id}`}>{movie.title}</Link> : movie.title}
      </h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
