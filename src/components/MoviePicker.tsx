import { useEffect, useState } from "react"

interface Movie {
    id: number;
    Title: string;
    Price: number;
    Year: number;
    seatSelectionID: number;
}

interface MoviePickerProperties {
    onMovieChange: (movie: Movie | undefined) => void;
}

function MoviePicker({ onMovieChange }: MoviePickerProperties) {
    
    const [movies, setMovies] = useState<Movie[]>([])
    
    useEffect(() => {
        fetch("http://localhost:3000/movies")
          .then((response) => response.json())
          .then((data) => setMovies(data))
          .catch((error) => console.error("Error fetching movies:", error));
      }, []);
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMovieId = parseInt(e.target.value, 10);
        console.log("Selected movie ID:", selectedMovieId);  
      
        const selectedMovie = movies.find(
          (movie) => movie.seatSelectionID === selectedMovieId
        );
      
        console.log("Selected movie from dropdown:", selectedMovie?.Title);
      
        onMovieChange(selectedMovie);
      };

    return (
        <div className="movie-container">
            <label htmlFor="movie">Pick a movie:</label>
            <select name="movie" id="movie" onChange={handleChange}>
            <option value="">Select a movie</option>
                {movies?.map((movie) => (
                    <option key={movie.id} value={movie.id}>
                        {movie.Title} ({movie.Price} $)
                    </option>
                ))}
            </select>
        </div>
    )
}

export default MoviePicker