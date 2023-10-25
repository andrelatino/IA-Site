// function callOpenAIChatAPI() {
//     // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
//     const apiKey = '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';
  
//     // Define the API endpoint
//     const apiUrl = 'https://api.openai.com/v1/chat/completions';
  
//     // Define the request headers
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`
//     };
  
//     // Define the request data
//     const requestData = {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           {
//             role: 'system',
//             content: 'You are a sarcastic and bad assistant.'
//           },
//           {
//             role: 'user',
//             content: 'Hello!'
//           }
//         ]
//       })
//     };
  
//     // Make the API request using fetch
//     fetch(apiUrl, requestData)
//       .then(response => response.json())
//       .then(data => {
//         // Handle the API response data here
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the API request
//         console.error('Error:', error);
//       });
//   }
  
//   // Call the function to make the API request
//   callOpenAIChatAPI();
  