import { useState } from "react";
import CategoryCard from "./category-card/CategoryCard";
import useAxiosSecure from "../../../custom-hooks/useAxiosSecure";
import { useEffect } from "react";


const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/category')
            .then(res => {
                // console.log(res?.data);
                setCategoryData(res?.data);
            })
            .catch(error => console.log(error.message));
    }, [])


    return (
        <div className="mx-4 md:mx-12 lg:mx-24">
        <section>
            <h1 className="my-12 md:my-24 border-b-4 border-cyan-500 text-5xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 p-4 w-fit">Category</h1>
        </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                categoryData?.map((category, i) => <CategoryCard key={i} category={category}></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Category;