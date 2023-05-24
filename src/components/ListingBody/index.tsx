import './styles.css';
import Filter from "./Filter";
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../Models/product';
import ListingCard from './ListingCard';
import * as productService from '../../services/product-service.ts';

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

    useEffect(() => {
        const newFilter = productService.findByPrice(queryParams.minValue, queryParams.maxValue);
        setProducts(newFilter);
      }, [queryParams]);

      function handleFilter(min: number, max: number){
        const valueMin = min;
        const valueMax = max;
        setQueryParams({minValue: valueMin || minPrice, maxValue: valueMax || maxPrice})
      }

    return (
        <main>
            <section>
                <Filter onFilter={handleFilter}/>
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