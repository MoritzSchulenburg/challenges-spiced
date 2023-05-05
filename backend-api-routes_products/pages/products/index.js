import useSWR from "swr";

const fetcher = (...args)=> fetch (...args).then((res) => res.json());

function Products(){
    const {data}= useSWR("/api:::")
}

export default function ProductsPage() {
    const data = useSWR('/api/products', fetcher);

    if (!data) {
        return <h1>Loading...</h1>
    }

    if (error){
        console.error(error);
        return <h1>something went wrong</h1>
    }

    return {
        <>
        <h1>All Products</h1>
        <ul>
        </ul>

        </>
    }
}