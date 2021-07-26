/* This example requires Tailwind CSS v2.0+ */
import Button from '../components/button'
import ButtonGroup from './buttonGroup'
import { Icon } from '../types/icons'

type Props = {
    title: string
}


const Header = ({
    title
}: Props) => {
    return (
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{title}</h2>
            </div>
            <ButtonGroup>

                <Button text="Reset" icon={Icon.Refresh}/>
                <Button text="Save" icon={Icon.Link}/>
                
                </ButtonGroup>
                </div>
        
    )
}

export default Header;