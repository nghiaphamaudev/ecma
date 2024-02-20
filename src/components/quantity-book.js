const QuantityBooks = data =>
  `
    <div class="number mt-6">
    <div class="grid grid-cols-3 gap-4 mx-48  text-base">
    <div class="col-span-1">
        <img src="${data.images[0].base_url}" class="" />
        <div class="grid grid-cols-5 gap-4 mt-3">
            <img src="${data.images[0].medium_url}"  />
            <img src="${data.images[0].medium_url}" />
            <img src="${data.images[0].medium_url}" />
            <img src="${data.images[0].medium_url}" />
            <img src="${data.images[0].medium_url}" />
        </div>
        
    </div>
    <div class="col-span-2">
        <div class="mb-4 font-normal text-2xl mt-6  ">${data.name}</div>
        <div class="flex items-center ">
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <i class="fa-solid fa-star text-xs text-yellow-500"></i>
            <span class="opacity-50 ml-4">(Xem 2942 đánh giá)</span>
            <span class="opacity-50"> | Đã bán : ${
              data.quantity_sold?.value || 1000
            }+</span>
        </div>
        <div class="w-[30rem] h-[7rem] bg-slate-200 text-red-500 justify-center mt-4">
                    <span class="text-5xl">${
                      data.original_price
                    } <span class="underline decoration-2 text-4xl">đ</span></span>
                    <span class="text-xs opacity-50 text-black">100.000đ
                    </span>
                    <span
                    class="border border-red-500 border-1 w-5 ml-1 h-4 text-xs text-red-500"
                    >-23%</span
                >
        </div>

        <div class="mt-4">
            <span class="text-[15px] font-bold">Số lượng</span>
            <div class="flex items-center gap-0">
            <button class="w-7 h-7 border-solid border-2 border-zinc-700 opacity-50 bg-white">-</button>
            <input type="tert" class="w-7 h-7 border-solid border-2 border-zinc-700 opacity-50 bg-white ml-0"></input>
            <button class="w-7 h-7 border-solid border-2 border-zinc-700 opacity-50 bg-white">+</button>
        </div>
        <div class="w-[21rem] h-12 flex justify-center items-center bg-red-500 rounded-lg mt-4">
            <span class="font-bold text-xs text-white">Chọn mua</span>
        </div>
        </div>
    </div>
    </div>
`;
export default QuantityBooks;
