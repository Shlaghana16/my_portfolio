// Smooth page transitions
$("a").on("click", function (e) {
  const href = $(this).attr("href");
  if (href.endsWith(".html")) {
    e.preventDefault();
    $("body").fadeOut(300, () => (window.location = href));
  }
});

// Contact form
$("#contactForm").on("submit", function (e) {
  e.preventDefault();
  alert("💌 Thank you, your message has been sent successfully!");
  this.reset();
});

// Dark/Light mode toggle
$("#themeToggle").click(function () {
  $("body").toggleClass("dark");
  $(this).text($("body").hasClass("dark") ? "☀️" : "🌙");
});

// Scroll-to-top button
$(window).scroll(function () {
  $("#topBtn").toggle($(this).scrollTop() > 300);
});
$("#topBtn").click(() => $("html, body").animate({ scrollTop: 0 }, 600));
