import { useState } from 'react';
import './styles.css';

type Props = {
    btnText: string;
}

type FormData ={
    minValue?: number;
    maxValue?: number;
}

export default function Filter({ btnText }: Props) {

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event: any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(event: any){
        event.preventDefault();
        console.log(formData.minValue || 0);
        console.log(formData.maxValue || Number.MAX_VALUE);
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
                            <button type="submit" className="btn-details">{btnText}</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>

    )

}