import { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import type { Product } from '../interfaces/product';

type Payment = {
    subtotal: number;
    products: Product[];
    total: number;
}

export const usePaymentPage = () => {
    const [value, setValue] = useState(0);
    const [state, setState] = useState<Payment>({ total: 0, subtotal: 0, products: [] });

    useEffect(() => {
        getProductService();
    }, []);

    const getProductService = async () => {

        const result = await getProducts();

        const products = result.slice(0, 3);

        const subtotal = products.reduce((acc, item) => acc + Number(item.price), 0);

        const iva = subtotal * 0.16;
        const total = subtotal + iva;

        setState(prev => ({ ...prev, subtotal, total, products }));
    }

     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return {
        value,
        handleChange,
        state
    }


}