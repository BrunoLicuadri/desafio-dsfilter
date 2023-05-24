import { useState } from 'react';
import './styles.css';

type FormData ={
    minValue?: number;
    maxValue?: number;
}

type Props = {
    onFilter: Function
}

export default function Filter({onFilter}: Props) {

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event: any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(event: any){
        event.preventDefault();
        setFormData(formData);
        onFilter(formData.minValue, formData.maxValue)
    }

    return (
        <main>
            <section>
                <form onSubmit={handleSubmit} className="container">
                    <div className="filter-details">
                        <div>
                            <input 
                            name="minValue"
                            value={formData.minValue || ""}
                            className="imp-details"
                            type="text"
                            placeholder='Preço Minimo'
                            onChange={handleInputChange}
                             />
                        </div>
                        <div>
                            <input 
                            name="maxValue"
                            value={formData.maxValue || ""}
                            className="imp-details mgv20" 
                            type="text" 
                            placeholder='Preço Máximo' 
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn-details">Filtrar</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>

    )

}