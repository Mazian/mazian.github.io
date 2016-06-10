

function subscribe() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status == 200) {
            ShowMessage(this.responseText);
            subscribe();
            return;
        } else {
            console.log('error string');
            onError(this);
        }
        subscribe();
    }
    xhr.open("GET", "/subscribe", true);
    xhr.send();
}

subscribe();

function SendMessage(message) {
    //console.log(message.toString());
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/publish", true);
    xhr.send(message);
}

function ShowMessage(message) {
    $('#messages').append('<div class="message">' + message + '</div>');
    console.log('message'+message);
//    jQuery.ajax({
//        'type': 'POST',
//        'url': '/publish',
//        'data': {'message': message},
//        'cache': false,
//        'success': function() {}
//        })
 }

