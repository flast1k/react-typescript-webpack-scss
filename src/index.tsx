import ReactDOM from 'react-dom/client'
import { Hello } from './components/Hello'

const App = () => <Hello />

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
