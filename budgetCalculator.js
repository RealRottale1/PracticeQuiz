

document.getElementById("calculateBudget").addEventListener("click", function () {
    let tmi = '';
    while (!tmi) {
        try {
            let temp = Number(prompt("What is your total monthly income?: "));
            tmi = temp
        } catch (error) {
            alert("Invalid input detected! Numbers only!");
        }

        if (!tmi) {
            alert("Invalid input detected! Numbers only!");
        }
    }

    let eme = '';
    while (!eme) {
        try {
            let temp = Number(prompt("What is estimated monthly expenses?: "));
            eme = temp
        } catch (error) {
            alert("Invalid input detected! Numbers only!");
        }

        if (!eme) {
            alert("Invalid input detected! Numbers only!");
        }
    }

    let pbd = '';
    while (!pbd) {
        try {
            let temp = Number(prompt("How many months do you want to project?: "));
            pbd = temp
        } catch (error) {
            alert("Invalid input detected! Numbers only!");
        }

        if (!pbd) {
            alert("Invalid input detected! Numbers only!");
        }
    }

    function doMathStuff(tmi, eme) {
        let monthlyExpenses = tmi - eme;
        if (monthlyExpenses < 0) {
            alert("You are spending more money than you are earning!");
        }

        let projectedExpenses = monthlyExpenses * pbd;

        return([monthlyExpenses, projectedExpenses])
    }

    let data = doMathStuff(tmi, eme);
    let monthlyExpenses = data[0];
    let projectedExpenses = data[1];

    let element = document.createElement("p");
    element.textContent = `Monthly Income: ${tmi.toFixed(2)}`;
    document.getElementById("budgetResults").append(element);

    let element2 = document.createElement("p");
    element2.textContent = `Monthly Expenses: ${eme.toFixed(2)}`;
    document.getElementById("budgetResults").append(element2);

    let element14 = document.createElement("p");
    element14.textContent = `Monthly Savings: ${monthlyExpenses.toFixed(2)}`;
    document.getElementById("budgetResults").append(element14);

    let i = 0;
    while (i < pbd && pbd > 0) {
        i++
        let element4 = document.createElement("p");
        element4.textContent = `Month ${i}` + ` Savings: ${(monthlyExpenses * i).toFixed(2)}`;
        document.getElementById("budgetResults").append(element4);
    }

    let element3 = document.createElement("p");
    element3.textContent = `Total Projected Savings: ${(projectedExpenses).toFixed(2)}`;
    document.getElementById("budgetResults").append(element3);

})