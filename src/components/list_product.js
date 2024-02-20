import data from '/db.json' assert { type: 'json' };
console.log(data.books[0].categories.name);

const ListProduct = key => {
  const html = value => {
    return /*html*/ `
    <div class="product mb-9">
    <img src="${
      value.images[0].base_url
    }" onclick="window.location.href='/detail/${value.id}'">

        <div class="mt-5">
        <span class="mb-3 font-normal"><a href="" onclick="window.location.href='/detail/${
          value.id
        }'">${value.name}</a></span>
        <div class="flex items-center mt-3">
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <span class="opacity-50">| Đã bán : ${
              value.quantity_sold?.value || ' 1000+'
            }</span>
        </div>
        <span class="text-red-500 text-lg">${value.list_price}đ</span>
        <span
            class="border border-red-500 border-1 w-5 ml-4 h-4 text-xs text-red-500"
            >-23%</span>
        </div>
    </div>
  `;
  };
  if (key !== ' ' && key !== undefined) {
    const sameTypeBook = data.books.filter(
      book => book.categories.name === key
    );
    return sameTypeBook.map(value => html(value)).join('');
  } else {
    return data.books.map(value => html(value)).join('');
  }
};

export default ListProduct;
