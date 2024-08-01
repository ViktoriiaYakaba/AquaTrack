import { Routes, Route, Router } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { SharedLayout } from "./SharedLayout/SharedLayout";


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
 

export const App = () => {
  return (
    <SharedLayout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
     </Suspense> 
    </SharedLayout>
  )
}


