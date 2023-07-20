import { createGlobalStyle } from 'styled-components';

// Pallete URL: https://coolors.co/palette/0E1120-0D111C-2E3443-131A2A-4C82FB-38476C-232735

const GlobalStyle = createGlobalStyle`
:root {
     --max-width: 1340px;
     --font-white: #fff;
     --font-gray: #98A1C0;
     --font-big: 1.5rem;
     --font-medium: 1.25rem;
     --font-large: 2.25rem;
     --weight-small: 400;
     --weight-normal: 500;
     --weight-big: 600;
     --hover: #171e2c;
     --background: #111524;
     --search: #232735;
     --border: #2e3443;
     --picker-background: #0D111C;
     --picker: #131A2A;
     --button: #323B52;
}
* {
     box-sizing: border-box;
     font-family: 'Inter', sans-serif;
     font-weight: 500;
     a {
         text-decoration: none;
    }
     button {
         all: unset 
    }
}
 body {
     margin: 0;
     padding: 0;
     background-color: var(--background);
     color: var(--font-white);
}
 *::-webkit-scrollbar, *::-webkit-scrollbar-thumb {
     width: 26px;
     border-radius: 13px;
     background-clip: padding-box;
     border: 10px solid transparent;
}
 *::-webkit-scrollbar-thumb {
     box-shadow: inset 0 0 0 10px var(--picker);
}

`;

export default GlobalStyle;
