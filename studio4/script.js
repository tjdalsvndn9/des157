document.addEventListener("DOMContentLoaded", function(event){


	var login1 = document.createElement('p');
	login1.setAttribute('class','login');
	loginText1 = document.createTextNode('user89 entered the room');
	login1.appendChild(loginText1);
	setTimeout(function(){
		document.querySelector('.chatlogs').appendChild(login1);
	},1000);

	var login = document.createElement('p');
	login.setAttribute('class','login');
	loginText = document.createTextNode('user99 entered the room');
	login.appendChild(loginText);
	setTimeout(function(){
		document.querySelector('.chatlogs').appendChild(login);
	},1500);


	var photo = document.createElement('div');
	photo.setAttribute('class','user-photo');
	var message = document.createElement('p');
	message.setAttribute('class','chat-message');
	friendText = document.createTextNode('you alone?')
	message.appendChild(friendText);
	var chat = document.createElement('div');
	chat.setAttribute('class','chat');
	chat.appendChild(photo);
	chat.append(message);
	setTimeout(function(){
		document.querySelector('.chatlogs').appendChild(chat);
	},4000);	



	firsttext=['hi','hello','hey','what','sure']
	secondtext=['wanna hang','Wannna hang?','wanna hang?','yes','yeah','hell yeah'];
		thirdtext=['Davis','davis','sac'];
		refusingText= ['no','hell no','I am not a single','im not single','nah'];

	var button = document.getElementById('sendButton');

	button.addEventListener('click',function(e){
		e.preventDefault();
		var chat = document.createElement('div');
		chat.setAttribute('class','chat1');


		var photo = document.createElement('div');
		photo.setAttribute('class','user-photo1');

		chat.appendChild(photo);

		var textArea = document.getElementById('textArea').value;
		var textNode = document.createTextNode(textArea);
		var message = document.createElement('p');
		message.setAttribute('class','chat-message1');
		message.appendChild(textNode);

		chat.appendChild(message);

		document.querySelector('.chatlogs').appendChild(chat);

		
randomNumberGenerator = Math.max(2000,Math.floor(Math.random()*3500));



				for(var i=0; i<refusingText.length; i++){
			if(textArea.trim().toLowerCase() == refusingText[i]){
				setTimeout(function(){
					var photo = document.createElement('div');
					photo.setAttribute('class','user-photo');
					var message = document.createElement('p');
					message.setAttribute('class','chat-message');
					friendText = document.createTextNode('you suck')
					message.appendChild(friendText);
					var chat = document.createElement('div');
					chat.setAttribute('class','chat');
					chat.appendChild(photo);
					chat.append(message);
					document.querySelector('.chatlogs').appendChild(chat);
							
						},2000);
						var login = document.createElement('p');
		login.setAttribute('class','login');
		loginText = document.createTextNode('user99 left the room');
		login.appendChild(loginText);
		setTimeout(function(){
			document.querySelector('.chatlogs').appendChild(login);
		},3000);
					
					}
				}



		for(var i=0; i<firsttext.length; i++){
			if(textArea.trim().toLowerCase() == firsttext[i]){
				setTimeout(function(){
					var photo = document.createElement('div');
					photo.setAttribute('class','user-photo');
					var message = document.createElement('p');
					message.setAttribute('class','chat-message');
					friendText = document.createTextNode('free tonight?')
					message.appendChild(friendText);
					var chat = document.createElement('div');
					chat.setAttribute('class','chat');
					chat.appendChild(photo);
					chat.append(message);
					document.querySelector('.chatlogs').appendChild(chat);
							
				},randomNumberGenerator);
					
			}
		}

				for(var i=0; i<secondtext.length; i++){
			if(textArea.trim().toLowerCase() == secondtext[i]){
				setTimeout(function(){
					var photo = document.createElement('div');
					photo.setAttribute('class','user-photo');
					var message = document.createElement('p');
					message.setAttribute('class','chat-message');
					friendText = document.createTextNode('where do you live?')
					message.appendChild(friendText);
					var chat = document.createElement('div');
					chat.setAttribute('class','chat');
					chat.appendChild(photo);
					chat.append(message);
					document.querySelector('.chatlogs').appendChild(chat);
							
						},randomNumberGenerator);
					
						}
				}
					for(var i=0; i<thirdtext.length; i++){
			if(textArea.trim().toLowerCase() == thirdtext[i]){
				setTimeout(function(){
					var photo = document.createElement('div');
					photo.setAttribute('class','user-photo');
					var message = document.createElement('p');
					message.setAttribute('class','chat-message');
					friendText = document.createTextNode('we have to be discreet')
					message.appendChild(friendText);
					var chat = document.createElement('div');
					chat.setAttribute('class','chat');
					chat.appendChild(photo);
					chat.append(message);
					document.querySelector('.chatlogs').appendChild(chat);
							
						},randomNumberGenerator);
					
						}
				}

	})



});





