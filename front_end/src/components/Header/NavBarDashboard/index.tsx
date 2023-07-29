import { useContext, useState } from "react";
import MobileMenu from "../MobileMenu";
import { ButtonNav } from "../../../styles/buttons";
import { AvatarClienteStyled, UlStyled } from "./styled";
import { LoginContext } from "../../../contexts/login";
const NavBarDashboard = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);

   const { userLogout,user} = useContext(LoginContext);
   const userName = user?.name


   const opemMenu = () => {
      setMenuOpen(!isMenuOpen);
   };

   return (
      <>
         <nav className="light-blue darken-4">
            <div className="nav-wrapper container max-width-1200">

               <a
                  href="#!"
                  className="sidenav-trigger"
                  data-target="mobile-menu"
                  onClick={opemMenu}
               >
                  <i className=" Tiny material-icons ">
                     {isMenuOpen ? "close" : "drag_handle"}
                  </i>
               </a>

               <UlStyled className="right hide-on-med-and-down">
                  <AvatarClienteStyled>
                     {userName?.substring(0,1).toLocaleUpperCase()}
                  </AvatarClienteStyled> 

                  <li>
                     <span className="Client Name">Nome: {userName}</span>
                  </li>

                  <li>
                     <ButtonNav onClick={userLogout}>Sair</ButtonNav>
                  </li>
               </UlStyled>
            </div>
         </nav>

         <MobileMenu isMenuOpen={isMenuOpen} />
      </>
   );
};

export default NavBarDashboard;
