// 모달 컨테이너
const modal = document.querySelector(".modal");
// 투명 버튼
const open_btn = document.querySelector("button");
// 닫기 버튼
const close_btn = document.querySelector(".close");

//모달 열기 함수와
open_btn.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
});

//모달 닫기 함수를 만들기
const close_modal = () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
};

close_btn.addEventListener("click", close_modal);

//배경 클릭 시 모달창 닫기
window.addEventListener("click", (element) => {
  if (element === modal) {
    close_modal();
  }
});
