document.querySelectorAll(".marquee-container").forEach((cont) => {
  const content = cont.querySelector(".marquee-content");

  // clone 2x seperti jQuery lama
  cont.append(
    content.cloneNode(true),
    content.cloneNode(true)
  );

  // kasih class marquee ke semua content
  cont.querySelectorAll(".marquee-content")
    .forEach(el => {
      el.classList.add("marquee");
    });
});