// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   slidesPerGroup: 1,
//   loop: true,
//   centerSlide: "true",
//   fade: "true",
//   gragCursor: "true",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//     },
//     520: {
//       slidesPerView: 2,
//       slidesPerGroup: 1,
//     },
//     900: {
//       slidesPerView: 3,
//     },
//   },
// });
// import latestData from "../database/latestarrivals";
const productsDOM = document.querySelector(".swiper-wrapper");

class Products {
  async getLatestArrival() {
    try {
      let result = await fetch("../database/latestarrivals.json");
      let latestData = await result.json();
      let latestArrivals = latestData.items;
      latestArrivals = latestArrivals.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      console.log(latestArrivals);

      return latestArrivals;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayLatestArrivals(latestArrivals) {
    let result = "";
    latestArrivals.forEach((latestArrival) => {
      result += `        
       <div class="swiper-slide">
          <div class="card">
            <img src=${latestArrival.image} alt="" />
            <span class="end">${latestArrival.title}</span>
            <span class=""> NGN ${latestArrival.price}</span>
            <div class="cartWishlist">
              <button data-id=${latestArrival.id}>Add to cart</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="33.5px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                class="heart-icon"
              >
                <path
                  fill="none"
                  stroke="#ec0b28"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"
                />
              </svg>
            </div>
          </div>
        </div>`;
    });
    productsDOM.innerHTML = result;
  }
}

class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const latestArrivals = new Products();

  latestArrivals
    .getLatestArrival()
    .then((latestArrivals) => ui.displayLatestArrivals(latestArrivals));
});
