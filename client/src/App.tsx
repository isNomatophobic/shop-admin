import 'shared/styles/index.css'
import 'shared/styles/theme.css'

import { Input } from 'shared/components'

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Input type="email" placeholder="Email" width="100px" />
    </div>
  )
}

export default App
