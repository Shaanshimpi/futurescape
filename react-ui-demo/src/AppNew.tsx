import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/Home';
import { GalleryPage } from './pages/Gallery';
import { ArtworkDetailPage } from './pages/ArtworkDetail';
import { ArtistsPage } from './pages/Artists';
import { ArtistDetailPage } from './pages/ArtistDetail';
import { CollectionsPage } from './pages/Collections';
import { InsightsPage } from './pages/Insights';
import { AboutPage } from './pages/About';

const AppNew: React.FC = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="artwork/:slug" element={<ArtworkDetailPage />} />
            <Route path="artists" element={<ArtistsPage />} />
            <Route path="artist/:slug" element={<ArtistDetailPage />} />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default AppNew;

