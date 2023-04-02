
exports.getDate = function () {
  var today = new Date();
  var msg = "";
  var options = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  if (day === "Saturday" || day === "Sunday") {
    msg = "Yay!! It's weekend.";
  } else {
    msg = "Why are you not working!";
  }
  return { day, msg };
};

