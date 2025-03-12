const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value.trim();
  
  if (!birthdayValue) {
    resultEl.innerText = "⚠️ Por Favor insira uma data";
    resultEl.style.color = "red";
    return;
  }

  const age = getAge(birthdayValue);
  
  if (age < 0) {
    resultEl.innerText = "⚠️ Data invalida!Por favor verifique a data inserida.";
    resultEl.style.color = "red";
  } else {
    resultEl.innerText = `🎉 Sua Idade é ${age} ${age === 1 ? "anos" : "anos"} `;
    resultEl.style.color = "black";
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
