import styled from 'styled-components';

import {Input} from '../../atoms/input/Input.styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 90px 1fr;
`;


export const StyledMain = styled.div`
   width: calc(100% - 130px);
	display: flex;
	justify-content: center;
`;
