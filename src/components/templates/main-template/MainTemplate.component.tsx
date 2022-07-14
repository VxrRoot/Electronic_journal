import {FC} from 'react'

// Styled Components
import {StyledMain, Wrapper} from './MainTemplate.styles';

// Components
import Navigation from 'components/molecules/navigation/Navigation.component';
import SearchBar from '../../organisms/search-bar/SearchBar.component';
import NewsSection from '../news-section/NewsSection.component';

// Model
import { ModelMainTemplate } from './ModelMainTemplate';

const MainTemplate: FC<ModelMainTemplate> = ({children}) => {
   return (
      <Wrapper>
         <Navigation />
         <SearchBar />
         <StyledMain>
            {children}
         </StyledMain>
         <NewsSection />
      </Wrapper>
   )
}

export default MainTemplate;