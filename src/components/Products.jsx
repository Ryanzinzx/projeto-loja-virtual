const Products = ({setCart}) => {

    const addToCart = () => {
        setCart(prev => prev + 1)
    }

    return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>
            <ProductCard produto={["Calçados"]}/>
            <ProductCard produto={["Eletrônicos"]}/>
            <ProductCard produto={["Acessórios"]}/>
            <ProductCard produto={["Roupas"]}/>
        </section>
    )
}

export default Products