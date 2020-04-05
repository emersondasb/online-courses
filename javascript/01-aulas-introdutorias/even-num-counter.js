function evenNumCounter() {
    var upTo = parseInt(prompt("Up to what even number do you want to show? "));
    var counter = 0;
    
    while (counter <= upTo) {
        document.write(counter + "<br>");
        counter += 2;
    }
    
    document.write("Fim!<br>");
}

