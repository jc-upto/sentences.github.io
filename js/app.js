

let firstName = document.getElementById("prenom");
let storyDiv = document.getElementById("generatedStory");
let storyData = new StoryData();

// Adding a new story.
document.getElementById("generate").addEventListener("click", function(event) {
    if(firstName.value.length > 0) {
        let story = document.createElement("div");
        story.classList.add("story");
        story.innerHTML += new Story(firstName.value, storyData).getStory();
        storyDiv.appendChild(story);
        storyDiv.scrollTop = storyDiv.scrollHeight;
    }
});

// Adding new words into StoryData object.
document.getElementById("add-params").addEventListener("click", function() {
   storyData.addLocation(document.getElementById("new-location").value);
   storyData.addName(document.getElementById("new-name").value);
   storyData.addObject(document.getElementById("new-object").value);
   storyData.addTemperature(document.getElementById("new-temperature").value);
   storyData.addVerb(document.getElementById("new-verb").value);
});




