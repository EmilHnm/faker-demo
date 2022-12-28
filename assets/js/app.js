"use strict";
const bannerSlider = document.querySelector("#banner-slider");
const bannerControl = [].slice.call(document.querySelectorAll(".dot"));
function changeBanner(index) {
  if (bannerSlider)
    bannerSlider.style.transform = `translateX(-${index * 33.33}%)`;
  if (bannerControl) {
    bannerControl.forEach((element) => {
      element.className = element.className.replace("active", "");
    });
    bannerControl[index].className += " active";
  }
}
const vHighlight = document.querySelector("#video-highlight");
const vMore = document.querySelector("#video-more");
const videoData = [
  {
    id: 1,
    img: "1",
  },
  {
    id: 2,
    img: "2",
  },
  {
    id: 3,
    img: "3",
  },
  {
    id: 4,
    img: "1",
  },
  {
    id: 5,
    img: "2",
  },
  {
    id: 6,
    img: "3",
  },
  {
    id: 7,
    img: "1",
  },
  {
    id: 8,
    img: "2",
  },
  {
    id: 9,
    img: "3",
  },
  {
    id: 10,
    img: "1",
  },
];
window.addEventListener("load", () => {
  if (vHighlight)
    vHighlight.innerHTML = `
             <div class="video">
                <div class="video__main">
                  <img src="./assets/image/video-img-${videoData[0].img}.png" alt="" />
                  <span class="playBtn">
                    <svg
                      width="34"
                      height="41"
                      viewBox="0 0 34 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.4359 16.98C32.2476 16.7867 31.5364 15.96 30.874 15.28C26.9902 11.0033 16.8587 4.00333 11.5559 1.86667C10.7506 1.52333 8.71452 0.796667 7.62668 0.75C6.58431 0.75 5.59064 0.99 4.64244 1.47667C3.46043 2.15667 2.51222 3.22667 1.99265 4.49C1.65818 5.36667 1.13862 7.99 1.13862 8.03667C0.619057 10.9067 0.333294 15.57 0.333294 20.7233C0.333294 25.6333 0.619053 30.1067 1.04445 33.02C1.09316 33.0667 1.61272 36.3267 2.181 37.4433C3.22337 39.4833 5.25942 40.75 7.43834 40.75H7.62668C9.04575 40.7 12.03 39.4333 12.03 39.3867C17.047 37.2467 26.9448 30.59 30.9227 26.1667C30.9227 26.1667 32.043 25.03 32.5301 24.32C33.2899 23.3 33.6666 22.0367 33.6666 20.7733C33.6666 19.3633 33.2412 18.05 32.4359 16.98Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div class="video__details">
                  <h4 class="video__details--title">
                    Đi dạo cạnh đường cao tốc Pháp Vân Cầu Giẽ ổn không? ${videoData[0].id}
                  </h4>
                  <div class="video__details--metaData">
                    <span class="views">5542 lượt xem · </span>
                    <span class="date">24/02/2020</span>
                  </div>
                </div>
              </div>`;
  if (vMore) {
    const more = videoData.map((item) => {
      return `<div class="video">
                <div class="video__main">
                  <img src="./assets/image/video-img-${item.img}.png" alt="" />
                  <span class="playBtn" onclick="setPlayVideo(${item.id})">
                    <svg
                      width="34"
                      height="41"
                      viewBox="0 0 34 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.4359 16.98C32.2476 16.7867 31.5364 15.96 30.874 15.28C26.9902 11.0033 16.8587 4.00333 11.5559 1.86667C10.7506 1.52333 8.71452 0.796667 7.62668 0.75C6.58431 0.75 5.59064 0.99 4.64244 1.47667C3.46043 2.15667 2.51222 3.22667 1.99265 4.49C1.65818 5.36667 1.13862 7.99 1.13862 8.03667C0.619057 10.9067 0.333294 15.57 0.333294 20.7233C0.333294 25.6333 0.619053 30.1067 1.04445 33.02C1.09316 33.0667 1.61272 36.3267 2.181 37.4433C3.22337 39.4833 5.25942 40.75 7.43834 40.75H7.62668C9.04575 40.7 12.03 39.4333 12.03 39.3867C17.047 37.2467 26.9448 30.59 30.9227 26.1667C30.9227 26.1667 32.043 25.03 32.5301 24.32C33.2899 23.3 33.6666 22.0367 33.6666 20.7733C33.6666 19.3633 33.2412 18.05 32.4359 16.98Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div class="video__details">
                  <h4 class="video__details--title">
                    Đi dạo cạnh đường cao tốc Pháp Vân Cầu Giẽ ổn không? ${item.id}
                  </h4>
                  <div class="video__details--metaData">
                    <span class="views">5542 lượt xem · </span>
                    <span class="date">24/02/2020</span>
                  </div>
                </div>
              </div>`;
    });
    vMore.innerHTML = more.join("");
  }
});
const setPlayVideo = (id) => {
  const video = videoData.find((item) => item.id === id);
  if (!video) {
    return;
  }
  if (!vHighlight) return;
  vHighlight.innerHTML = `
             <div class="video">
                <div class="video__main">
                  <img src="./assets/image/video-img-${video.img}.png" alt="" />
                  <span class="playBtn">
                    <svg
                      width="34"
                      height="41"
                      viewBox="0 0 34 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.4359 16.98C32.2476 16.7867 31.5364 15.96 30.874 15.28C26.9902 11.0033 16.8587 4.00333 11.5559 1.86667C10.7506 1.52333 8.71452 0.796667 7.62668 0.75C6.58431 0.75 5.59064 0.99 4.64244 1.47667C3.46043 2.15667 2.51222 3.22667 1.99265 4.49C1.65818 5.36667 1.13862 7.99 1.13862 8.03667C0.619057 10.9067 0.333294 15.57 0.333294 20.7233C0.333294 25.6333 0.619053 30.1067 1.04445 33.02C1.09316 33.0667 1.61272 36.3267 2.181 37.4433C3.22337 39.4833 5.25942 40.75 7.43834 40.75H7.62668C9.04575 40.7 12.03 39.4333 12.03 39.3867C17.047 37.2467 26.9448 30.59 30.9227 26.1667C30.9227 26.1667 32.043 25.03 32.5301 24.32C33.2899 23.3 33.6666 22.0367 33.6666 20.7733C33.6666 19.3633 33.2412 18.05 32.4359 16.98Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div class="video__details">
                  <h4 class="video__details--title">
                    Đi dạo cạnh đường cao tốc Pháp Vân Cầu Giẽ ổn không? ${video.id}
                  </h4>
                  <div class="video__details--metaData">
                    <span class="views">5542 lượt xem · </span>
                    <span class="date">24/02/2020</span>
                  </div>
                </div>
              </div>`;
};
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector("#menu");
const main = document.querySelector("main");
openMenu.addEventListener("click", () => {
  menu.classList.add("open");
  main.style.display = "none";
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  main.style.display = "block";
});
window.addEventListener("resize", () => {
  menu.classList.remove("open");
  main.style.display = "block";
});
//# sourceMappingURL=app.js.map
