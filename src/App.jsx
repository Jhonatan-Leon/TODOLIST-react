import { UlTask } from './Components/UlTask'
import { Content } from './Layout/Content/Content'
import { FormTask } from './Components/FormTask'

function App() {
  return (
    <>
      <Content>
        <FormTask />
        <UlTask />
      </Content>
    </>
  )
}

export default App
