import { FC } from 'react';

// Styled Components
import {StyledLogo, StyledNav} from './Navigation.styles';

// Components
import NavSingleItem from 'components/atoms/nav-single-item/NavSingleItem.component';

// Data
import { navItemsMainTemplate } from 'data/navItems';

// Model
import { ModelNavigation } from './ModelNavigation';

const Navigation:FC<ModelNavigation> = () => {
   return (
      <StyledNav>
         <StyledLogo>
            <p>Study</p>
            <p>Buddy</p>
         </StyledLogo>
         <nav>
            {navItemsMainTemplate.map(item => (
               <NavSingleItem
                  key={item.url}
                  url={item.url}
                  name={item.name}
                  isActive={false}
               />
            ))}
         </nav>
      </StyledNav>
   );
}

export default Navigation;