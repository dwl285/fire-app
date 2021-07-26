import Input from '../components/input'
import { Conditions } from '../types/classes'
import Header from '../components/header'
import InputGroup from '../components/inputGroup'

function Index() {
  return <div >
    <Header title="Welcome to the FIRE calculator" />
    <InputGroup title="Initial conditions">
      {Conditions.list().map(i =>
        <Input label={i.label} initialValue={i.defaultValue} key={i.label} />
      )}
    </InputGroup>
  </div>
}

export default Index;