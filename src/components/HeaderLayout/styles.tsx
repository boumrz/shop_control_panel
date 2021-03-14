import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 50px;
    margin-left: 250px;
    background-color: white;
    padding-right: 15px;
`;

export const UserBox = styled.div`
    display: flex;
    align-items: center;
`;

export const LoginBox = styled.span`
    margin-right: 10px;
`;

export const ExitBox = styled.div``;

export const CustomLink = styled.a`
    text-decoration: underline;
    
    &:hover {
        cursor: pointer;
    }
`;