
interface IDefaultButton {

    id?: string | number
    className?: string
    target?: string
    rel?: string
    onClick?: () => {}
    onMouseOver?: () => {}
    type?: string
    dataBsToggle?: string
    context?: string

}


export function DefaultButton({ id,
    className: valor,
    rel,
    onClick,
    onMouseOver,
    type,
    dataBsToggle,
    context
}: IDefaultButton | any) {

    return (
        <>
            <button

                id={id}
                className={valor}
                rel={rel}
                onClick={onClick}
                onMouseOver={onMouseOver}
                type={type}
                data-bs-toggle={dataBsToggle}
            /* uso para tooltip */
            >
                {context}
            </button>
        </>
    )
}