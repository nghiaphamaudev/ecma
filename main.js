import Navigo from 'navigo'; // When using ES modules.
import {} from './style.css';

// import Home from './src/pages/home';
import { render, router } from './ultilities';
import HomePage from './src/pages/home';
import DetailProduct from './src/pages/detail';
import PageNotFound from './src/components/404Page';
import DashBoard from './src/pages/dashboard';
import Update_Book from './src/pages/update';
import AddProduct from './src/pages/add';
import { add } from 'lodash';

router.on('/', () => render('.container', () => HomePage(undefined)));
router.on('/home/:key', ({ data }) => {
  render('.container', () => HomePage(data.key));
});
router.on('/search/:key', ({ data }) => {
  render('.container', () => DetailProduct(data.key));
});

router.on('/home/add-product', () => {
  render('.container', AddProduct);
});
router.on('/detail/:id', ({ data }) =>
  render('.container', () => DetailProduct(data.id))
);
router.on('/dashboard/', () => {
  render('.container', DashBoard);
});

router.on('/update/:id', ({ data }) =>
  render('.container', () => Update_Book(data.id))
);
router.notFound(() => render('.container', PageNotFound()));
router.resolve();
