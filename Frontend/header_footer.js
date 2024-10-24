// // Create header and footer elements
// const header = document.createElement('header');
// const footer = document.createElement('footer');

// // Retrieve header and footer contents
// function addHeaderAndFooter() {
//   fetch('header.html')
//     .then(response => response.text())
//     .then(data => {
//       header.innerHTML = data;
//       appendHeader();
//     });

//   fetch('footer.html')
//     .then(response => response.text())
//     .then(data => {
//       footer.innerHTML = data;
//       appendFooter();
//     });
// }

// // Append header and footer to each HTML file
// function appendHeader() {
//   const headers = document.querySelectorAll('header');
//   headers.forEach((header) => {
//     header.appendChild(header.cloneNode(true));
//   });
// }

// function appendFooter() {
//   const footers = document.querySelectorAll('footer');
//   footers.forEach((footer) => {
//     footer.appendChild(footer.cloneNode(true));
//   });
// }

// // Call the addHeaderAndFooter function to add the header and footer to each HTML file
// addHeaderAndFooter();
