
setInterval(function () {
   jQuery.ajax({
       'type': 'POST',
       'url': '/ajaxservice/get',
       'data': {'from': 101, 'to': 102, 'message': 'bla­bla..'},
       'cache': false,
       'success': function (mess) {
                if (mess) {
                    render(mess); //    необходимо реализовать
                }
         }})
}, 4000);

function render(mess) {
        //console.log(mess);
    for (var obj of mess) {
        console.log(obj);
       $("#contener").append('<b>' + obj['name'] + '</b>:' + obj['data'] + '<br>\n');
    }
}