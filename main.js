function renderTalks(listId, options = {}) {
  const container = document.getElementById(listId);
  if (!container) return;

  const isZh = (document.documentElement.lang || "").toLowerCase().startsWith("zh");
  const labels = isZh
    ? {
        upcoming: "預計發表",
        past: "發表日期",
        presenter: "主講人／作者",
        contributors: "協作者",
        labGroup: "實驗室／團隊",
        keywords: "關鍵字",
        sourceCode: "原始碼",
        browserApp: "瀏覽器應用",
        description: "簡介",
        sourceMissing: "待補"
      }
    : {
        upcoming: "To be presented",
        past: "Presented",
        presenter: "Presenter",
        contributors: "Contributors",
        labGroup: "Lab/Group",
        keywords: "Keywords",
        sourceCode: "Source Code",
        browserApp: "Browser App",
        description: "Description",
        sourceMissing: "TBD"
      };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPastDate = (dateStr) => {
    const monthRe = /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})/i;
    const zhRe = /(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/;
    const m = dateStr.match(monthRe);
    let parsed;
    if (m) {
      parsed = new Date(`${m[1]} ${m[2]}, ${m[3]}`);
    } else {
      const z = dateStr.match(zhRe);
      if (z) parsed = new Date(Number(z[1]), Number(z[2]) - 1, Number(z[3]));
    }
    if (!parsed || isNaN(parsed.getTime())) return false;
    parsed.setHours(0, 0, 0, 0);
    return parsed < today;
  };

  const start = Number.isInteger(options.start) ? options.start : 0;
  const count = Number.isInteger(options.count) ? options.count : talks.length;
  const subset = talks.slice(start, start + count);

  subset.forEach((talk, localIndex) => {
    const index = start + localIndex;
    const item = document.createElement("article");
    item.className = "talk-item";

    const dateLabel = isPastDate(talk.presentedDate) ? labels.past : labels.upcoming;
    const sourceMarkup = talk.sourceCode
      ? `<a href="${talk.sourceCode}" target="_blank" rel="noopener noreferrer">${talk.sourceCode}</a>`
      : labels.sourceMissing;
    const appMarkup = talk.appLink
      ? `<a href="${talk.appLink}" target="_blank" rel="noopener noreferrer">${talk.appLink}</a>`
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
        <p class="talk-date">${dateLabel}: ${talk.presentedDate}</p>
      </div>
      <div id="talk-details-${index}" class="talk-details">
        <div class="meta-grid">
          <p class="meta-line"><span class="meta-label">${labels.presenter}:</span> ${talk.presenter}</p>
          <p class="meta-line"><span class="meta-label">${labels.contributors}:</span> ${talk.contributors}</p>
          <p class="meta-line"><span class="meta-label">${labels.labGroup}:</span> ${labGroupMarkup}</p>
          <p class="meta-line"><span class="meta-label">${labels.keywords}:</span> ${talk.keywords.join(", ")}</p>
          <p class="meta-line"><span class="meta-label">${labels.sourceCode}:</span> ${sourceMarkup}</p>
          <p class="meta-line"><span class="meta-label">${labels.browserApp}:</span> ${appMarkup}</p>
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
