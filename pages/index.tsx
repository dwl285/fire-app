import Input from '../components/input'
import { InitialConditions } from '../types/classes'
import Header from '../components/header'
import InputGroup from '../components/inputGroup'

function Index() {
  return <div >
    <h1 >Welcome to the FIRE calculator</h1>
    <Header title="Welcome to the FIRE calculator" />
    <InputGroup title="Initial conditions">
      {InitialConditions.list().map(i =>
        <Input label={i.label} initialValue={i.defaultValue} key={i.label} />
      )}
    </InputGroup>
  </div>
}

export default Index;