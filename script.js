const usersName = document.querySelectorAll("h4");
const usersAddress = document.querySelectorAll("p");

class User {
  constructor(name, username, bio, email, phoneNumber, address, birthDate, gender) {
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

const user1 = new User ("Anto", "anttom07", "Hi me is me, I'm Italian and I'm 15", "anttom0713@gmail.com", "327 630 3660", "via Isonzo, 130", "13/07/2007");
user1.isGenderMorF(1);
console.log(user1);

const user2 = new User (usersName[0].innerText, "LindieH67", "Hey I'm Linda and I'm a painter", "lindahart6767@abcd.ef", "757885336788543789", usersAddress[0].innerText, "27/05/1990");
user2.isGenderMorF(2);
console.log(user2);

const user3 = new User (usersName[1].innerText, "M4DROG3R008", "Hi I'm 25 and I'm a highschool math teacher", "anttom0713@gmail.com", "327 630 3660", "via Isonzo, 130", "13/07/2007");
user1.isGenderMorF(1);
console.log(user3);