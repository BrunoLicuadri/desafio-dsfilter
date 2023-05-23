import './style.css';
import * as productService from '../../../services/product-service';
import ListingCard from './ListingCard';


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