import React from 'react';
import 'components/Router.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from 'components/Navigation';

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <div className="approuter">
                <Switch>
                    {isLoggedIn ? 
                    (<>
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser} />
                        </Route>
                    </>) : (<Route exact path="/">
                        <Auth refreshUser={refreshUser} />
                    </Route>)}
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;