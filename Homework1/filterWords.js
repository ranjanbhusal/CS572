//1. Using ES6 feature without using loop
String.prototype.filterWords = function(bannedWords) {
  return this.split(" ")
    .map(w => {
      if (bannedWords.indexOf(w) > -1) {
        return "***";
      }
      return w;
    })
    .join(" ");
};

console.log("This house is nice !!".filterWords(["house", "nice"]));