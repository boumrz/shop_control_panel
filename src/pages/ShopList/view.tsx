import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { service } from '../../services/deferList.service';
import { MainContainer, ItemsList, PayButton, ButtonBox, Product } from './styles';

export const ShopListView = () => {
    const [product, setProducts] = useState<any>('');
    const [productId, setProductId] = useState<any>('');
    const history = useHistory();
    useEffect(() => {
        const id = 1;
        service
            .deferList(id)
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log('err', err);
                throw err;
            });
    }, []);
    const handleChange = (idProduct: any) => (e: any) => {
        const checkedTarget = e.target.checked;
        const datasetTarget = e.target.dataset;
        if (checkedTarget && datasetTarget && !productId) {
            setProductId(idProduct);
        }
        if (!checkedTarget && datasetTarget) {
            setProductId('');
        }
    }
    const handleClick = () => {
        history.push('/checkout');
    }
    console.log('product', productId);
    return (
        <MainContainer>
            <ItemsList>
                {/*{product && product.products.map(({ id, shopName, logo, productName, amount, count, sum }) => (*/}
                {product && product.products.map(({ id, productName, amount, shopName, quantity }: any) => (
                    <Product key={id}>
                        <input type='checkbox' disabled={productId !== '' && productId !== id} data-id={id} id={id} name='productName' onChange={handleChange(id)} />
                        <span>{shopName}</span>
                        <span>{productName}</span>
                        <span>{quantity}</span>
                        <span>{quantity * amount}</span>
                        <span>{amount}</span>
                    </Product>
                ))}
            </ItemsList>
            <ButtonBox>
                <PayButton onClick={handleClick}>Оформить заказ</PayButton>
            </ButtonBox>
        </MainContainer>
    );
}