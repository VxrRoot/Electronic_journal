import styled from 'styled-components';

export const Wrapper = styled.div`
	grid-row:  1 / 3;
	grid-column: 3 / 3;
	border-left: 1px solid ${({theme}) => theme.colors.darkPurple};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px;
	overflow-y: scroll;
`;

export const ArticleWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	padding: 40px 50px;
	border-radius: 12px;
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
	margin: 30px 0;
	color: ${({theme}) => theme.colors.darkGrey};
	
	p {
		line-height: 1.6;
	}
`;

export const NewsSectionHeader = styled.h2`
	margin-right: auto;
	color: ${({theme}) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
	h3 {
		margin: 0;
		font-size: ${({theme}) => theme.fontSize.xl};
	}
	
	p {
		margin: 0;
		font-size: ${({theme}) => theme.fontSize.l};
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	margin: 12px 0;
	gap: 30px;
	
	p  {
		margin: 0;
	}
	
	img {
		max-width: 200px;
		object-fit: cover;
	}
`;