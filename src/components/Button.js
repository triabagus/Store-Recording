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

&:focus {
    outline:0 !important;
}
`;

export const ButtonContainers = styled.button`
// border-color:${props => props.cart ? "var(--mainYellow)": "var(--mainBlue)"};
border:0;
width: 160px;
height: 60px;
background: #f3f0f1;
position: relative;
margin-bottom: 25px;
margin-top: 15px;
border-radius: 32px;
text-align: center;
cursor: pointer;
transition: all 0.1s ease-in-out;
transform:capitalize;

.cart{
    line-height: 45px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: semibold;
}

/* pseudo selectors work as well */
&:nth-child(1){
    box-shadow:-6px -6px 10px rgba(255,255,255,0.8), 6px 6px 10px rgba(0,0,0,0.2);
    color:#6f6cde;
    
    &:hover{
        opacity:0.3;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #79e3b6;
    }

    &:focus{
        outline:0;
    }
}

&:nth-child(2){
    opacity: 0.3;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
    6px 6px 10px rgba(0, 0, 0, 0.2);
    color: #6f6cde;
}

&:nth-child(3) {
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
    inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #79e3b6;
    
    &:hover {
      opacity: 1;
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);
    }
}

`;