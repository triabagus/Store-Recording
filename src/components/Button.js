import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0;
color:var(--textWhite);
transition:all 0.3s ease-in-out !important;

/* pseudo selectors work as well */
&:hover {
    color:#ffffff;
}
`;