import React, { FC } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { routes } from './routes';
import { MenuConnect } from './pages/MenuConnect';
import './App.css';

function App() {
  return (
      <>
        <HashRouter>
          <Switch>
            {routes.map(({ getPath, component: TargetComponent, key, ...route }) => (
                <Route
                    key={key}
                    {...route}
                    path={getPath}
                    /* eslint-disable react/jsx-no-bind */
                    render={(): ReturnType<FC> => (
                        <MenuConnect>
                            <TargetComponent />
                        </MenuConnect>
                    )}
                />
            ))}
          </Switch>
        </HashRouter>
      </>
  );
}

export default App;
