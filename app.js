const submitBtn = document.querySelector(".submitBtn");
const birthDate = document.querySelector(".bDate");

function clickHandler(e) {
  e.preventDefault();
  const dateInput = birthDate.value;
  console.log(dateInput);
  const date = dateInput.split("-");
  let joinedDate = parseInt(date.join(""));
  console.log(joinedDate);
  console.log(typeof joinedDate);

  const originalNo = joinedDate;
  let reverseNo = 0;

  while (joinedDate > 0) {
    let remainder = joinedDate % 10;
    reverseNo = reverseNo * 10 + remainder;
    joinedDate = joinedDate / 10;
  }

  if (originalNo === reverseNo) {
    console.log("Hey Congratulations, your birthday is palindrome");
  } else {
    console.log("Sorry, your birthday is not palindrome");
  }
}

submitBtn.addEventListener("click", clickHandler);
