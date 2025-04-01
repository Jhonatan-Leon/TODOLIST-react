import { FormTask } from './Components/FormTask'
import { ListTask } from './Components/ListTask'
import { Task } from './Components/Task'
import { Content } from './Layout/Content/Content'

function App() {
  return (
    <>
      <Content>
        <FormTask />
        <ListTask>
          <Task />
        </ListTask> 
      </Content>
    </>
  )
}

export default App
