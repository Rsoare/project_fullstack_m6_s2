import { UlStyled } from "./styled";
import { ButtonNavMob } from "../../../styles/buttons";
import { useContext } from "react";
import { LoginContext } from "../../../contexts/login";

interface iMenuOpenProps {
   isMenuOpen: boolean;
}
const MobileMenu = ({ isMenuOpen }: iMenuOpenProps) => {
   const { userLogout, } = useContext(LoginContext);

   return (
         <UlStyled
            className={` ${isMenuOpen ? "sidenav-open" : "sidenav"}`}
            id="mobile-nav"
         >
            <li>
               <ButtonNavMob onClick={userLogout}>Sair</ButtonNavMob>
            </li>
         </UlStyled>
   );
};

export default MobileMenu;
