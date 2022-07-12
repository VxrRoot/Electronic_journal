import {FC} from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  margin: 10px 0;
  text-decoration: none;
  color: ${({theme}) => theme.colors.darkGrey};
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSize.m};
  text-align: right;
  padding: 0 24px;
  position: relative;

  &.active {
     &::after {
        opacity: 1;
     }
  }

  &::after {
      content: "";
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      position: absolute;
      width: 18px;
      height: 3px;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${({theme}) => theme.colors.darkPurple};
      right: 0;
   }
`

interface INavSingleItem {
   isActive: boolean;
   url: string;
   name: string;
}

const NavSingleItem: FC<INavSingleItem> = ({name, url,isActive}) => {
   return (
      <StyledLink 
         className={(navData) => navData.isActive ? "active" : "" } 
         to={url}
      >
         {name}
      </StyledLink>
   )
}

export default NavSingleItem