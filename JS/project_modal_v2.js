const modal = document.getElementById("modalContainer"); // modal 컨테이너
const close_Btn = document.querySelector(".close"); //  modal 닫기 버튼

// const modalButton = document.querySelectorAll(".modal-button"); // modal 열기 버튼
const project_box = document.querySelector(".project-box");

const modalTitle = modal.querySelector("h3"); // 제목
const modalSummary = modal.querySelector(".summary"); // 요약
const modalSkills = modal.querySelector(".skills"); // 기술스택 head
const modalSkillList = modal.querySelector(".skill-list"); // 기술스택 리스트
const modalMembers = modal.querySelector(".members"); // 팀원
const modalSchedule = modal.querySelector(".modal-schedule"); // 프로젝트 일정
const modalProduct = modal.querySelector(".product"); // 배포 결과물 또는 이미지
const modalBackground = modal.querySelector(".background"); // 프로젝트 배경
const modalDesc = modal.querySelector(".description"); // 상세 내용
const modalMeaning = modal.querySelector(".meaning"); // 배운점

project_box.addEventListener("click", (e) => {
  const button = e.target.closest(".modal-button");

  if (button) {
    const buttonId = button.getAttribute("id");
    // console.log(typeof buttonId);

    fetch("data/projects_data.json")
      .then((res) => res.json())
      .then((data) => {
        const project_data = data.find((item) => item.id === Number(buttonId));

        modalTitle.textContent = project_data.title;
        modalSummary.innerHTML = `
            <i class="fa-solid fa-pen"></i><strong> Summary </strong> <br><br>&emsp;${project_data.summary}
            `;
        modalSkills.innerHTML = `
            <i class="fa-solid fa-screwdriver-wrench"></i><strong> Technology Stack</strong> <br><br>
            `;
        modalSkillList.innerHTML = `
        <ul>
            ${project_data.skills.map((item) => `<li data-name=${item.name}>${item.img}</li>`).join("")}
        </ul>
        `;
        modalMembers.innerHTML = `
            <i class="fa-solid fa-people-group"></i><strong> 참여인원 : </strong> ${project_data.members}
        `;
        modalSchedule.innerHTML = `
            <i class="fa-solid fa-calendar"></i><strong> 기간 : </strong> ${project_data.schedule}
        `;
        modalProduct.innerHTML = `
            <i class="fa-solid fa-link"></i><strong> Deployment / GitHub </strong> <br><br> &emsp;<a href="${project_data.product}" target="_blank">${project_data.product}</a>
        `;
        modalBackground.innerHTML = `
            &#129300;<strong> Background </strong> <br><br>
            <ul>
            ${project_data.background.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        `;
        modalDesc.innerHTML = `
            <i class="fa-solid fa-clipboard"></i><strong> Description </strong> <br><br>
            <ul>
            ${project_data.description.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        `;
        modalMeaning.innerHTML = `
            <i class="fa-solid fa-magnifying-glass"></i><strong> Meaning </strong> <br><br>
            <ul>
            ${project_data.meaning.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        `;
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      })
      .catch((error) => console.error("데이터 로드 실패:", error));
  }
});

const close_func = () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
};

close_Btn.addEventListener("click", close_func);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    close_func();
  }
});
