import './lista.css';

export const ListaSuspensa = (props) => {
    /* Constantes Props */
    const labelMod = `${props.label}`;

    return(
        <div className="lista">
            <label>{labelMod}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    ) 
}