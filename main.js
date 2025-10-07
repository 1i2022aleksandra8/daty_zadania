const input = document.getElementById("datawybrana");
        const display = document.getElementById("wynik");

        input.addEventListener("change", function () {
            const selectedDate = new Date(this.value);
            const formatted = selectedDate.toLocaleString("pl-PL", { 
                day: "2-digit",
                weekday: "long", 
                month: "long",
                year: "numeric"
            });

            display.innerHTML = "Wybrana data: " + formatted;
        });