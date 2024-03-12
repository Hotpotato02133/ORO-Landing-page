import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import('./Pages/Login'));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));


function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <GlobalStyle />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
