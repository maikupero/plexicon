import {useState} from 'react'

import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './Styles/Global';
import {lightTheme, darkTheme} from './Styles/Theme';
import ThemeIcon from './Assets/themeicon.svg';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <head>
          <title>Plexicon</title>
        </head>
        <GlobalStyles />
        <button onClick={toggleTheme}><img src={ThemeIcon} /></button>
      </div>
    </ThemeProvider>
  );
}

export default App;
