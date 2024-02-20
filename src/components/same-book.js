const SameBook = sameBook =>
  sameBook
    .map((book, index) => {
      if (index < 6) {
        return /*html*/ `<div class="product col-span-1 max-w-52 ">
                <img src="${
                  book.images[0].small_url
                }" class="max-w-44 max-h-44" 
                onclick="window.location.href='/detail/${book.id}'">
                <span class="text-xs">${book.name}</span>
                <div class="flex items-center mt-3 text-[10px]">
                    <i class="fa-solid fa-star text-xs text-yellow-500"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500"></i>
                    <span class="opacity-50 ml-2 text-[10px]"> Đã bán : ${
                      book.quantity_sold?.value || '1000+'
                    } </span>
                </div>
                <span class="text-red-500 text-[16px]">${
                  book.original_price
                }</span>
                <span
                    class="border border-red-500 border-1 w-5 ml-4 h-4 text-xs text-red-500"
                    >-23%
                </span>
          </div>`;
      }
    })
    .join('');

export default SameBook;
