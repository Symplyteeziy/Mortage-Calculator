function calculateMortage(){
    const mortageamount = document.getElementById("mortage-amount").value;
    const mortageterm = document.getElementById("mortage-term").value;
    const interestrate = document.getElementById("interest-rate").value;
    const repayment = document.getElementById("repayment");
    const interestonly = document.getElementById("interest-only");


    if (mortageamount && mortageterm) {
        const result = mortageamount * mortageterm;
        resultElement.textContent = `ggh: ${result}`;
        
    
    }
    else{
        resultElement.textContent = '';
    }
}