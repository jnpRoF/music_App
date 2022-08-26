const allCarouselItems_el = document.querySelectorAll(".slider");
let currentItemIndex = 0;
const moveItems = () => {
  allCarouselItems_el.forEach(function (carouselItem_el) {
    carouselItem_el.style.transform = `translateY(-${currentItemIndex}00%)`;
  });
};
setInterval(() => {
  currentItemIndex =
    currentItemIndex === allCarouselItems_el.length - 1
      ? 0
      : currentItemIndex + 1;
  moveItems();
}, 5000);

let Img = document.querySelector(".immg");
let searchInput = document.querySelector(".search-input");


  
searchInput.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
     const query = e.target.value.toLowerCase().trim();
     const options = {
       method: "GET",
       headers: {
         "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
         "X-RapidAPI-Key": "dc962423ccmsha601308a70c5ed3p19cb09jsnd0d31d754920",
       },
     };
     const artistsApi = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
     const musick = fetch(artistsApi, options)
       .then((res) => res.json())
       .then((res) => {
         console.log(res);

         let artistName = res.artists.items[0].data.profile.name;
         let artistImg =
           res.artists.items[0].data.visuals.avatarImage.sources[0].url;
         console.log(artistName);
         let artistHtml = `<div class="artist-cont">
        <div class="artist-info">
        <p class="artist_name">${artistName}</p>
        <p>Song Title:${res.albums.items[0].data.name}</p>
  <p>Release Date:${res.albums.items[0].data.date}</p>
  </div>
      <img src=${artistImg} alt="" class="artist_img">
    </div>`;
         document.querySelector(".display").innerHTML = artistHtml;
       })
       .catch((err) => console.error(err));
  }
 
     
     
    
    });


// let gt = JSON.parse(localStorage.getItem("music"));
// console.log(gt);
// use aync await and rapid api way later
// Img.src = res.artists.items[0].data.visuals.avatarImage.sources[0].url;
// let savedItem = localStorage.setItem("music", JSON.stringify(res));
