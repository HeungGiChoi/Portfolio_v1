// const project_box = document.querySelector(".project-box");
const project_card = project_box.querySelectorAll(".project-box-wrapper");

const checkboxes = document.querySelectorAll("input[type='button']");

const project_card_array = Array.from(project_card);

// 체크된 요소 value에 해당되는 프로젝트 카드(status) 배열을 활용해 HTML에 재 렌더링 한다.
function lender_html(project) {
  project_box.innerHTML = project.map((card) => card.outerHTML).join("");
}

// 체크박스에서 체크된 요소의 value를 배열로 모아놓자
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const boxValues = Array.from(checkboxes)
      .filter((box) => box.checked)
      .map((p) => p.value);

    console.log(boxValues);
    const show_card = [];

    // 체크박스 value 배열과 프로젝트 카드 status 값을 비교해서 value와 같은 프로젝트 카드를 배열에 저장.
    boxValues.forEach((value) => {
      project_card_array.forEach((card) => {
        if (value === card.getAttribute("status")) {
          show_card.push(card);
        }
      });
    });
    console.log(show_card);
    lender_html(show_card);
  });
});

// 맨처음에는 모든 프로젝트 카드 다 렌더링 한다.
lender_html(project_card_array);
