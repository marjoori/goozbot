// What is my horoscope for today
// You are feeling [a little sad] today. Take it easy and [chill] since all the [people] around you 
// are going to [].


var feelingArray = ["a little sad","a little tired","little grumpy","a little disappointed" , "extremely excited" , "so in love" , "kind of crazy", "ecstatic" ];
var takeItEasyAnd = ["practice belly dance","say I am blessed", "give 5 eggs to your boss","do a good job vacuuming the house","avoid talking" , "buy legos" , "scream" , "dance around the office", "practice patience" ];
var thingsAroundYou = ["Safeway shoppers","good old boys","Giants fans","people you work with","jinglebell jams","Kardashian lovers" ,"loosers around you"];
var thingsDoing = ["be ruling a food-based cleanse","be building lego sets with your innermost circle of friends"," set up campfire and go to a yoga retreat","buy you a sparkly, unicorn-themed apparel"," invite you to fly your freak flag high" ];


module.exports = function(robot) {
        robot.hear(/My horoscope for today/, function(res) {

            var feelingArrayRand = Math.floor((Math.random() * feelingArray.length));
            var takeItEasyAndRand = Math.floor((Math.random() * takeItEasyAnd.length));
            var thingsAroundRand = Math.floor((Math.random() * thingsAroundYou.length));
            var thingsDoingRand = Math.floor((Math.random() * thingsDoing.length ));

            return res.send("You are feeling " + feelingArray[feelingArrayRand] + " today. Take it easy and " + takeItEasyAnd[takeItEasyAndRand] + " since all the " + thingsAroundYou[thingsAroundRand] + " are going to " + thingsDoing[thingsDoingRand] + ".");
    });
};



// module.exports = function(robot) {
//         robot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
//             var name;
//             name = msg.match[1];
//             if (name == "Hubot"){
//                 return msg.send("You're not Hubot--I'm Hubot!");
//             } else {
//                 return msg.reply("Nice to meet you, " + name + "!");
//             }

//             });
// };


