import HeaderComponent from '../components/header';
import FooterComponet from '../components/footer';
import data from '/db.json' assert { type: 'json' };
import { router, useEffect } from '../../ultilities';

const AddProduct = () => {
  useEffect(() => {
    const formData = document.getElementById('form-data');
    const newName = document.getElementById('name-book');
    const id = data.books[data.books.length - 1].id * 1 + 1;
    const newAuthor = document.getElementById('author');
    const newOriginalPrice = document.getElementById('original-price');
    const newCategoryName = document.getElementById('category');
    const newListPrice = document.getElementById('list-price');
    const newRating = document.getElementById('rating');
    const newDescription = document.getElementById('description');

    formData.addEventListener('submit', e => {
      e.preventDefault();
      const newProduct = {
        id: `${id}`,
        name: newName.value || 'Đang cập nhật',
        authors: [{ name: newAuthor.value || 'Đang cập nhật' }],
        original_price: newOriginalPrice.value || 'Đang cập nhật',
        list_price: newListPrice.value || 'Đang cập nhật',
        categories: { name: newCategoryName.value || 'Đang cập nhật' },
        rating_average: newRating.value || 'Đang cập nhật',
        short_description: newDescription.value || 'Đang cập nhật',
        images: [{ base_url: 'Đang cập nhật' }],
      };
      fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
    });
  });

  return /*html*/ `
  ${HeaderComponent()}
  <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tạo sản phẩm mới</h2>
      <form action="#" id="form-data">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sách</label>
                  <input type="text" name="name-book" id="name-book" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required placeholder="Tên sản phẩm" >
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tác Giả</label>
                  <input type="text" name="author" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required placeholder="Tên tác giả"  >
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá</label>
                  <input type="number" name="original-price" id="original-price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required placeholder="Giá niêm yết"  >
              </div>

            

              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh Mục</label>
                  <input id= "category"  type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required placeholder="Tên danh mục" >
              </div>

              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá khuyến mãi</label>
                  <input id="list-price" name="list-price" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required placeholder="Giá khuyến mãi" >
              </div>

              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Đánh giá</label>
                  <input id="rating"  type="text" inputmode="decimal" pattern="[0-9,\.]*"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required placeholder="Đánh giá">
              </div>

              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label>
                  <input id="active" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required value="" placeholder="Active">
              </div> 
              
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                  <input id="description" name="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required placeholder="Mô tả ở đây" >
              </div>
          </div>
          <button  id="add-btn" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 bg-blue-400 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Tạo sản phẩm
          </button>
      </form>
  </div>
</section>
${FooterComponet()};  
    `;
};

export default AddProduct;
