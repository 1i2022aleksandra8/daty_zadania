const input = document.getElementById("dateInput");
        const output = document.getElementById("output");

        input.addEventListener("change", function () {
            const selectedDate = new Date(this.value);

            const day = selectedDate.getDate();
            const month = selectedDate.getMonth() + 1; 
            const year = selectedDate.getFullYear();
            const weekday = selectedDate.toLocaleString("pl-PL", { weekday: "long" });

            output.innerHTML = "";
            output.innerHTML += "Dzień: " + day + "<br>";
            output.innerHTML += "Miesiąc: " + month + "<br>";
            output.innerHTML += "Rok: " + year + "<br>";
            output.innerHTML += "Dzień tygodnia: " + weekday + "<br>";
        });




        const data = new Date 
        const options = { 
            weekday: "long", 
            year: "numeric", 
            month: "long", 
            day: "numeric", 
        };

        console.log(data.toLocaleString("en-US")); 
        console.log(data.toLocaleString("ko-KR")); 
        console.log(data.toLocaleString("ja-JP-u-ca-japanese")); 
        console.log(data.toLocaleString("ar-EG")); 
        
        document.write("en-US: " + data.toLocaleString("en-US") + "<br>"); 
        document.write("ko-KR: " + data.toLocaleString("ko-KR") + "<br>"); 
        document.write("ja-JP-u-ca-japanese: " + data.toLocaleString("ja-JP-u-ca-japanese") + "<br>"); 
        document.write("ar-EG: " + data.toLocaleString("ar-EG") + "<br>");