import React from 'react';
import { MainContainer, LogoBox, UserBox, LoginBox, ExitBox } from './styles';

export const HeaderLayoutView = (props: any) => {
    return (
        <MainContainer>
            <LogoBox>
                Logo
            </LogoBox>
            <UserBox>
                <LoginBox>
                    Login
                </LoginBox>
                <ExitBox>
                    <a>Выйти</a>
                </ExitBox>
            </UserBox>
        </MainContainer>
    );
}