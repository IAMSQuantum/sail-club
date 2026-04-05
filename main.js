function renderTalks(listId, options = {}) {
  const container = document.getElementById(listId);
  if (!container) return;

  const isZh = (document.documentElement.lang || "").toLowerCase().startsWith("zh");
  const labels = isZh
    ? {
        presented: "發表日期",
        presenter: "主講人／作者",
        contributors: "協作者",
        labGroup: "實驗室／團隊",
        keywords: "關鍵字",
        sourceCode: "原始碼",
        description: "簡介",
        sourceMissing: "待補"
      }
    : {
        presented: "To be presented",
        presenter: "Presenter",
        contributors: "Contributors",
        labGroup: "Lab/Group",
        keywords: "Keywords",
        sourceCode: "Source Code",
        description: "Description",
        sourceMissing: "TBD"
      };

  const start = Number.isInteger(options.start) ? options.start : 0;
  const count = Number.isInteger(options.count) ? options.count : talks.length;
  const subset = talks.slice(start, start + count);

  subset.forEach((talk, localIndex) => {
    const index = start + localIndex;
    const item = document.createElement("article");
    item.className = "talk-item";

    const sourceMarkup = talk.sourceCode
      ? `<a href="${talk.sourceCode}" target="_blank" rel="noopener noreferrer">${talk.sourceCode}</a>`
      : labels.sourceMissing;
    const labGroupMarkup = (() => {
      const text = talk.labGroup || "";
      const match = text.match(/^(.*?)(https?:\/\/\S+)$/);
      if (!match) return text;
      const label = match[1].trim() || match[2];
      const url = match[2];
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    })();

    item.innerHTML = `
      <div class="talk-summary" role="button" tabindex="0" aria-expanded="false" aria-controls="talk-details-${index}">
        <img class="talk-thumb" src="${talk.image}" alt="Image for ${talk.name}">
        <div class="talk-head">
          <h2 class="talk-name">${talk.name}</h2>
          <span class="talk-arrow" aria-hidden="true">›</span>
        </div>
        <p class="talk-presenter">${labels.presenter}: ${talk.presenter}</p>
        <p class="talk-date">${labels.presented}: ${talk.presentedDate}</p>
      </div>
      <div id="talk-details-${index}" class="talk-details">
        <div class="meta-grid">
          ${talk.imageStatus ? `<p class="meta-line"><span class="meta-label">${isZh ? "圖片" : "Picture"}:</span> ${talk.imageStatus}</p>` : ""}
          <p class="meta-line"><span class="meta-label">${labels.presenter}:</span> ${talk.presenter}</p>
          <p class="meta-line"><span class="meta-label">${labels.contributors}:</span> ${talk.contributors}</p>
          <p class="meta-line"><span class="meta-label">${labels.labGroup}:</span> ${labGroupMarkup}</p>
          <p class="meta-line"><span class="meta-label">${labels.keywords}:</span> ${talk.keywords.join(", ")}</p>
          <p class="meta-line"><span class="meta-label">${labels.sourceCode}:</span> ${sourceMarkup}</p>
          <p class="meta-line"><span class="meta-label">${labels.description}:</span> ${talk.description}</p>
        </div>
      </div>
    `;

    container.appendChild(item);
  });

  const summaries = container.querySelectorAll(".talk-summary");
  summaries.forEach((summary) => {
    const toggle = () => {
      const item = summary.closest(".talk-item");
      const isOpen = item.classList.contains("open");

      container.querySelectorAll(".talk-item").forEach((other) => {
        other.classList.remove("open");
        const btn = other.querySelector(".talk-summary");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        summary.setAttribute("aria-expanded", "true");
      }
    };

    summary.addEventListener("click", toggle);
    summary.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
}
