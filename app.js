const submitBtn = document.querySelector(".submitBtn");
const birthDate = document.querySelector(".bDate");
const checkBtn = document.querySelector("#checkBtn");
const resultMsg = document.querySelector("#resultTxt");
const loader = document.querySelector(".loader");

loader.style.display = "none";

const successMsg = "Hey Congratulations, your birthday is palindrome";
const unsuccessMsg = "Sorry, your birthday is not palindrome";

let count = 0;

function clickHandler(e) {
  e.preventDefault();
  const dateInput = birthDate.value;
  console.log(dateInput);
  const dateArr = dateInput.split("-");
  console.log(dateArr);
  const year = dateArr[0];
  const month = dateArr[1];
  const date = dateArr[2];
  console.log(date);
  console.log(month);
  console.log(year);

  const yyyymmdd = parseInt(year + month + date);
  const ddmmyyyy = parseInt(date + month + year);
  const mmddyy = parseInt(month + date + year);
  // let joinedDate = parseInt(date.join(""));
  console.log(yyyymmdd);
  console.log(ddmmyyyy);
  console.log(mmddyy);
  // console.log(typeof yyyymmdd);

  setTimeout(function () {
    loader.style.display = "block";
  }, 10000);

  checkPalindrome(yyyymmdd);
  console.log("Done with 1st round now onto next");
  console.log(ddmmyyyy);
  if (count === 0) {
    checkPalindrome(ddmmyyyy);
    console.log("Done with 2nd round now onto next");
  }
  if (count === 0) {
    console.log(mmddyy);
    checkPalindrome(mmddyy);
    console.log("Done with final round");
  }
  if (count === 0) {
    setMessage(unsuccessMsg);
  }
}

function checkPalindrome(checkDate) {
  const originalNo = checkDate;
  let reverseNo = 0;
  let remainder;
  while (checkDate !== 0) {
    remainder = checkDate % 10;
    console.log(reverseNo);
    reverseNo = reverseNo * 10 + remainder;
    checkDate = parseInt(checkDate / 10);
    console.log(checkDate);
  }
  console.log(reverseNo);

  let missedDays;

  if (originalNo === reverseNo) {
    // console.log("Hey Congratulations, your birthday is palindrome");
    setMessage(successMsg);
    count++;
    console.log(count);
  }
  // else {
  //   // console.log("Sorry, your birthday is not palindrome");
  //   // setMessage(unsuccessMsg);
  //   console.log("Done with 1st round now onto next");
  //   checkPalindrome(ddmmyyyy);
  //   console.log("Done with 2nd round now onto next");
  //   checkPalindrome(mmddyy);
  //   console.log("Done with final round");
  //   setMessage(unsuccessMsg);
  //   // if (originalNo > reverseNo) {
  //   //   missedDays = originalNo - reverseNo;
  //   //   console.log(`You missed by ${missedDays} days`);
  //   // } else {
  //   //   missedDays = reverseNo - originalNo;
  //   //   console.log(`You missed by ${missedDays} days`);
  //   // }
  // }
}

function setMessage(Msg) {
  resultMsg.innerText = Msg;
}

function pageDown() {
  document.body.scrollDown = 600;
}

submitBtn.addEventListener("click", clickHandler);

checkBtn.addEventListener("click", pageDown);
