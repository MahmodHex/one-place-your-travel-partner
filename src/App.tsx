import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { OffersPage } from './pages/OffersPage';
import { UtilitiesPage } from './pages/UtilitiesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/utilities" element={<UtilitiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
