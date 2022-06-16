const boredButton = document.getElementById("bored-button");
const card = document.getElementById("card");


async function fetchActivity(){
  const response = await fetch("https://www.boredapi.com/api/activity");
  const activity = await response.json();
  return activity;
}

boredButton.addEventListener("click", async () => {

  card.replaceChildren();
  const activity = await fetchActivity();
  // BEGIN PART 8
  for (const [key, value] of Object.entries(activity)) {
    const detail = document.createElement("p");
    detail.innerHTML = key + ": " + value;
    detail.style.background="aqua";
    detail.style.fontFamily="Times New Roman', Times, serif";
    detail.style.textTransform="uppercase";
    card.appendChild(detail);
  }
});
