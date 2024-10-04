
interface IDefaultButton {

    id?: string | number
    className?: string
    target?: string
    rel?: string
    onClick?: () => void
    onMouseOver?: () => void
    type?: string
    dataBsToggle?: string
    context?: string
    child?: ChildNode

}


export function DefaultButton({ id,
    className: valor,
    rel,
    onClick,
    onMouseOver,
    type,
    dataBsToggle,
    context,
}: IDefaultButton | any) {

    const DefaultButton_ = <button

        id={id}
        className={valor}
        rel={rel}
        onClick={onClick}
        onMouseOver={onMouseOver}
        type={type}
        data-bs-toggle={dataBsToggle}
    >
        {context}


    </button>


    return (
        <>
            {DefaultButton_}
        </>
    )
}