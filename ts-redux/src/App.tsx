import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import store from "./store/index"
import Home from "./assets/components/Home"

const App = function () {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
export default App
