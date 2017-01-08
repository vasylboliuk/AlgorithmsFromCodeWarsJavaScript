
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

function howMuchILoveYou(nbPetals) {
    var list = ["I love you",  "a little", "a lot", "passionately","madly","not at all"];
    
    if(nbPetals>0 && nbPetals<=6){
      return list[nbPetals-1];
    }
    return list[(nbPetals-1)%6];
}

console.log("Basic tests");
testing(howMuchILoveYou(7),"I love you");
testing(howMuchILoveYou(3),"a lot");
testing(howMuchILoveYou(6),"not at all");
testing(howMuchILoveYou(9), "a lot");
testing(howMuchILoveYou(7), "I love you");


function testing(actual, expected){
	console.log(actual===expected);
}

