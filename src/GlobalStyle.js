import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	*{
		margin:0;
		padding:0;
		box-sizing :border-box 
	}

	html{
		font-family: 'Spartan', sans-serif;
		font-size: 62.5%;
	}

	button {
		border: none;
		outline: none;
		cursor: pointer;
	}

	h1 {
      font-size: 3.5rem;
      padding-bottom: 3rem;
    }

  	h2 {
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      font-weight: 700;
      padding-bottom: 2rem;
    }

    p {
      font-size: 1.3rem;
      color:  hsl(0, 0%, 63%);
      line-height: 1.5;
    }



`;

export default GlobalStyle;
