type Props = {
    children?: React.ReactNode
}

const ButtonGroup = ({ children  }: Props) => {
    return (
        <div className="mt-5 flex lg:mt-0 lg:ml-4">

        {children}
        
    </div>
    )
}

export default ButtonGroup;