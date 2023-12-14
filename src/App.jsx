import { Suspense } from 'react';
import AppRoutes from '~/routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Suspense>
                <AppRoutes />
            </Suspense>
        </Router>
    );
}

export default App;
