/* Dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Views */
import Games from '../views/Games';
import Ads from '../views/Ads';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Games />} />
        <Route path='/games/:gameId/ads' element={<Ads />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;