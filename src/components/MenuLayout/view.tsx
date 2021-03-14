import React from 'react';
import { logo } from '../../constants/logos';
import { LogoBox, ContentBox, MainContainer, CustomButton } from "./styles";

export const MenuLayoutView = (props: any) => {
    return (
        <MainContainer>
            <LogoBox>
                {logo}
            </LogoBox>
            <ContentBox>
                <CustomButton>
                    Список отложенных товаров
                </CustomButton>
            </ContentBox>
        </MainContainer>
    );
}