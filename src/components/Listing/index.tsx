import './style.css';
import * as productService from '../../services/product-service.ts';
import ListingCard from '../ListingCard/index.tsx';


export default function Listing() {
    
    return (
        <main>
            <section className="container listing-details">
                {
                    productService.findAll().map(
                        product => <ListingCard key={product.id} product={product} />
                    )
                }
                
            </section>

        </main>

    )
}