const gallery = document.querySelector(".gallery");

function generateHTML([h, v]) {
    return `
    <div class="item h${h} v${v}">
      <img src="images/${randomNumber(12)}.jpg">
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  `;
}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

const digits = Array.from({ length: 50 }, () => [
    randomNumber(4),
    randomNumber(4),
]).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
]);

const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;



