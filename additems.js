window.onload = function init() {
    var addNumber = 1;
    var myList = document.getElementById("mylist")
    var headLine = document.getElementById("headline");
    var itemList = document.querySelectorAll("#mylist li");
    var btn = document.getElementById("btn");

    // for (i = 0; i < itemList.length; i++ ){
    //     // itemList[i].innerHTML = "hello world";
    //     itemList[i].addEventListener("click", activeItems);
    // }

    myList.addEventListener("click", activeItems);


    function activeItems(e) {
        console.log(e.target);
        if (e.target.nodeName == "LI") {
            headLine.innerHTML = e.target.innerHTML;
            for (i = 0; i < e.target.parentNode.children.length; i++ ){
                e.target.parentNode.children[i].classList.remove("active");
            }
            e.target.classList.add("active");
        }
    };

    btn.addEventListener("click", creatNewItems);

    function creatNewItems() {
        myList.innerHTML += "<li>new line " + addNumber + "</li>";
        addNumber++;
    }

};
