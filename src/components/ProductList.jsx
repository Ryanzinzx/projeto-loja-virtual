import ProductCard from "./ProductCard"

const ProductList = ({ produtos }) => {
    return (
        <section className="product-list">
            <h1>Produtos</h1>
            {produtos.map(ProductAtual => {
                <ProductCard produtos={ProductAtual} />
            })}
        </section>
    )
}

export default ProductList 