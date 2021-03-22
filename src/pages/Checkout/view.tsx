import React, { useState } from 'react';
import { MainContainer, CustomH1, FullNameBox, CustomInput, CustomLabel, InputBox, AddressBox, CustomButton } from './styles';

export const CheckoutView = () => {
    const [state, setState] = useState<any>({
        values: {
            name: '',
            surname: '',
            midname: '',
            date: '',
            city: '',
            street: '',
            house: '',
            apartment: '',
        }
    });

    const handleChange = (name: string, value: React.ChangeEvent<HTMLInputElement>) => {
        let result: any = {
            name: state.values.name,
            surname: state.values.surname,
            midname: state.values.midname,
            date: state.values.date,
            city: state.values.city,
            street: state.values.street,
            house: state.values.house,
            apartment: state.values.apartment,
        }
        result[name] = value;

        setState({
            values: result
        });
    }

    const handleClick = () => {
        console.log('запрос', state.values);
    }

    return (
        <MainContainer>
            <CustomH1>Оформление заказа</CustomH1>
            <FullNameBox>
                <InputBox>
                    <CustomLabel htmlFor='name'>Имя</CustomLabel>
                    <CustomInput id='name' onChange={(e: any) => handleChange('name', e.target.value)} value={state.values.name} />
                </InputBox>
                <InputBox>
                    <CustomLabel htmlFor='surname'>Фамилия</CustomLabel>
                    <CustomInput id='surname' onChange={(e: any) => handleChange('surname', e.target.value)} value={state.values.surname}/>
                </InputBox>
                <InputBox>
                    <CustomLabel htmlFor='midname'>Отчество</CustomLabel>
                    <CustomInput id='midname' onChange={(e: any) => handleChange('midname', e.target.value)} value={state.values.midname} />
                </InputBox>
                <InputBox>
                    <CustomLabel htmlFor='date'>Дата рождения</CustomLabel>
                    <CustomInput type='date' id='date' onChange={(e: any) => handleChange('date', e.target.value)} value={state.values.date} />
                </InputBox>
                <InputBox>
                    <CustomLabel htmlFor='city'>Адрес</CustomLabel>
                    <AddressBox>
                        <CustomInput width='150' placeholder='Город' id='city' onChange={(e: any) => handleChange('city', e.target.value)} value={state.values.city} />
                        <CustomInput width='250' placeholder='Улица' id='street' onChange={(e: any) => handleChange('street', e.target.value)} value={state.values.street} />
                        <CustomInput width='100' placeholder='Дом/Подъезд' id='house' onChange={(e: any) => handleChange('house', e.target.value)} value={state.values.house} />
                        <CustomInput width='70' placeholder='Квартира' id='apartment' onChange={(e: any) => handleChange('apartment', e.target.value)} value={state.values.apartment} />
                    </AddressBox>
                </InputBox>
                <CustomButton onClick={() => handleClick()}>Оформить заказ</CustomButton>
            </FullNameBox>
        </MainContainer>
    );
}