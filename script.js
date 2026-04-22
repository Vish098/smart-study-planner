let totalHours = 0;

function addTask() {
    let subject = document.getElementById("subject").value;
    let hours = Number(document.getElementById("hours").value);

    if (subject === "" || hours <= 0) {
        alert("Enter valid data");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = subject + " - " + hours + " hrs " +
        "<button onclick='removeTask(this," + hours + ")'>❌</button>";

    document.getElementById("list").appendChild(li);

    totalHours += hours;
    updateTotal();

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";
}

function removeTask(btn, hours) {
    btn.parentElement.remove();
    totalHours -= hours;
    updateTotal();
}

function updateTotal() {
    let message = "Total Study Hours: " + totalHours;

    if (totalHours > 8) {
        message += " ⚠️ Too much workload!";
    }

    document.getElementById("total").innerText = message;
}

function clearAll() {
    document.getElementById("list").innerHTML = "";
    totalHours = 0;
    document.getElementById("total").innerText = "";
}
