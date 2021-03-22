import styled from 'styled-components';

interface Props {
    width?: string;
}

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-left: 32px;
`;

export const CustomH1 = styled.h1`
    margin-bottom: 32px;
`;

export const FullNameBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 650px;
`;

export const CustomInput = styled.input<Props>`
    height: 30px;
    ${props => props.width && `
        width: ${props.width}px;
    `}
    padding-left: 15px;
    margin: 10px;
    border-radius: 25px;
    border: 1px solid black;
    outline: none;
`;

export const CustomLabel = styled.label`
    display: block;
    text-align: center;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

export const AddressBox = styled.div`
    display: flex;
`;

export const AddressTitle = styled.h3`
    padding-left: 10px;
    margin-bottom: 0;
`;

export const CustomButton = styled.button`
    width: 200px;
    height: 40px;
    margin: auto;
    margin-top: 40px;
    background-color: rgb(254, 230, 0);
    outline: none;
    border: none;
    border-radius: 25px;
    
    &:hover {
        cursor: pointer;
    }
`;