import CategoryCard from "./CategoryCard"

const CategoryList = ({categorias}) => {
    return(
        <section className="category-list">
            <h1>Categorias</h1>
            {categorias.map(categoriaAtual => {
                <CategoryCard categorias = {categoriaAtual}/>
            })}
        </section>
    )
}

export default CategoryList