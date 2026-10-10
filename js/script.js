document.addEventListener("DOMContentLoaded", function () {
  var localTimeEl = document.getElementById("local-time");

  if (localTimeEl) {
    var formatter = new Intl.DateTimeFormat("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Samarkand",
    });

    var updateLocalTime = function () {
      localTimeEl.textContent = formatter.format(new Date());
    };

    updateLocalTime();
    setInterval(updateLocalTime, 30000);
  }

  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var form = document.querySelector("#contact-form");
  var status = document.querySelector("#form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = "Iltimos, barcha maydonlarni to'ldiring.";
        return;
      }

      var subject = encodeURIComponent("Saytdan xabar: " + name);
      var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
      window.location.href = "mailto:lapasovalisher88@gmail.com?subject=" + subject + "&body=" + body;

      status.textContent = "Email ilovangiz ochildi. Xabar yuborishni yakunlang.";
      form.reset();
    });
  }
});
