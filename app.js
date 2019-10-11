function sumOfOdd(num) {
  let collectSum = 0;
  num = num.split("");

  for (let i in num) {
    let each = parseInt(num[i]);
    if ((i % 2 != 0 || i == 0) && each != 0) {
      collectSum += each;
    }
  }
  // console.log("cSum = " + collectSum);
  var sum = 0;
  while (collectSum) {
    sum += collectSum % 10;
    collectSum = Math.floor(collectSum / 10);
  }
  // console.log("sum = " + sum);
  if(sum >= 10) {
    return 1;
  }
  else
  return sum;
}

function register() {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var mob = document.getElementById("mob").value;
  var dob = document.getElementById("dob").value;
  var idProof = document.getElementById("idProof").value;
  var vowel = "";
  var even;
  var pan = document.getElementById('pan-id').value;
  var adhar = document.getElementById('adhar-id').value;
  var dl = document.getElementById('dl-id').value;
  if(idProof === "pan") {
    localStorage.setItem("idProof", pan);
    vowel = idOp(pan);
    even = evenNum(pan);
  }
  else if(idProof === "adhar") {
    localStorage.setItem("idProof", adhar);
    vowel = idOp(adhar);
    even = evenNum(adhar);
  }
  else {
    localStorage.setItem("idProof", dl);
    vowel = idOp(dl);
    even = evenNum(dl);
  }

  localStorage.setItem("fName", fName);
  localStorage.setItem("lName", lName);
  localStorage.setItem("mob", mob);
  localStorage.setItem("dob", dob);

  var one = lName.substring(lName.length - 2, lName.length);
  var two = fName.substring(0, 2);
  var three = sumOfOdd(mob);
  var four = dob.charAt(0) + dob.charAt(dob.length);
  var five = vowel;
  var six = evenNum(even);
  localStorage.setItem("pwd", (one+two+three+four+five+six));
  window.location.href='changePwd.html';
}


function evenNum(str) {
  var numArr = str.match(/\d+/g).join(" ");
  var num = numArr.replace(/\s/g,'');
  var nums = num.toString(10).replace(/\D/g, '0').split('').map(Number);
  console.log("nums = " + nums);
  let unique = nums.filter((it, i, ar) => ar.indexOf(it) === i);
  console.log(unique);
  unique.sort();
  let uniEven = unique.filter(n => n%2===0).join("");
  console.log("uniEven = " + uniEven);
  let u = uniEven.replace(/\s/g,'');
  return u;
}

function idOp(id) {
  var vowels = id.match(/[aeiou]/gi);
  var vow = vowels.join(" ");
  var v = vow.replace(/\s/g,''); 
  return v;
}

function show() {
  let option = document.getElementById("idProof").value;
  if (option == "pan") {
    document.getElementById("pan").style.display = "block";
    document.getElementById("adhar").style.display = "none";
    document.getElementById("dl").style.display = "none";
  } else if (option == "adhar") {
    document.getElementById("pan").style.display = "none";
    document.getElementById("adhar").style.display = "block";
    document.getElementById("dl").style.display = "none";
  } else if (option == "dl") {
    document.getElementById("pan").style.display = "none";
    document.getElementById("adhar").style.display = "none";
    document.getElementById("dl").style.display = "block";
  }
}
