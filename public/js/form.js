document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contact-form');
	const messageDiv = document.getElementById('response-message');

  
	form.addEventListener('submit', function(event) {
	  // Prevent the default form submission behavior
	  event.preventDefault();
  
	  // Get form data
	  const formData = new FormData(form);
	  const formDataObject = {};
	  formData.forEach((value, key) => {
		formDataObject[key] = value;
	  });
	  console.log(formData);
  
	  // Send form data to server using fetch or XMLHttpRequest
	  fetch('/api/contact', {
		method: 'POST',
		body: formData
	  })
	  .then(response => response.text())
	  .then(data => {
		// Display success message on the page
		messageDiv.textContent = data;
		// Optionally, reset the form fields
		form.reset();
	  })
	  .catch(error => {
		// Handle errors
		console.error('Error:', error);
	  });
	});
  });
  