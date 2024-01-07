function showRandomImage() {
  // 이미지 배열 - 필요에 따라 추가 또는 수정 가능
  var images = [
    "../images/gacha/추천곡1.jpg",
    "../images/gacha/추천곡2.jpg",
    "../images/gacha/추천곡3.jpg",
    "../images/gacha/추천곡4.jpg",
    "../images/gacha/추천곡5.jpg",
    "../images/gacha/추천곡6.jpg",
    "../images/gacha/추천곡7.jpg",
    "../images/gacha/추천곡8.jpg",
    "../images/gacha/추천곡9.jpg",
    "../images/gacha/추천곡10.jpg",
    "../images/gacha/추천곡11.JPG",
    "../images/gacha/추천곡12.JPG",
    "../images/gacha/추천곡13.JPG",
    "../images/gacha/추천곡14.JPG",
    "../images/gacha/추천곡15.JPG",
    "../images/gacha/추천곡16.JPG",
    "../images/gacha/추천곡17.JPG",
    "../images/gacha/추천곡18.JPG",
    "../images/gacha/추천곡19.JPG",
    "../images/gacha/추천곡20.JPG",
    "../images/gacha/추천곡21.JPG",
    "../images/gacha/추천곡22.JPG",
    "../images/gacha/추천곡23.JPG",
    "../images/gacha/추천곡24.JPG",
    "../images/gacha/추천곡25.JPG",
    "../images/gacha/추천곡26.JPG",
    "../images/gacha/추천곡27.JPG",
    "../images/gacha/추천곡28.JPG",
    "../images/gacha/추천곡29.JPG",
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  var overlayImage = document.getElementById("overlayImage");
  overlayImage.src = randomImage;
  overlayImage.style.display = "block";
}
