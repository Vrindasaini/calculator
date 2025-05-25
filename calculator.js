document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  if (dob > today) {
    document.getElementById("result").innerHTML = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("result").innerHTML =
    `You are ${years} years, ${months} months, and ${days} days old.`;
});
