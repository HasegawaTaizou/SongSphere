const searchInput = document.querySelector(".search__input");

const getArtist = function () {
  const searchInputValue = searchInput.value.split(" ").join("-").toLowerCase();
  console.log(searchInputValue);

  localStorage.setItem("artistName", searchInputValue);
};

searchInput.addEventListener("blur", getArtist);
