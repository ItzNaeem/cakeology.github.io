function sendToWhatsapp(){
	let number = "+254712350742";
	let website = 'https://cakeologywithjumana.com/';
	let name = document.getElementById('name').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Website : " +website+ "%0a%0a"
	+ "Name : " +name+ "%0a"
	+ "Message : " +message;

	window.open(url, '_blank').focus();
}