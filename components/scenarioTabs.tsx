import InputGroup from '../components/inputGroup'
import Input from '../components/input'
import { Conditions } from '../types/classes'
import Button from '../components/button'
import {Icon} from '../types/icons'
import ButtonGroup from './buttonGroup'

type Props = {
    
}

const ScenarioTabs = ({  }: Props) => {
    return (
        <div className="p-8 border-2 border-gray-300 rounded-md">
            <div className="lg:flex lg:items-center lg:justify-between">
            <p>Create a scenario by changing the initial conditions and
                future assumptions below
            </p>
            <ButtonGroup>
            <Button text="Reset" icon={Icon.Refresh}/>
            <Button text="Rename" icon={Icon.Refresh}/>
            <Button text="Duplicate" icon={Icon.Refresh}/>
            <Button text="Delete" icon={Icon.Refresh}/>
            </ButtonGroup>
            </div>
        <div>
            <InputGroup title="Initial conditions">
            {Conditions.list().map(i =>
              <Input label={i.label} initialValue={i.defaultValue} key={i.label} />
            )}
          </InputGroup>
          </div>

          <div>
            <InputGroup title="Future assumptions">
            {Conditions.list().map(i =>
              <Input label={i.label} initialValue={i.defaultValue} key={i.label} />
            )}
          </InputGroup>
          </div>

          </div>
    )
}

export default ScenarioTabs;