const usersImage = document.querySelectorAll("img").getAttribute("src");
const usersName = document.querySelectorAll("h4");
const usersAddress = document.querySelectorAll("p");

class User {
  constructor(image, name, username, bio, email, phoneNumber, address, birthDate, gender) {
    this.image = image;
    this.name = name;
    this.username = username;
    this.bio = bio;
    this.email = email;
    this.password = "••••••••";
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.birthDate = birthDate;
    this.gender = gender;
  }
  isGenderMorF(gender) {
    var male = gender===1;
    var female = gender===2;
    if (male) {
      this.gender = "Male";
    } else if (female) {
      this.gender = "Female";
    }
  }
}

const testUser = new User ("Anto", "anttom07", "Hi me is me, I'm Italian and I'm 15", "anttom0713@gmail.com", "327 630 3660", "via Isonzo, 130", "13/07/2007");
testUser.isGenderMorF(1);
console.log(testUser);

const user1 = new User (usersImage[0], usersName[0].innerText, "LindieH67", "Hey I'm Linda and I'm a painter", "lindahart6767@abcd.ef", "757885336788543789", usersAddress[0].innerText, "27/05/1990");
user1.isGenderMorF(2);
console.log(user1);

const user2 = new User (usersImage[1], usersName[1].innerText, "M4DROG3R008", "Hi I'm 30 and I'm a high school math teacher", "rogermed1na@abcdhighschool.ef", "76252492457546564134898", usersAddress[1].innerText, "07/10/1992");
user2.isGenderMorF(1);
console.log(user2);

const user3 = new User (usersImage[2], usersName[2].innerText, "It'sDeanGuys", "Hi I'm Nigerian and I'm currently studying Web Development on MIMO", "sullyd3an96@abcd.ef", "632786358547889654893163186", usersAddress[2].innerText, "19/02/1996");
user3.isGenderMorF(1);
console.log(user3);

function account1() {
  window.location.href = "standard-profile.html"
}
const div = document.querySelector(
  "#abc");
const divLink = div.getAttribute(
  "onclick");
console.log(divLink);
console.log(usersImage[1]);