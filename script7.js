// Create a button on which after clicking print "button clicked-1,2,3,4.." on the console

//learniings
//getElementById , craeateElement, .innerHTML, append, addEventlistener 

// We can do it using html easily, but just for practise I did it using js
const root = document.getElementById("root");
const heading = document.createElement("h1");
heading.innerHTML = "Namaste Shubham";
root.append(heading);

const button = document.createElement("button", { id: "btn" });
button.innerText = "Click Me Buddy!";
root.append(button);

// After clicking on btn print "button clicked-1,2,3,4.." on the console
function attachEventListener() {
  let count = 0;
  button.addEventListener("click", () => {
    ++count;
    if (count >= 10) {
      console.log(`Damm! you clicked me ${count} times`);
    } else {
      console.log(`ok so you clicked me ${count} time`);
    }
  });
}

attachEventListener();
