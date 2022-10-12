import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const MoviesSearcher = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const CastContent = lazy(() => import('components/CastContent/CastContent'));
const ReviewContent = lazy(() =>
  import('components/ReviewContent/ReviewContent')
);

export const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="goit-react-hw-05-movies" element={<Home />} />
        <Route
          path="goit-react-hw-05-movies/movies"
          element={<MoviesSearcher />}
        />
        <Route
          path="goit-react-hw-05-movies/movies/:movieId"
          element={<MovieDetails />}
        >
          <Route path="cast" element={<CastContent />} />
          <Route path="review" element={<ReviewContent />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
