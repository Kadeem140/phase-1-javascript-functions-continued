// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun("Code my brains out")

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }

function wrapAdjective (string = "*"){
    return function (default1 = "special"){
            return `You are ${string}${default1}${string}!`
    }
    
}

wrapAdjective("Kadeem")("a dedicated programmer")

