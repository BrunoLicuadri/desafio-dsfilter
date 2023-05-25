import './styles.css';
import Filter from "./Filter";
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../Models/product';
import ListingCard from './ListingCard';
import * as productService from '../../services/product-service.ts';
import { ContextItemCount } from '../../utils/context-products.ts';

type QueryParams = {
    minValue: number,
    maxValue: number
}

export default function ListingBody() {

    const minPrice = 0;
    const maxPrice = Number.MAX_VALUE;

    const [queryParams, setQueryParams] = useState<QueryParams>({
        minValue: minPrice,
        maxValue: maxPrice
    });

    const [products, setProducts] = useState<ProductDTO[]>([]);

    //const [contextListCount, setContextListCount] = useState<number>(0);
    const { setContextItemCount } = useContext(ContextItemCount);

    useEffect(() => {
        const newFilter = productService.findByPrice(queryParams.minValue, queryParams.maxValue);
        setProducts(newFilter);
        setContextItemCount(newFilter.length);
    }, [queryParams]);

    function handleFilter(min: number, max: number) {
        const valueMin = min;
        const valueMax = max;
        setQueryParams({ minValue: valueMin || minPrice, maxValue: valueMax || maxPrice })
    }

    return (
        <main>
            <section>
                <Filter onFilter={handleFilter} />
            </section>
            <section className="container listing-details">
                {
                    products.map(
                        product => <ListingCard key={product.id} product={product} />
                    )
                }
            </section>
        </main>


    )

}