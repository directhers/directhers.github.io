var i = 0;
var txt = 'This is a classic search bar, an interface that anyone can use to explore our encoded xml files. The idea is for you to type any word you have seen in the Tag Glossary page - the result will be a tidy list of information across all the encoded directHERS!'; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}