import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import PopularMovies from './components/PopularMovies'
import UpcomingMovies from './components/UpcomingMovies'
import TopRated from './components/TopRated'
import GenreMovieList from './components/GenreMovieList'

function App() {
  return (
   <div>
   <Header />
   <Slider />
   <ProductionHouse />
   <UpcomingMovies />
   <TopRated />
   <PopularMovies />
   <GenreMovieList />

   </div>
  )
}

export default App
