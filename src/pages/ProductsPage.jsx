import { useEffect, useState } from "react"

const ProductsPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [products, setProducts] = useState([])
    const [joias, setJoias] = useState([])

    useEffect(()=> {
        fetch(`${API_URL}products/category/electronics`)
        .then((results) => results.json())
        .then((data) => setProducts(data))

        fetch(`${API_URL}products/category/jewerlery`)
            .then((results) => results.json())
            .then((data) => setJoias(data))
    }, [])

    return (
        <section>
            <h1>Página de Produtos</h1>
            {products.map(produtoAtual => (
                <div>
                    <h2>{produtoAtual.title}</h2>
                    <img src="{produtoAtual.image}"/>
                </div>
            ))}
        </section>
    )
}

export default ProductsPage