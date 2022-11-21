export default function InputComponent({
    placeHolder = 'Texto do placeholder',
    classNameInput,
    classNameLabel,
    id = 'id_input',
    name = 'input',
    type = 'text',
    labelDescription = 'Descrição do label'

}) {

    return (
        <>
            <label className={classNameLabel}> {labelDescription} </label>
            <input id={id}
                name={name}
                placeholder={placeHolder}
                type={type}
                className={classNameInput} />
        </>
    );
}

