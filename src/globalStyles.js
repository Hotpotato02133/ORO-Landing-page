import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --background: #F5F5F5;
   --black:#0a0b10;
   --purple:#803bec;
   --pink:#e5a1f8;
   --white:#FFFFF0;
   --nav:#35353f;
   --nav2:#3f3d56;
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}

html{
  ${"" /* overflow-y: scroll; */}
  scroll-behavior:smooth;
}

.login-form-group i {
    left: .5rem;
}

body,
html,
a {
    font-family: 'Poppins', sans-serif;
}

body{
    margin:0;
    padding:0;
    border: 0;
    outline: 0;
    background: var(--background);

    overflow-x: hidden;
}
h1{
    color: #262626;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin:0;
    padding:0;
}
a {

    text-decoration: none;
    outline: none;
}
button{
    border:none;
    outline:none;
    &:focus{
        outline:none;
    }
}

*:focus {
    outline: none;
}

img,svg{
    width:100%;
    height:auto;
}
`;

//  /* Colors */
