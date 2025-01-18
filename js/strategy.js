document.addEventListener("DOMContentLoaded", () => {
  const stepsContainer = document.querySelector(".steps-container");
  const leftColumn = document.querySelector(".left-column");
  const rightColumn = document.querySelector(".right-column");
  const centerColumn = document.querySelector(".center-column");

  const adjustLayout = () => {
    if (window.innerWidth <= 768) {
      let columnsGroup = stepsContainer.querySelector(".columns-group");

      if (!columnsGroup) {
        columnsGroup = document.createElement("div");
        columnsGroup.classList.add("columns-group");
        columnsGroup.appendChild(leftColumn);
        columnsGroup.appendChild(rightColumn);
        stepsContainer.appendChild(columnsGroup);
      }

      if (!stepsContainer.contains(centerColumn)) {
        stepsContainer.appendChild(centerColumn);
      }
    } else {
      let columnsGroup = stepsContainer.querySelector(".columns-group");
      if (columnsGroup) {
        columnsGroup.remove();
      }

      stepsContainer.appendChild(leftColumn);
      stepsContainer.appendChild(centerColumn);
      stepsContainer.appendChild(rightColumn);
    }
  };

  adjustLayout();

  window.addEventListener("resize", adjustLayout);
});
