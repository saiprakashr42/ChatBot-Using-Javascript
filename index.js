function talk() {
    //these are some of the chats and more can be added

    var know = {
        "Hi": "Hello Developer.",
        "How are you": "Good;",
        "Can you help me": "What can I do for u?",
        "Can you give some motivation tips?": "Do practice hard and do keep fit and clean and maintain a proper diet.",
        "Bye": "OkaY Meet You Later"
    };


    var user = document.getElementById('userBox').value;

    document.getElementById('chatLog').innerHTML = user + "br>";

    if (user in know) {
        //if user entered question exist then answer is given
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        //if no question exists which was asked then it gives answer that it didnt understand
        document.getElementById('chatLog').innerHTML = "Sorry,I didnt understand..";
    }


}