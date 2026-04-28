import { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import type { Product } from '../interfaces/product';

export const usePaymentPage = () => {

    const [ state, setState ] = useState<Product[]>([]);

    useEffect(() => {
        getProductService();
    }, []);

    const getProductService = async () =>{
    
       const result = await getProducts();

       const products =  result.slice(0, 3);

       setState(products);
    }


    return { 
        state
    }
    

}