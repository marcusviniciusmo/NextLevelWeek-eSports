/* Dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Views */
import Games from '../views/Games';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;