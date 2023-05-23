import './styles.css';

type Props = {
    title: string;
}

export default function Header({ title }: Props) {
    return (
        <header className="header">
            <div className="container header-details">
                <h1>{title}</h1>
                <p>6 produtos</p>
            </div>
        </header>

    )
}