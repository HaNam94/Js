// alert("Hello C02")
function sum() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var total = a + b;

    // Hiển thị tổng bằng document.write
    document.write("Tổng của " + a + " và " + b + " là: " + total + "<br>");

    // Hiển thị tổng bằng alert
    alert("Tổng của " + a + " và " + b + " là: " + total);

    // Hiển thị tổng bằng console.log
    console.log("Tổng của " + a + " và " + b + " là: " + total);
}