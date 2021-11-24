import React from 'react';
import ReadyPage from '../ReadyPage';
import QuesRouting from './QuesRouting';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import Drawer from '../drawer';
import { makeStyles } from '@mui/styles';
import Routing from '../Routing';
import ProtectedRoute from './ProtectedRoutes';



const QuizRouting = (props) => {
    return (
        <div>
            <Router>
                <Switch>
                    <ProtectedRoute path="/ready" exact component={ReadyPage} />
                    <Route path="/quiz" component={QuesRouting} />
                        {/* <QuesRouting />
                    </Route>     */}
                </Switch>
                
                
            </Router>
        </div>
    )
}

export default QuizRouting
