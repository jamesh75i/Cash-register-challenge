var denomination = [
    {name: "ONE HUNDRED", value: 10000},
    {name: "TWENTY", value: 2000},
    {name: "TEN", value: 1000},
    {name: "FIVE", value: 500},
    {name: "ONE", value: 100},
    {name: "QUARTER", value: 25},
    {name: "DIME", value: 10},
    {name: "NICKEL", value: 5},
    {name: "PENNY", value: 1}
];


var usableMoney = [
    {name: "ONE HUNDRED", value: 0},
    {name: "TWENTY", value: 0},
    {name: "TEN", value: 0},
    {name: "FIVE", value: 0},
    {name: "ONE", value: 0},
    {name: "QUARTER", value: 0},
    {name: "DIME", value: 0},
    {name: "NICKEL", value: 0},
    {name: "PENNY", value: 0}
];

var changeGiven = [
    {name: "ONE HUNDRED", value: 0},
    {name: "TWENTY", value: 0},
    {name: "TEN", value: 0},
    {name: "FIVE", value: 0},
    {name: "ONE", value: 0},
    {name: "QUARTER", value: 0},
    {name: "DIME", value: 0},
    {name: "NICKEL", value: 0},
    {name: "PENNY", value: 0}
];



function checkCashRegister(price, cash, cid) {
    //Cash given by the custome subtract the price of the 
    let change = Math.round(cash * 100) - Math.round(price * 100); 
    let totalAmountInRegsiter = 0;
    let countUp = 0;
    let countDown = denomination.length - 1;

    //Take the cid and change it into the same order
    while(countUp !== denomination.length){
        usableMoney[countUp].value = Math.round(cid[countDown][1] * 100);
        countUp++;
        countDown--;
    }
    

    //Add the total up
    for(let i = 0; i < denomination.length; i++){
        totalAmountInRegsiter += Math.round(cid[i][1] * 100);
    }

    //to be returned 
    let cashOutput = {status: null, change: []};
    
    
    if(totalAmountInRegsiter === change){
        cashOutput.status = "CLOSED";
        cashOutput.change = cid;
        console.log(cashOutput);
        return cashOutput;    
    }
    //We have less in the register than the change required
    else if(totalAmountInRegsiter < change){
        cashOutput.status = "INSUFFICIENT_FUNDS";
        console.log(cashOutput);
        return cashOutput;
    }
    else{
        while(change !== 0){
            //console.log(`CHANGE: ${change}`);
            if(change >= 10000 && usableMoney[0].value > 0){
                //console.log("Subtract $100");
                changeGiven[0].value += denomination[0].value;
                usableMoney[0].value -= denomination[0].value;
                change -= denomination[0].value;
            }
            else if(change >= 2000 && usableMoney[1].value > 0){
                //console.log("Subtract $20");
                changeGiven[1].value += denomination[1].value;
                usableMoney[1].value -= denomination[1].value;
                change -= denomination[1].value;
            }
            else if(change >= 1000 && usableMoney[2].value > 0){
                //console.log("Subtract $10");
                changeGiven[2].value += denomination[2].value;
                usableMoney[2].value -= denomination[2].value;
                change -= denomination[2].value;
            }
            else if(change >= 500 && usableMoney[3].value > 0){
                //console.log("Subtract $5");
                changeGiven[3].value += denomination[3].value;
                usableMoney[3].value -= denomination[3].value;
                change -= denomination[3].value;
            }
            else if(change >= 100 && usableMoney[4].value > 0){
                //console.log("Subtract $1");
                changeGiven[4].value += denomination[4].value;
                usableMoney[4].value -= denomination[4].value;
                change -= denomination[4].value;
            }
            else if(change >= 25 && usableMoney[5].value > 0){
                //console.log("Subtract $0.25")
                changeGiven[5].value += denomination[5].value;
                usableMoney[5].value -= denomination[5].value;
                change -= denomination[5].value;
                console.log(`CHANGE: ${change}`);
            }
            else if(change >= 10 && usableMoney[6].value > 0){
                //console.log("Subtract $0.10");
                changeGiven[6].value += denomination[6].value;
                usableMoney[6].value -= denomination[6].value;
                change -= denomination[6].value;
            }
            else if(change >= 5 && usableMoney[7].value > 0){
                //console.log("Subtract $0.05");
                changeGiven[7].value += denomination[7].value;
                usableMoney[7].value -= denomination[7].value;
                change -= denomination[1].value;
            }
            else if(change >= 1 && usableMoney[8].value > 0){
                //console.log("Subtract $0.01");
                changeGiven[8].value += denomination[8].value;
                usableMoney[8].value -= denomination[8].value;
                change -= denomination[8].value;
            }
            else{
                //Gone over everything we cannot provide them the change due to what is in the cash register
                cashOutput.status = "INSUFFICIENT_FUNDS";
                return cashOutput;
            }
    
    
        }
    }
    let anarray = [];
    console.log(cashOutput.status);
    if(!cashOutput.status === "INSUFFICIENT_FUNDS"){
        //if it is not equal to the above option 
        console.log("In the return block");
        for(let i = 0; i < denomination.length; i++){
            if(changeGiven[i].value > 0){
                //Grab only those with something in and push to the array 
               anarray.push([denomination[i].name, changeGiven[i].value /100]);
            }
        }
        cashOutput.status = "OPEN";
        cashOutput.change = anarray;
        return cashOutput;
    }
    
        
    
    

    

    
    

    
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); 
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])