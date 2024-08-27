
interface IButtonAndChild {

    id?: string | number
    className?: string
    target?: string
    rel?: string
    onClick?: () => {}
    onMouseOver?: () => {}
    type?: string
    dataBsToggle?: string
    context?: string
    child?: any

}


export function ButtonAndChild({ id,
    className: valor,
    rel,
    onClick,
    onMouseOver,
    type,
    dataBsToggle,

}: IButtonAndChild | any, props: any) {

    const ButtonAndChild_ = <button

        id={id}
        className={valor}
        rel={rel}
        onClick={onClick}
        onMouseOver={onMouseOver}
        type={type}
        data-bs-toggle={dataBsToggle}
    >
        {props.child}


    </button>


    return (
        <>
            {ButtonAndChild_}
        </>
    )
}