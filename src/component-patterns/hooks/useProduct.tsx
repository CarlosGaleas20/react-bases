import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/intrefaces';

interface UseProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ product, onChange, value = 0, initialValues }: UseProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount && newValue > initialValues?.maxCount ) return;

        setCounter(newValue);

        onChange && onChange({ counter: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    useEffect(() => {
        if (!isMounted.current) return;
        else isMounted.current = true;

        setCounter(value);
    }, [value]);

    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    }

}