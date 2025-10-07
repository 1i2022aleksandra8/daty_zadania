const input1 = document.getElementById("date1");
        const input2 = document.getElementById("date2");
        const output = document.getElementById("wynik");

        input1.addEventListener("change", showDates);
        input2.addEventListener("change", showDates);

        function showDates() {
            if (input1.value && input2.value) {
                const dateA = new Date(input1.value);
                const dateB = new Date(input2.value);

                const options = {
                    day: "2-digit",
                    weekday: "long",
                    month: "long",
                    year: "numeric"
                };

                const formattedA = dateA.toLocaleString("pl-PL", options);
                const formattedB = dateB.toLocaleString("pl-PL", options);

                const diffMilliseconds = dateB - dateA;
                const diffDays = (diffMilliseconds / (1000 * 60 * 60 * 24)) + "";

                output.innerHTML = "Pierwsza data: " + formattedA + "<br>";
                output.innerHTML += "Druga data: " + formattedB + "<br>";
                output.innerHTML += "Różnica: " + parseInt(diffDays) + " dni";
            }
        }