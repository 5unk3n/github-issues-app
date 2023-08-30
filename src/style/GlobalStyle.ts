import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body,h1,h2,p {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  ul { 
    list-style: none;
    margin: 0;
    padding: 0;
  
  }

`;
