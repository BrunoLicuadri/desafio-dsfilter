import { useContext } from 'react';
import './styles.css';
import { ContextItemCount } from '../../utils/context-products';

type Props = {
    title: string;
}

export default function Header({ title }: Props) {
    const { contextItemCount } = useContext(ContextItemCount);

    return (
        <header className="header">
            <div className="container header-details">
                <h1>{title}</h1>
                <p>{contextItemCount} produto(s)</p>
            </div>
        </header>

    )
}