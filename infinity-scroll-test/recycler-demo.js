
const scrollView = document.getElementById("scroll-view");
const dbSize = 200;
const initialAmount = 20;
const db = setDB(dbSize);
const infinityScroll = new InfinityScroll(
  scrollView,
  600,
  db.slice(0, initialAmount)
);
scrollView.appendChild(infinityScroll);

function setDB(size) {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push({
      counter: i,
      title: `No ${i}`,
      ratio: Math.random() * 0.2 + 0.3
    });
  }
  return result;
}
