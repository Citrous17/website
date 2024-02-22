function toggleStyleSheet(){
    var style = document.getElementById("mainStyleSheet");
    styleName = style.getAttribute("href");
    console.log(styleName);
    if(styleName === "CSS/modern.css" ? newStyleName = "CSS/retro.css" : newStyleName = "CSS/modern.css");
    style.setAttribute("href", newStyleName);
    localStorage.setItem("style", newStyleName);
}


window.onload = function(){
    var style = localStorage.getItem("style");
    var ogStyle = document.getElementById("mainStyleSheet");
    var pageTitle = document.title;
    if(style == null) {
        console.log("Huh")
        ogStyle.setAttribute("href", "CSS/modern.css");
    } else { ogStyle.setAttribute("href", style); }
    if(pageTitle === "Kyle Stallings's Homepage")  { 
        // Make every text box empty
        document.getElementById("indexTextbox1").innerText = "";
        document.getElementById("indexTextbox2").innerText = "";
        document.getElementById("indexTextbox3").innerText = "";
        loadText("indexTextbox1", "Hello! I am a Computer Engineering student at Texas A&M University, Class of 2025", 5000);
        setTimeout(function() { loadText("indexTextbox2", "I am currently pursuing a Bachelor's in Computer Engineering with a Minor in Mathematics and a Minor in Computer Science. I am very passionate about Computers! It is my hopes to Engineer the products of tommorow. Whether it's an App, Game, or Scientific Model, I am constantly improving myself with various projects to make the world a more efficient and enjoyable place.", 10000); }, 5000); // Loads next text box after 5 seconds
        setTimeout(function() { loadText("indexTextbox3", "These are the coding languages that I am most familar with at this time. For each of these languages, you can find how they were used on my Qualifications page at the top. There are other languages that I am familiar with (C, x86-64 Assembly, Go, Rust), but do not feel I am proficient yet with.", 10000); }, 15000); // Loads next text box after 15 seconds
    };
}

//Class to load text dynamically. Addes a little spice for the retro theme.
function loadText(id, targetText, duration) {
    var textbox = document.getElementById(id);
    textbox.innerText = ""; // Set the text to be nothing on startup
    text = "";
    var interval = duration / targetText.length;
    var letterCount = 0;

    var addText = setInterval(function() {
        // Add one letter at a time
        text += targetText[letterCount];
        letterCount++;
        textbox.innerText = text;
  
        // Check if all letters are added
        if (letterCount === targetText.length) {
          // Clear the interval when done
          clearInterval(addText);
        }
      }, interval);
}