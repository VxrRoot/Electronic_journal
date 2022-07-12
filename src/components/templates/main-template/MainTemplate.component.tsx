import {FC} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Components
import NavSingleItem from '../../atoms/nav-single-item/NavSingleItem.component';

export const StyledNav = styled.div`
  width: 130px;
  height: 100%;
  margin: 20px 0;
  border-right: 1px solid ${({theme}) => theme.colors.lightPurple};
  
  nav {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StyledLogo = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrey};
  padding: 13px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  
  p {
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.l};
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
`;

export const StyledMain = styled.div`
   width: calc(100% - 130px);
`;

interface IMainTemplate {
   children: any,
   navItems: {name: string, url: string}[]
}

const MainTemplate: FC<IMainTemplate> = ({children, navItems}) => {
   return (
      <Wrapper>
         <StyledNav>
            <StyledLogo>
               <p>Study</p>
               <p>Buddy</p>
            </StyledLogo>
            <nav>
               {navItems.map(item => (
                  <NavSingleItem
                     key={item.url}
                     url={item.url}
                     name={item.name}
                     isActive={false}
                  />
               ))}
            </nav>
         </StyledNav>
         <StyledMain>
            {children}
         </StyledMain>
      </Wrapper>
   )
}

export default MainTemplate;