import ReactDOM from 'react-dom'
import App from './components/App'
import { store } from './store'
import { Provider } from 'react-redux'

// global styles
import styles from './index.module.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
