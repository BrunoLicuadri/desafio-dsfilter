import { ProductDTO } from '../../../Models/product';
import './styles.css';


type Props = {
    product: ProductDTO;
}

export default function ListingCard({ product }: Props) {
    return (
        <div className="listing-card">
            <h3>{product.name}</h3>
            <span>R$ {product.price}</span>
        </div>
    )

}