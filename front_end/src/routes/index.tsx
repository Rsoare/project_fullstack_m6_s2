import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PublicRoutes from "../pages/PublicRoutes";
import ProtectedRoutes from "../pages/ProtectdRoutes";
import DashboardPage from "../pages/DashboardPage";

   const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<PublicRoutes />}>
         <Route path="/" element={<LoginPage />} />
         </Route>

         <Route path="/Protected" element={<ProtectedRoutes />}>
         <Route path="/Protected/Dashboard" element={<DashboardPage />} />
         </Route>
      </Routes>
   );
   };

export default Router;
