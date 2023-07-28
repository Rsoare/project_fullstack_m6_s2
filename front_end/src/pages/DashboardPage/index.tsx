import Collections from "../../components/Collections";
import NavBarDashboard from "../../components/Header/NavBarDashboard";




const DashboardPage = () => {


   return (
      <>
         <header>
            <NavBarDashboard />
         </header>
         <main className="container max-width-1200">
            <Collections />
         </main>
      </>
   );
};

export default DashboardPage;
