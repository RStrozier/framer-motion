import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Framer from '../components/Framer';
import ExplainationPage from '../pages/ExplainationPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExplainationPage />} />
        <Route path="/framer" element={<Framer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;