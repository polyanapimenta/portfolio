import React from 'react'
import './App.css'
import 'fomantic-ui-css/semantic.css'

// Layout
import AppHeader    from './components/AppHeader'
import AppMenu      from './components/AppMenu'
import AppTech      from './components/AppTech'
import AppProjects  from './components/AppProjects'
import AppClients   from './components/AppClients'
import AppHistory   from './components/AppHistory'
import AppEducation from './components/AppEducation'
import AppFooter    from './components/AppFooter'

// Multi Language
import counterpart from 'counterpart'
import en from './lang/en-en'
import pt from './lang/pt-br'

counterpart.registerTranslations('pt', pt)
counterpart.registerTranslations('en', en)
counterpart.setLocale('pt')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lang: 'pt' } 
    this.handleLang = this.handleLang.bind(this);
  }

  handleLang(e) {
    this.setState({ lang: e })
    counterpart.setLocale(e)
  }

  render() {
    return(
      <React.Fragment>
        <AppHeader onClick={this.handleLang} lang={this.state.lang} />
        <AppMenu />
        <AppTech />
        <AppProjects />
        <AppClients />
        <AppHistory />
        <AppEducation />
        <AppFooter />
      </React.Fragment>
    )
  }
}

export default App