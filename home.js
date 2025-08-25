function inputValidation (id) {
    const element = document.getElementById(id);
    const elementValue = element.value;
    const convertToNumber = parseInt(elementValue);
    return convertToNumber; 
}

function showForm (id){
    const forms = document.getElementsByClassName("form");
    for (const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}


let accountNumbers = 12345 ;
let pinNumber = 1234;
let getBonusCode = 343;

const transitionData = [];












// ============================shared Function====================


document.getElementById("add-money").addEventListener("click", function(){
    showForm("add-money-section")
})


document.getElementById("cashout").addEventListener("click", function(){
    showForm("withdrow-section")
    
})


document.getElementById("transfer-money").addEventListener("click", function(){
    showForm("transfer-money-section")
    
})
document.getElementById("get-bonus").addEventListener("click", function(){
    showForm("get-bonus-section")
    
})


document.getElementById("paybill").addEventListener("click", function(){
    showForm("paybill-section")
    
})
document.getElementById("transition-btn").addEventListener("click", function(){
    showForm("transition-section")
    console.log(transitionData);
    
})

// Add Money section

document.getElementById("add-money-btn").addEventListener('click', function(e) {
    e.preventDefault();
    let pinCode = parseInt(document.getElementById("pinCode").value);
    let accountNumber = parseInt(document.getElementById("account-number").value);
    if (accountNumbers === accountNumber && pinCode === pinNumber){
        let availableMoney = parseInt(document.getElementById('Available-money').innerText);
        let addMoneyBalance = inputValidation("add-money-balance");
        let totalBalance = availableMoney + addMoneyBalance;
        document.getElementById("Available-money").innerText = totalBalance;
    } else{
        alert("please submit a valid amount")
    } 
    
    const data = {
        name : "Add money",
        date : new Date().toLocaleTimeString(),
    }
    transitionData.push(data);
    
})


// withdrow-btn

document.getElementById("withdrow-btn").addEventListener('click', function(e) {
    e.preventDefault();
    let withdrowPin = inputValidation("withdrow-pin")
    let withdrowAccount = inputValidation("withdrow-account");
    let withdrowMoney = inputValidation("withdrow-money");
    let availableMoney = parseInt(document.getElementById('Available-money').innerText);

    if(withdrowMoney < 10){
        alert("minumam withdrow 10 TK");
    }
    if (accountNumbers === withdrowAccount && withdrowPin === pinNumber && withdrowMoney < availableMoney){
        let currentBalace = availableMoney - withdrowMoney;
        document.getElementById("Available-money").innerText = currentBalace;
    } else{
        alert("please submit a valid amount")
    } 
     const data = {
        name : "withdrow-money",
        date : new Date().toLocaleTimeString(),
    }
    transitionData.push(data); 
    
})


// Send money section 


document.getElementById("send-btn").addEventListener('click', function(e) {
    e.preventDefault();
    let transferPin = inputValidation("transfer-pin");
    let trnasferAccount = inputValidation("trnasfer-account");
    let trnasferMoney = inputValidation("trnasfer-money");
    let availableMoney = parseInt(document.getElementById('Available-money').innerText);

    if(trnasferMoney < 10){
        alert("minumam transfer Money 10 TK");
    }
    if (accountNumbers === trnasferAccount && transferPin === pinNumber && trnasferMoney <= availableMoney){
        let currentBalace = availableMoney - trnasferMoney;
        document.getElementById("Available-money").innerText = currentBalace;
    } else{
        alert("please submit a valid amount")
    }  
    const data = {
        name : "transfer money",
        date : new Date().toLocaleTimeString(),
    }
    transitionData.push(data); 
});

// get-bonus- section 

document.getElementById("get-bonus-btn").addEventListener('click', function(e) {
    e.preventDefault();
    let getBonusPin = inputValidation("get-bonus-pin");
    let availableMoney = parseInt(document.getElementById('Available-money').innerText);

    if (getBonusCode === getBonusPin){
        let currentBalace = availableMoney + getBonusPin;
        document.getElementById("Available-money").innerText = currentBalace;
        document.getElementById("get-bonus-pin").value ="";
    } else{
        alert("please submit a valid amount")
    }  
    const data = {
        name : "Get Bonus ",
        date : new Date().toLocaleTimeString(),
    }
    transitionData.push(data); 
});


// Pay Bill section 

document.getElementById("paybill-btn").addEventListener('click', function(e) {
    e.preventDefault();
    let paybillPinCode = inputValidation("payBillPin");
    let paybillAccount = inputValidation("paybill-number");
    let paybillMoney = inputValidation("paybill-balance");
    let availableMoney = parseInt(document.getElementById('Available-money').innerText);

    if(paybillMoney < 10){
        alert("minumam transfer Money 10 TK");
    }
    if (accountNumbers === paybillAccount && paybillPinCode === pinNumber && paybillMoney <= availableMoney){
        let currentBalace = availableMoney - paybillMoney;
        document.getElementById("Available-money").innerText = currentBalace;
    } else{
        alert("please submit a valid amount")
    }  
    const data = {
        name : "Pay bill money",
        date : new Date().toLocaleTimeString(),
    }
    transitionData.push(data); 
});


// Transition section 

document.getElementById("transition-btn").addEventListener("click", function(e){
    e.getPredictedEvents();
    const transitionContainer = document.getElementById("transition-container");
    transitionContainer.innerText = "";
    for(let data of transitionData){
        const div = document.createElement("div")
        div.innerHTML = `
         <div class="flex justify-between items-center bg-white py-3 px-8 pl-2.5 w-[400px] m-auto rounded-3xl shadow-xl cursor-pointer mb-3">
                <div class="icon-box flex gap-3 items-center">
                     <div class="bg-[#1e1e1e0f] p-5 rounded-[50%]">
                        <img src="./images/wallet1.png" alt="">
                    </div>
                    <div class="text-box">
                        <h2 class="font-bold">${data.name}</h2>
                        <p style="font-size: 12px;" class="text-[#08080880]">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transitionContainer.appendChild(div);
    }





})

document.getElementById("logout-btn").addEventListener("click", function(e) {
    e.preventDefault()
    window.location.href = "index.html";
})