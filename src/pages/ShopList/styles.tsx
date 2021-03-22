import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    padding-top: 30px;
`;
export const PayButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: rgb(254, 230, 0);
    outline: none;
    border: none;
    border-radius: 25px;
    
    &:hover {
        cursor: pointer;
    }
`;

export const ItemsList = styled.div``;

export const Product = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    margin-left: 64px;
    margin-right: 64px;
`;

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    height: 30px;
    width: 250px;
    
    svg {
      width: 80px;
      height: auto;
    }
`;