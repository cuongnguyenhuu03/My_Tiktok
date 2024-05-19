import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, SetDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            SetDebounceValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
