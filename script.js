const str0 = "Enter what you want";
const str1 = "1. Enter entry";
const str2 = "2. List entries";
const str3 = "3. Search entries";
const str4 = "4. Exit";

let entries = [];

const entryProgram = () => {
  const enteredValue = prompt(
    str0 + "\n" + str1 + "\n" + str2 + "\n" + str3 + "\n" + str4
  );

if(enteredValue > 4 || enteredValue == 0){
  alert("Enter an valid option")
  return
}

  const searchEntries = () => {
    if (entries.length === 0) {
      alert("No entries found. Please add an entry first.");
      return;
    }

    let searchInput = prompt(
      `Search entries using \n 1. Username \n 2. Password`
    );

    if (searchInput != 1 && searchInput != 2) {
      alert("Enter an valid input");
      return;
    }
    if (searchInput == 1) {
      let userNameValue = prompt("Enter the username below");

      for (const entry of entries) {
        if (entry.userName === userNameValue) {
          alert(`Username: @${entry.userName}\nPassword: ${entry.pass}`);
          return;
        }
      }

      alert("No entries found with the given username.");
    } else if (searchInput == 2) {
      let passValue = prompt("Enter the password below");

      for (const entry of entries) {
        if (entry.pass === passValue) {
          alert(`Username: @${entry.userName}\nPassword: ${entry.pass}`);

          return;
        }
      }
      alert("No entries found with the given password.");
    } else {
      alert("Enter an valid input");
    }
  };

  if (enteredValue == 1) {
    const userName = prompt("Enter the Username");
    const pass = prompt("Enter the Password");
    entries.push({ userName, pass });
  } else if (enteredValue == 2) {
    if (entries.length === 0) {
      alert("No entries found. Please add an entry first.");
      return;
    }
    let entryList = "";
    for (let i = 0; i < entries.length; i++) {
      entryList += `Username : @${entries[i].userName}, Password : ${entries[i].pass}\n\n`;
    }
    alert(entryList);
  } else if (enteredValue == 3) {
    searchEntries();
  }
  return enteredValue;
};

  let enteredValue;
  do {
    enteredValue = entryProgram();
  } while (enteredValue != 4);

