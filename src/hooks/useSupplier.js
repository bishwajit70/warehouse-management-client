import { useEffect, useState } from "react"

const useSupplier = () => {
    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
        fetch('suppliers.json')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, [])
    return [suppliers, setSuppliers];
}
export default useSupplier;