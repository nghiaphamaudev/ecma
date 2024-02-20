import { useEffect, useState } from '../../ultilities';
import HeaderComponent from '../components/header';
import { isEmpty } from 'lodash';
const Update_Book = id => {
  const [book, setBook] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setDataLoaded(true); // Đặt cờ thành true khi dữ liệu được load
      });
  }, [id]);

  useEffect(() => {
    const updateBtn = document.querySelector('#update-btn');
    updateBtn.onclick = function (e) {
      e.preventDefault();
      handleUpdateBook();
    };
  });

  const handleUpdateBook = () => {
    const formData = new FormData(document.querySelector('#form-data'));
    const newName = formData.get('name-book') || book.name;
    const newAuthor =
      formData.get('author') ||
      (book.authors.length > 0 ? book.authors[0].name : '');
    const newOriginalPrice =
      formData.get('original-price') || book.original_price;
    const newCategoryName = formData.get('category') || book.categories.name;
    const newListPrice = formData.get('list-price') || book.list_price;
    const newRating = formData.get('rating') || book.rating_average;
    const newDescription =
      formData.get('description') || book.short_description;

    const data = {
      name: newName,
      authors: [
        {
          id: book.authors[0].id,
          name: newAuthor,
          slug: book.authors[0].slug,
        },
      ],
      original_price: newOriginalPrice,
      categories: {
        id: book.categories.id, // Giữ nguyên giá trị id
        name: newCategoryName,
        is_leaf: book.categories.is_leaf, // Giữ nguyên giá trị is_leaf (nếu cần)
      },
      list_price: newListPrice,
      rating_average: newRating,
      short_description: newDescription,
    };

    // Gửi request PATCH đến server
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  if (dataLoaded) {
    console.log(book);
    return /*html*/ `
            ${HeaderComponent()}
              <section class="bg-white dark:bg-gray-900">
              <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                  <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Cập nhật sản phẩm</h2>
                  <form action="#" id="form-data">
                      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                          <div class="sm:col-span-2">
                              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sách</label>
                              <input type="text" name="name-book" id="name-book" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" value ="${
                                book.name
                              }">
                          </div>
                          <div class="w-full">
                              <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tác Giả</label>
                              <input type="text" name="author" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="" value ="${
                                book.authors[0].name
                              }">
                          </div>
                          <div class="w-full">
                              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá</label>
                              <input type="number" name="original-price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" value ="${
                                book.original_price
                              }">
                          </div>

                        

                          <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh Mục</label>
                              <input name= "category" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="${
                                book.categories.name
                              }">
                          </div>

                          <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá khuyến mãi</label>
                              <input id="list-price" name="list-price" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="${
                                book.list_price
                              }">
                          </div>

                          <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Đánh giá</label>
                              <input id="rating" name='rating' type="text" inputmode="decimal" pattern="[0-9,\.]*"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="${
                                book.rating_average
                              }">
                          </div>

                          <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label>
                              <input id="active" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="???">
                          </div> 
                          
                          <div class="sm:col-span-2">
                              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                              <input id="description" name="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" value="${
                                book.short_description
                              }">
                          </div>
                          <div class="sm:col-span-2">
                              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh</label>
                              <img src="${
                                book.images[0].small_url
                              }" class="max-w-44 max-h-44" 
                             >
                          </div>
                      </div>
                      <button type="submit" id="update-btn" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 bg-blue-400 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                          Cập nhật sản phẩm
                      </button>
                  </form>
              </div>
            </section>
  
  `;
  } else {
    console.log('Đang đợi dữ liệu được load...');
  }
};
export default Update_Book;
