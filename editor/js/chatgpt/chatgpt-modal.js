
function chatgptOpenModal() {
// create the modal HTML
var modalHtml = `
    <div id="chatgptModal" class="modal chatgpt-modal"> 
    <div class="chatgpt-content">

        
        <div id="chatgpt-header"> 
            <button id="chatgpt-drag">
            <img src="./assets/svg/icons/drag.svg">
            </button>
            <p id="chatgptTitle">IA Text</p>
            <button onClick="chatgptCloseModal();" class="chatgpt-close">
            <img src="./assets/svg/icons/close.svg">
            </button>
        </div>

        <div id="chatgpt-content"> 
            <div id="chatgptResponse">                
                <p id="chatgptElementID">Select your text ID to start editing</p>
            </div>
            <div class="chatgpt-grid">
                <input id="chatgptPrompt" type="text">
                
                <button id="chatgptSend">Send</button>
                <button id="chatgptStop">Stop</button>
                <button id="chatgptStop" onclick="chatgptClear()">Clear</button>
            </div>
            
        </div>
    </div>
    
</div>
    
`;  
// add the modal to the document body
document.body.insertAdjacentHTML('beforeend', modalHtml);

var dragchatgptModal = document.querySelector("#chatgptModal");
var dragchatgptButton = document.querySelector("#chatgpt-drag");

makeElementDraggable(dragchatgptModal, dragchatgptButton);

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const promptInput = document.getElementById("chatgptPrompt");
const generateBtn = document.getElementById("chatgptSend");
const stopBtn = document.getElementById("chatgptStop");

// const selectedValue = selectElement.value;
// const elementID = localStorage.getItem('elementID');


// Declare getElementID and resultText outside the event listener function
// var getElementID = "chatgptResult"; // Initialize with the default value
// var resultText = document.getElementById(getElementID);

// // Select the <select> element
// var selectElement = document.getElementById("chatgpt-selected"); // Replace "chatgpt-selected" with the actual ID of your <select> element
// selectElement.addEventListener("change", function () {
  

//   // Update getElementID based on the selected value
//   if (selectedValue === "info") {
//     getElementID = "chatgptResult";
//   } else if (selectedValue === "text") {
//     getElementID = elementID;
//   } else if (selectedValue === "html") {
//     getElementID = "grid";
//   }else {
//     getElementID = "chatgptResult";
//   }
//   // Now you can access getElementID and resultText inside this event listener
//   
// });

var resultText;  // Definir la variable fuera del ámbito del callback de MutationObserver

// Crear una instancia de MutationObserver y pasar una función de callback que se ejecutará cuando las mutaciones sean detectadas
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Obtener el nuevo valor
        var newValue = mutation.target.textContent;
        
        // Usar el nuevo valor como ID para obtener otro elemento y asignarlo a resultText
        resultText = document.getElementById(newValue);
    });
});

// Seleccionar el nodo objetivo
var targetNode = document.getElementById('chatgptElementID');

// Crear un objeto de configuración con los tipos de mutaciones que nos gustaría observar
var config = { characterData: true, childList: true, subtree: true };

// Llamar al método observe() y pasar el nodo objetivo y el objeto de configuración como argumentos
observer.observe(targetNode, config);


let controller = null; // Store the AbortController instance

const generate = async () => {
  // Alert the user if no prompt value
  if (!promptInput.value) {
    alert("Please enter a prompt.");
    return;
  }

  // Disable the generate button and enable the stop button
  generateBtn.disabled = true;
  stopBtn.disabled = false;
  resultText.innerText = "Thinking...";

  // Create a new AbortController instance
  controller = new AbortController();
  const signal = controller.signal;

  try {
    // Fetch the response from the OpenAI API with the signal from AbortController
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: promptInput.value}],
        max_tokens: 1000,
        stream: true, // For streaming responses
      }),
      signal, // Pass the signal to the fetch request
    });

    // Read the response as a stream of data
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    resultText.innerText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      // Massage and parse the chunk of data
      const chunk = decoder.decode(value);
      console.log('chunk'+chunk);
      const lines = chunk.split("\n");
    //   console.log('lines'+lines);
      const parsedLines = lines
        .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
        .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
        .map((line) => JSON.parse(line)); // Parse the JSON string

        console.log(parsedLines);

      for (const parsedLine of parsedLines) {
        const { choices } = parsedLine;
        const { delta } = choices[0];
        const { content } = delta;
        // Update the UI with the new content
        if (content) {
          resultText.innerHTML += content;
        }
      }
    }
  } catch (error) {
    // Handle fetch request errors
    if (signal.aborted) {
      resultText.innerText = "Request stopped!";
    } else {
      console.error("Error:", error);
      resultText.innerText = "Error occurred while generating.";
    }
  } finally {
    // Enable the generate button and disable the stop button
    generateBtn.disabled = false;
    stopBtn.disabled = true;
    controller = null; // Reset the AbortController instance
  }
};

const stop = () => {
  // Abort the fetch request by calling abort() on the AbortController instance
  if (controller) {
    controller.abort();
    controller = null;
  }
};

promptInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    generate();
  }
});
generateBtn.addEventListener("click", generate);
stopBtn.addEventListener("click", stop);

}

function chatgptCloseModal(prompt) {
const modal = document.getElementById('chatgptModal');
if (modal) {
    modal.remove();
}
}

function chatgptClear() {
    var element = document.getElementById("chatgptResult");
    if (element) {
        element.innerHTML = "Hello! How can I assist you today?";
    }
}
