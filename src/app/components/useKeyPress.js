import { useEffect, useRef } from 'react';

const useKeyPress = (key, callback) => {
    const callBackRef = useRef(callback);

    useEffect(() => {
        callBackRef.current = callback;
    }, [])
    useEffect(() => {
        const handlePress = (event) => {
            if (event.code === key) {
                callBackRef.current(event);
            }
        }
        document.addEventListener("keypress", handlePress);
        return () => {
            document.removeEventListener("keypress", handlePress);
        }
    }, [key,callback])
}

export default useKeyPress;