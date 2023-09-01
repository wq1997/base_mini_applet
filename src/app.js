import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from "@/components";
import configStore from "./dva";
import './app.scss'
const store = configStore();
window.store = store;

function App({ children }) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
