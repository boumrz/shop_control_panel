import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { testConfig } from '../../configs/testConfig';
import { service } from '../../services/deferList.service';
import { MainContainer, ItemsList, PayButton, ButtonBox, Product, ImgBox } from './styles';

export const ShopListView = () => {
    const [product, setProducts] = useState('');
    const history = useHistory();
    useEffect(() => {
        const id = '1';
        service
            .deferList(id)
            .then((res) => {
                console.log('response', res);
            })
            .catch((err) => {
                console.log('err', err);
                throw err;
            });
    }, []);
    const handleChange = (idProduct: any) => (e: any) => {
        const checkedTarget = e.target.checked;
        const datasetTarget = e.target.dataset;
        if (checkedTarget && datasetTarget && !product) {
            setProducts(idProduct);
        }
        if (!checkedTarget && datasetTarget) {
            setProducts('');
        }
    }
    const handleClick = () => {
        history.push('/checkout');
    }
    return (
        <MainContainer>
            <ItemsList>
                {testConfig.map(({ id, shopName, logo, productName, amount, count, sum }) => (
                    <Product key={id}>
                        <input type='checkbox' disabled={product !== '' && product !== id} data-id={id} id={id} name='productName' onChange={handleChange(id)} />
                        <span>{shopName}</span>
                        <ImgBox>{logo}</ImgBox>
                        <span>{productName}</span>
                        <span>{amount}</span>
                        <span>{count}</span>
                        <span>{sum}</span>
                    </Product>
                ))}
            </ItemsList>
            <ButtonBox>
                <PayButton onClick={handleClick}>Оформить заказ</PayButton>
            </ButtonBox>
        </MainContainer>
    );
}