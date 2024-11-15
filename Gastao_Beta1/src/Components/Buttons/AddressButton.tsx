interface IAddressButton {

    id?: string | number
    className?: string
    href?: string
    target?: string
    rel?: string
    onClick?: () => void
    onMouseOver?: () => void
    type?: string
    dataBsToggle?: string
    context?: string


}


export function AddressButton({ id,
    className: valor,
    href,
    target,
    rel,
    onClick,
    onMouseOver,
    type,
    dataBsToggle,
    context }: IAddressButton | any) {

    return (
        <>
            <a

                id={id}
                className={valor}
                href={href}
                target={target}
                rel={rel}
                onClick={onClick}
                onMouseOver={onMouseOver}
                type={type}
                data-bs-toggle={dataBsToggle}
            /* uso para tooltip */
            >
                {context}
            </a>
        </>
    )
}