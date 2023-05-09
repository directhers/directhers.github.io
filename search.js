// Load the XML document
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Parse the XML document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.responseText, "text/xml");

    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const query = document.querySelector("#query").value;

      // Search the XML document for matching tags
      const matchingTags = xmlDoc.getElementsByTagName(query);
      const directorNames = xmlDoc.getElementsByTagName("name");
     

      // Display the search results
      const resultsDiv = document.querySelector("#results");
      resultsDiv.innerHTML = "";
      
      if (matchingTags.length > 0) {
        resultsDiv.innerHTML += `<h2>Search results:</h2>`;
        for (let i = 0; i < matchingTags.length; i++) {
            if(i < directorNames.length) {
                const directorName = directorNames[i];
                console.log(directorName);
                resultsDiv.innerHTML += directorName.textContent;
            }
          const matchingTag = matchingTags[i];
          //console.log(matchingTag);
          const tagName = matchingTag.tagName;
          const childNodes = matchingTag.childNodes;
          //colsole.log(childNodes);
          let childTagNames = "";
          for (let j = 0; j < childNodes.length; j++) {
            if (childNodes[j].nodeType === Node.ELEMENT_NODE) {
              const childTagName = childNodes[j].tagName;
              if (childTagNames !== "") {
                childTagNames += ", ";
              }
              childTagNames += childTagName;
            }
          }
          const tagStr = new XMLSerializer().serializeToString(matchingTag);
          console.log(tagStr);
         
          resultsDiv.innerHTML += `<pre><strong>${tagName}</strong> (${childTagNames}): ${tagStr}</pre>`;
        }
      } else {
        resultsDiv.innerHTML += `<p>No ${query} tags found</p>`;
      }
    });
  }
};
xhr.open("GET", "directors.xml");
xhr.send();