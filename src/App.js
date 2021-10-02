import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import CreateFunnel from './content/CreateFunnel/CreateFunnel';
import CreateFunnelImpl from './content/CreateFunnelImpl/CreateFunnelImpl';
class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/funnel" component={CreateFunnel} />
            <Route path="/funnelImpl" component={CreateFunnelImpl} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
