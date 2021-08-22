import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/login' component={LoginPage} />

         </Switch>
      </BrowserRouter>
   )
}

