import {FC} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  margin: 10px 0;
  text-decoration: none;
  color: ${({theme}) => theme.colors.darkGrey};
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSize.m};
  text-align: right;
  padding: 0 24px;
`

interface INavSingleItem {
   isActive: boolean;
   url: string;
   name: string;
}

const NavSingleItem: FC<INavSingleItem> = ({name, url,isActive}) => {
   return (
      <StyledLink to={url}>
         {name}
      </StyledLink>
   )
}

export default NavSingleItem