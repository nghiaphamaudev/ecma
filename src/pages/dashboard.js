'use strict';
import HeaderComponent from '../components/header';
import { useState, useEffect } from '/ultilities';
const DashBoard = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(data => data.json())
      .then(dataParse => setBook(dataParse));
  }, []);
  console.log(books);

  //Delete Product
  const handleDelete = id => {
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE',
      header: { 'Content-Type': 'application/json' },
    });
  };

  useEffect(() => {
    const deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const message = confirm('Bạn đã chắc chưa ?');
        if (message) {
          const id = btn.dataset.id;
          handleDelete(id);
        }
      });
    });
  });

  return /*html*/ `
            ${HeaderComponent()}
            <div class="flex justify-end  mt-7 mb-7 mr-7 "> 
              <a
              href="/home/add-product" 
              class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
              +Thêm mới
              </a>
            </div>
           
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full  text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                #
            </th>
            <th scope="col" class="px-6 py-3">
                Tên Sách
            </th>
            <th scope="col" class="px-6 py-3 ">
                Mô tả
            </th>
            <th scope="col" class="px-6 py-3">
                Ảnh
            </th>
            <th scope="col" class="px-6 py-3">
                Giá
            </th>
            <th scope="col" class="px-6 py-3">
                Thao Tác
            </th>
        </tr>
    </thead>
    <tbody>
        ${books
          .map(
            (book, index) => /*html*/ `
            <tr>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  ${index + 1}
              </th>
              <td class="px-6 py-4">
                  ${book.name}
              </td>
              <td class="px-6 py-4">
                  ${book.short_description}
              </td>
              <td class="px-6 py-4 w-36">
                  <img src="${book.images[0].base_url} ">
              </td>
              <td class="px-6 py-4">
                  ${book.list_price}
              </td>
              <td class="whitespace-nowrap px-4 py-2">
              <a
              href="/update/${book.id}" 
              class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
              View
              </a>
              <button data-id="${book.id}"
              class=" btn-delete inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
              Delete
              </button>
                
              </td>
            </tr>
          `
          )
          .join('')}
        
    </tbody>
</table>
</div>

            `;
};

export default DashBoard;
