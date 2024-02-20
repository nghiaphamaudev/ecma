import HeaderComponent from '../components/header';
import QuantityBooks from '../components/quantity-book';
import SameBook from '../components/same-book';
import DescriptionBook from '../components/description-book';
import FooterComponet from '../components/footer';
import PageNotFound from '../components/404Page';
import data from '/db.json' assert { type: 'json' };

const DetailProduct = keySearch => {
  console.log(keySearch);

  const currentProduct = data.books.find(
    product =>
      +keySearch === +product.id ||
      product.name.includes(keySearch) ||
      product.short_description.includes(keySearch)
  );
  console.log(currentProduct);
  if (!currentProduct) return `${PageNotFound()}`;
  const sameTypeBook = data.books.filter(
    product =>
      product.categories.name === currentProduct.categories.name &&
      product.id !== +keySearch
  );
  console.log(sameTypeBook);
  return `
      ${HeaderComponent()}
      ${QuantityBooks(currentProduct)}
      <div class="the-same ">
          <h3 class="text-xl mt-5 mx-44">Sản phẩm tương tự</h3>
          <div class="grid grid-cols-6 gap-4  mx-44 mt-6">
              ${SameBook(sameTypeBook)}
          </div>
      </div>
      ${DescriptionBook(currentProduct.description)}
      ${FooterComponet()}

  `;
};

export default DetailProduct;
