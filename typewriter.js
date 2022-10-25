const sentence = "hello there from lighthouse labs";
let arr = sentence.split("");
let delay =  0;

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
    if (i == arr.length - 1) {
      process.stdout.write('\n');
    }
  }, delay);
  delay += 50;

}


  