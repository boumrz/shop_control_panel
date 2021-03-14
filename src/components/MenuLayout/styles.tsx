import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 250px;
    background-color: rgb(43, 45, 51);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
`;

export const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
    width: 250px;
    
    svg {
      width: 80px;
      height: auto;
      
      path {
        fill: orange;
      }
    }
`;

export const ContentBox = styled.div`
    padding-top: 20px;
    color: white;
`;

export const CustomButton = styled.button`
    width: 100%;
    background: none;
    border: none;
    height: 40px;
    color: white;
    outline: none;
    
    &:hover {
        cursor: pointer;
        background-color: grey;
    }
`;
