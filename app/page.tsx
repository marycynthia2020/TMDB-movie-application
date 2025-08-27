import MovieCard from '@/component/MovieCard'
import PageTransition from '@/component/PageTransition';
import PopularMovies from '@/component/PopularMovies';
export default function Home() {
  return (
    <PageTransition>
       <PopularMovies />
    </PageTransition>
  );
}
