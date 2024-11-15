import { Link } from "react-router-dom"

interface ILinkButton {

    id?: string | number
    className?: string
    to?: string
    target?: string
    rel?: string
    onClick?: () => void
    onMouseOver?: () => void
    type?: string
    dataBsToggle?: string
    context?: string

}


export function LinkButton({ id,
    className: valor,
    to,
    target,
    rel,
    onClick,
    onMouseOver,
    type,
    dataBsToggle,
    context
}: ILinkButton | any) {

    return (
        <>
            <Link

                id={id}
                className={valor}
                to={to}
                target={target}
                rel={rel}
                onClick={onClick}
                onMouseOver={onMouseOver}
                type={type}
                data-bs-toggle={dataBsToggle}
            /* uso para tooltip */
            >
                {context}

            </Link>
        </>
    )
}