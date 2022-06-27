import mainTheme from './mainTheme';
import mainThemeDark from './mainThemeDark';

const themes ={
    mainThemeDark,
    mainTheme
}

export default function getTheme(theme){
    return themes[theme]
}