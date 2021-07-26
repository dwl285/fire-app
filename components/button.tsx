import {
    LinkIcon,
    RefreshIcon,
} from '@heroicons/react/solid'
import { Icon } from '../types/icons'

class Icons {
    public static get(icon: Icon) {
        const classes = "-ml-1 mr-2 h-5 w-5 text-gray-500";
        return {
            [Icon.Refresh] : <RefreshIcon className={classes} aria-hidden="true" />,
            [Icon.Link] : <LinkIcon className={classes} aria-hidden="true" />
        }[icon]
    }
}

type Props = {
    text: string,
    icon: Icon
}

const Button = ({ text, icon }: Props) => {
    return (
        <span className="hidden sm:block ml-3">
        <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {Icons.get(icon)}
            {text}
        </button>
        </span>
    )
}

export default Button;