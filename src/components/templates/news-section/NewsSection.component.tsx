import {FC, useState, useEffect} from 'react';
import axios from 'axios';

// Styled Components
import {Wrapper, ArticleWrapper, NewsSectionHeader, TitleWrapper, ContentWrapper} from './NewsSection.styles';

// Components
import ButtonFunctional from '../../atoms/button-functional/ButtonFunctional.component';

interface IArticle {
	id: string;
	title: string;
	category: string;
	content: string;
	image: {
		url: string;
	} | null;
}

const API_TOKEN = process.env.REACT_APP_DATOCMS_TOKEN;

export const query = `
	{
	  allArticles {
	    id
	    title
	    category
	    content
	    image {
	      url
	    }
	  }
	}
`

const NewsSection:FC = () => {
	const [articles, setArticles] = useState<IArticle[]>([])
	const [error, setError] = useState('');
	
	useEffect(() => {
		axios.post('https://graphql.datocms.com/', {
			query: query
		}, {
			headers: {
				authorization: `Bearer ${API_TOKEN}`
			}
		})
			.then(({data: {data}}) => {
				setArticles(data.allArticles)
			})
			.catch(err => setError('Sorry, we couldn\'t load articles for you'))
	}, []);
	
	return (
		<Wrapper>
		   <NewsSectionHeader>News feed section</NewsSectionHeader>
			{
				error ?
					<NewsSectionHeader>{error}</NewsSectionHeader>
				:
					articles.length > 0 ? articles.map(item => (
						<ArticleWrapper key={item.id}>
							<TitleWrapper>
								<h3>{item.title}</h3>
								<p>{item.category}</p>
							</TitleWrapper>
							<ContentWrapper>
								<p>{item.content}</p>
								{item.image ? <img src={item.image.url} alt="image-article"/> : null}
							</ContentWrapper>
							<ButtonFunctional isBig={true}>
								Read more
							</ButtonFunctional>
						</ArticleWrapper>
					)) : <NewsSectionHeader>Loading...</NewsSectionHeader>
			}
		</Wrapper>
	);
};

export default NewsSection;
