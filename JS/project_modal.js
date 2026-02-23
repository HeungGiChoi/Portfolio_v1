const modal = document.getElementById("modalContainer");
const close_Btn = document.querySelector(".close");

const open_Btn = document.querySelectorAll(".modal-button");

const modalTitle = modal.querySelector("h3");
const modalSkills = modal.querySelector(".skills");
const modalDesc = modal.querySelector(".description");

open_Btn.forEach((button, index) => {
  button.addEventListener("click", () => {
    fetch("data/projects_data.json")
      .then((res) => res.json())
      .then((data) => {
        const project_data = data[index];

        modalTitle.textContent = project_data.title;
        modalSkills.innerHTML = `
          <strong>Technology Stack</strong> <br><br>
          <ul>
            ${project_data.skills.map((item) => `<li>${item}</li>`).join("")}
          <ul>
        `;
        modalDesc.innerHTML = `
          <strong>Summary: </strong> ${project_data.description}<br><br>
          <ul>
            ${project_data.details.map((item) => `<li>${item}</li>`).join("")}
          <ul>
        `;
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      })
      .catch((error) => console.error("데이터 로드 실패:", error));
  });
});

// open_Btn.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     modal.classList.add("show");
//     document.body.style.overflow = "hidden";
//     console.log(`${index + 1}번째 버튼 클릭`);
//   });
// });

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
