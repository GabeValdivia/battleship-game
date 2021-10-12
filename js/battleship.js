var view = {
    //this method takes a string message and displays it in the message area
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
    }
    displayHit: function(location){
    	//code will go here
    },
    displayMiss: function(location){
        //code will go here
    }
};