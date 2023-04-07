/*

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy


Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

 */

const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

const avgDolphins =
  (dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2]) / 3;
console.log(avgDolphins);

const avgKoalas = (koalasScore[0] + koalasScore[1] + koalasScore[2]) / 3;
console.log(avgKoalas);

if (avgDolphins > avgKoalas) {
  console.log("The Dolphins are the winners of the competition");
} else if (avgDolphins === avgKoalas) {
  console.log("Both teams tied!");
} else {
  console.log("The Koalas are the winners of the competition");
}

//Bonus #1

const dolphinsScore2 = [97, 112, 101];
const koalasScore2 = [109, 95, 123];

const avgDolphins2 =
  (dolphinsScore2[0] + dolphinsScore2[1] + dolphinsScore2[2]) / 3;
console.log(avgDolphins2);

const avgKoalas2 = (koalasScore2[0] + koalasScore2[1] + koalasScore2[2]) / 3;
console.log(avgKoalas2);

if (avgDolphins2 > avgKoalas2 && avgDolphins2 >= 100) {
  console.log("The Dolphins are the winners of the competition");
} else if (avgKoalas2 > avgDolphins2 && avgKoalas2 >= 100) {
  console.log("The Koalas are the winners of the competition");
} else {
  console.log("Both teams tied");
}

// Bonus #2

const dolphinsScore3 = [97, 112, 101];
const koalasScore3 = [109, 95, 106];

const avgDolphins3 =
  (dolphinsScore3[0] + dolphinsScore3[1] + dolphinsScore3[2]) / 3;
console.log(avgDolphins3);

const avgKoalas3 = (koalasScore3[0] + koalasScore3[1] + koalasScore3[2]) / 3;
console.log(avgKoalas3);

if (avgDolphins3 > avgKoalas3 && avgDolphins3 >= 100) {
  console.log("The Dolphins are the winners of the competition");
} else if (avgKoalas3 > avgDolphins3 && avgKoalas3 >= 100) {
  console.log("The Koalas are the winners of the competition");
} else if (
  avgDolphins3 === avgKoalas3 &&
  avgDolphins3 >= 100 &&
  avgKoalas3 >= 100
) {
  console.log("Both teams tied");
} else {
  console.log("no team wins the trophy");
}
