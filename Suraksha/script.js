function submitForm(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '<strong>Email:</strong> ${email}<br>' 
    <strong>Password:</strong> ${password}<br>;
}