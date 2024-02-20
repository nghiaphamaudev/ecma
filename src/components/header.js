'use strict';
const HeaderComponent = () => /*html*/ `
<header class="w-full bg-blue-500 h-28 flex items-center">
<img src="/src//images///Group 1.png" class="w-20 h-16 ms-56" alt="" onclick="window.location.href='/'"/>
<form class='flex items-center' id="form">
  <input type="text" id="key-search" class="w-[450px] h-8 ms-24" />
    <span
      class="w-32 h-8 bg-sky-700 text-white flex justify-center items-center mr-4"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input type='submit' value="Tìm Kiếm"/>
      </span
    >
</form>
<div class="text-white flex ms-0">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-8 h-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>

  <div class="user grid grid-rows-2 gap-0 font-bold font-sans ml-2 mr-10">
    <a href="#" class="block text-xs">Đăng Nhập / Đăng Kí</a>
    <a href="#" class="block text-xs">Tài khoản &#9660; </a>
  </div>
</div>
<div class="flex text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-8 h-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
  <a class="text-xs mt-4 font-bold">Giỏ Hàng</a>
</div>
<div class="flex text-[14px]  text-white ml-7">
<i class="fa-solid fa-user-gear"></i>
  <a class="mt-4 font-bold" href="/dashboard">Admin</a>
</div>
</header>
`;
export default HeaderComponent;
document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.getElementById('form');
  if (formElement) {
    formElement.addEventListener('submit', e => {
      e.preventDefault();
      const keySearch = document.getElementById('key-search').value;
      window.location.href = `/search/${keySearch}`;
    });
  }
});
