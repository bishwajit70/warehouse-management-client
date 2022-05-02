import { useEffect, useState } from "react"

const useBest = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('bestsale.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}
export default useBest;