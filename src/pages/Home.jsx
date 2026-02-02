import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../styles/Home.css";

function Home() {
    const [search, setSearch] = useState("");

    const movies = [
        {id: 1, title: "They call him OG", release_date: "2025"},
        {id: 2, title: "John Wick", release_date: "2024"},
        {id: 3, title: "MSG", release_date: "2026"},
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(search)
        setSearch("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form"> 
                <input 
                    type="text" 
                    placeholder="Search movies..." 
                    className="search-input" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button> 

            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                        movie.title.toLowerCase().startsWith(search) && (
                            <MovieCard movie={movie} key={movie.id}/>
                    )
                )}
            </div>
        </div>
    );
}

export default Home;