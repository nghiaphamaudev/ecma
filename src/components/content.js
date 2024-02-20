const ContentComponent = () =>
  `
<div class="mx-48 ">
<div class="grid grid-cols-4 gap-4 mt-8">
  <div class=" h-80 text-black">
    <h4 class="font-bold text-lg mb-4">DANH MỤC SẢN PHẨM</h4>
    <div class="grid grid-cols-1 gap-1">
      <a href="/home/Sách tư duy - Kỹ năng sống">Sách Tư Duy - Kỹ Năng Sống</a>
      <a href="/home/Sách tiếng Việt">Sách Tiếng Việt</a>
      <a href="/home/Sách kỹ năng làm việc">Sách Kỹ Năng Làm Việc</a>
      <a href="/home/Tác phẩm kinh điển">Tác Phẩm Kinh Điển</a>
    </div>
  </div>
  <div class=" col-span-3 ">
    <h4 class="font-bold text-lg mb-4">NHÀ SÁCH TIKI</h4>
    <img src="/src//images/Rectangle.jpg" alt="" />

    <ul class="grid grid-cols-7 font-medium gap-0 ml-7 mt-4 border-b-2 pb-2">
      <li><a href="#" class="menu-link">Phổ Biến</a></li>
      <li><a href="#" class="menu-link">Bán Chạy</a></li>
      <li><a href="#" class="menu-link">Hàng Mới</a></li>
      <li><a href="#" class="menu-link">Giá Thấp</a></li>
      <li><a href="#" class="menu-link">Giá Cao</a></li>
    </ul>
    <div class="grid grid-cols-4 gap-4 mt-12">
`;
export default ContentComponent;
