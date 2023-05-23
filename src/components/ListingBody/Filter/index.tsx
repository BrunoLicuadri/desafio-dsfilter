import './styles.css';

type Props = {
    btnText: string;
}

export default function Filter({ btnText }: Props) {
    return (
        <main>
            <section>
                <form className="container">
                    <div className="filter-details">
                        <div>
                            <input className="imp-details" type="text" placeholder='Preço Minimo' />
                        </div>
                        <div>
                            <input className="imp-details mgv20" type="text" placeholder='Preço Máximo' />
                        </div>
                        <div>
                            <button className="btn-details">{btnText}</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>

    )

}