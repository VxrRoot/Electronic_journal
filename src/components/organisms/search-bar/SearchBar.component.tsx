import {FC} from 'react';

// Styled Components
import {SearchBarWr, StatusInfo} from './SearchBar.styles';

// Components
import {Input} from '../../atoms/input/Input.styles';

const SearchBar:FC = () => (
	<SearchBarWr>
		<StatusInfo>
			<p>Logged as:</p>
			<p>
				<strong>Teacher</strong>
			</p>
		</StatusInfo>
		<Input
			name=""
			id=""
			type=""
		/>
	</SearchBarWr>
);

export default SearchBar