import React from 'react';
import { ContentLayout } from '../../components/ContentLayout';
import { HeaderLayout } from '../../components/HeaderLayout';
import { MenuLayout } from "../../components/MenuLayout";
import { MainContainer } from './styles';

export const MenuConnectView = (props: any) => {
    return (
        <MainContainer>
            <HeaderLayout />
            <MenuLayout />
            <ContentLayout>
                { props.children }
            </ContentLayout>
        </MainContainer>
    );
}