import CategoryCard from "./category-card/CategoryCard";


const Category = () => {

    const temp = [1, 2, 3, 4];
    return (
        <div className="mx-4 md:mx-12 lg:mx-24">
        <section>
            <h1 className="my-12 md:my-24 border-b-4 border-cyan-500 text-5xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 p-4 w-fit">Category</h1>
        </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                temp.map(t => <CategoryCard key={t}></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Category;