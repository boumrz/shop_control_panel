import React from 'react';
import { MainContainer } from './styles';

export const ContentLayoutView = (props: any) => {
    return (
        <MainContainer>
            { props.children }
        </MainContainer>
    );
}