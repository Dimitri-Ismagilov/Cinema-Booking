import { useEffect, useState } from "react"

function MoviePicker() {
    interface Movie {
        id: number;
        Title: string;
        Price: number;
        Year: number;
    }

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect (() => {
        fetch('http://localhost:3000/movies')
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.error('Error fetching movies:', error));
    }, []); // måste göra om till react-toastify
    
    return (
        <div className="movie-container">
            <label htmlFor="movie">Pick a movie:</label>
            <select name="movie" id="movie">
                {movies.map((movie) => (
                    <option key={movie.id} value={movie.Price}>
                        {movie.Title} ({movie.Price} kr.)
                    </option>
                ))}
            </select>
        </div>
    )

}

export default MoviePicker