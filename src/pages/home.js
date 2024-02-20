import HeaderComponent from '../components/header';
import ContentComponent from '../components/content';
import ListProduct from '../components/list_product';
import FooterComponet from '../components/footer';
const HomePage = key => {
  return `
    ${HeaderComponent()}
    ${ContentComponent()}
    ${ListProduct(key)}

    </div>
        </div>
      </div>
    </div>
    ${FooterComponet()}

`;
};

export default HomePage;
