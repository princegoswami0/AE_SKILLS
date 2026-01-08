const inputValue = document.getElementById('input-text');
const outputValue = document.getElementById('output');

inputValue.addEventListener('input', function () {
  console.log(inputValue.value);
  const password = inputValue.value;

  if (password.length < 8) {
    outputValue.innerText = 'Password is too short';
    outputValue.style.color = 'red';
  } else {
    // outputValue.innerText = 'Password is long enough';
    // outputValue.style.color = 'red';
    console.log("is lowercase",password.search(/[a-z]/));

    //check for the complexity 
    // 0-9 
    // a-z
    // A-Z
    // special characters like !@#$%^&*()

    if (password.search(/[a-z]/) === -1) {
      outputValue.innerText = 'Password must contain at least one lowercase letter';
      outputValue.style.color = 'red';
    }else if (password.search(/[A-Z]/) === -1) {
      outputValue.innerText = 'Password must contain at least one uppercase letter';
      outputValue.style.color = 'red';
    }else if (password.search(/[0-9]/) === -1) {
      outputValue.innerText = 'Password must contain at least one number';
      outputValue.style.color = 'red';
    }else if (password.search(/[^a-zA-Z0-9]/) === -1) {
      outputValue.innerText = 'Password must contain at least one special character';
      outputValue.style.color = 'red';
    }else {
      outputValue.innerText = 'Password is strong enough';
      outputValue.style.color = 'green';
    }
}
});


// [ ] → character group
// ^ → NOT
// a-z → lowercase letters
// A-Z → uppercase letters
// 0-9 → digits

// “Match any character that is NOT a letter or number”

