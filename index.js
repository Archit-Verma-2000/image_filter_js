const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("item-list");
    const item = document.querySelectorAll(".item");
    const iname = storeitems.getElementsByTagName("h2")
    for (var i = 0; i < iname.length; i++) {
        let match = item[i].getElementsByTagName("h2")[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchbox) === 0) {
                item[i].style.display = "";
            } else {
                item[i].style.display = "none";
            }
        }
    }
}
