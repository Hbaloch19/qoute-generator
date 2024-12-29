let quotes = [
    "Do something today that your future self will thank you for.",
    "Don’t be afraid of failure. It’s proof that you’re trying.",
    "Great things take time. Be patient and keep moving forward." ,
   "Fall seven times, stand up eight.",
   "The future depends on what you do today.",
   "Small progress is still progress.",
   "The only limit to our realization of tomorrow will be our doubts of today.",
   "Strive not to be a success, but rather to be of value."
]
  let Element = document.getElementById('quote');
  let Button = document.getElementById('generate');
  
  Button.onclick= () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    Element.textContent = quotes[randomIndex];
  };