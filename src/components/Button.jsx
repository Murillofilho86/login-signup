import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function ButtonComponent({
    desctiption = 'Texto do butão',
    classNameButton = '',
    id = 'id_button',
    typeButton = 'type_button',
    nameButtonn = 'name_button',
    onClickButton = null }) {
    return (

        <button
            className={classNameButton}
            id={id}
            type={typeButton}
            name={nameButtonn}
            onClick={onClickButton}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            {desctiption}</button>
    );
}