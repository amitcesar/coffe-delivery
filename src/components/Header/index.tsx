import { MapPin, ShoppingCart } from "phosphor-react";
import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import coffeLogo from "../../assets/coffee-delivery-logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeLogo} alt="" />
        <HeaderButtonsContainer>
          <HeaderButton>
            <MapPin size={20} weight="fill" />
            Recife, PE
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}