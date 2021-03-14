import React from 'react';
import { MainContainer, UserBox, LoginBox, ExitBox, CustomLink } from './styles';

export const HeaderLayoutView = (props: any) => {
    return (
        <MainContainer>
            <UserBox>
                <LoginBox>
                    Login
                </LoginBox>
                <ExitBox>
                    <CustomLink>Выйти</CustomLink>
                </ExitBox>
            </UserBox>
        </MainContainer>
    );
}