setInterval(function(){
	var button = document.querySelector('.tw-button--success');
	if(button){
		button.click();
		console.log('Reward claimed');
	}
},1000);