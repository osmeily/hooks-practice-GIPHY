import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './containers/App';

const StyledindexDiv = styled.div` 
background: rgb(195,34,183);
background: linear-gradient(0deg, rgba(195,34,183,1) 0%, rgba(72,45,253,1) 100%);
color: white;
`

ReactDOM.render(
  <StyledindexDiv>
    <App />
  </StyledindexDiv>,
  document.getElementById('root')
);


