import Home from './pages/home'
import About from './pages/aboutus'
import Products from './pages/products'
import Product from './pages/product'
import Card from './pages/card'
import Login from './pages/login'
import NotFoundPage from './pages/notFound'
import SignUp from './pages/signUp'
import Panel from './pages/panel'
import Panelproducts from "./panel/Components/Products/Products";
import Panelcomments from "./panel/Components/Comments/Comments";
import Panelusers from "./panel/Components/Users/Users";
import Panelorders from "./panel/Components/Orders/Orders";
import Paneloffs from "./panel/Components/Offs/Offs";
import Resume from './pages/myResume'


let routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products/:postID', element: <Products /> },
    { path: '/product/:postID', element: <Product /> },
    { path: '/card', element: <Card /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFoundPage /> },
    { path: '/sign', element: <SignUp /> },
    {path: '/panel', element: <Panel />},
    { path: '/panelproducts', element: <Panelproducts/> },
    { path: '/panelcomments', element:<Panelcomments /> },
    { path: '/panelusers', element:<Panelusers /> },
    { path: '/panelorders', element:<Panelorders /> },
    { path: '/paneloffs', element:<Paneloffs /> },
    { path: '/myResume', element:<Resume /> },
]

export default routes



