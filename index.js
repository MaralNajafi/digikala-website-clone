console.log("Hello, from JavaScript!");

//header search box
//variables
const searchDisplay = document.querySelector(".search-box-display");
const searchWrapper = document.querySelector(".search-box-wrapper");

searchDisplay.addEventListener("click", () =>{
    searchWrapper.classList.add("show");
})



//header nav special hover effect
//variables
const redLine = document.querySelector(".red-line");
const navItems = document.querySelectorAll(".nav-right-item");

setTimeout(() => {
    navItems.forEach(navItem =>{
        
        navItem.addEventListener("mouseover", () =>{
            let redLineWidth = navItem.offsetWidth;
            let redLineLeft = navItem.offsetLeft;
            redLine.style.width = `${redLineWidth}px`;
            redLine.style.left = `${redLineLeft}px`;
        })
        navItem.addEventListener("mouseout", () =>{
            redLine.style.width = "0";
        })
    
    })
}, 0);


//tabSwitcher variables
const menuItems = document.querySelectorAll('[data-tab-target]');
const menueContents = document.querySelectorAll('[data-tab-content]');
const sortItems = document.querySelectorAll('[data-sort-item]');


function tabSwitcher(tabs,className,tabsContent,event) {
    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        tab.addEventListener(event, function(){
            const crTab = document.getElementsByClassName(className)[0];
   
            crTab.classList.remove(className);
            tab.classList.add(className);
   
           if (tabsContent) {
            tabsContent.forEach(tabContent =>{
                tabContent.classList.remove(className)
            })
    
            tabsContent[i].classList.add(className);
           }
        })
    }
}


tabSwitcher(menuItems,"active",menueContents,"mouseover");
tabSwitcher(sortItems,"active-sort",null,"click");

//product filter items visibility
//variables
const filterTitle = document.querySelectorAll(".inc-sub-item");
const filterItems = document.querySelectorAll(".product-filter-items");

for (let i = 0; i < filterTitle.length; i++) {
    const element = filterTitle[i];

    element.addEventListener("click", function(){
        filterItems[i].classList.toggle("h-max-360");
        element.classList.toggle("no-border-b");
    })
    
}

//product filter check
//variables
const dataCheck = document.querySelectorAll('[data-check-target]');
const dataCheckStatus = document.querySelectorAll('[data-check-status]');

for (let i = 0; i < dataCheck.length; i++) {
    const element = dataCheck[i];
    element.addEventListener("click", function(){
      dataCheckStatus[i].classList.toggle("checked"); 
    })
    
}

//product filter switch btn
//variables
const switchBtn = document.querySelector(".switch-btn");
const switchHandler = document.querySelector(".switch-btn span");
console.log(switchHandler);

//function
switchBtn.addEventListener("click",() =>{
    switchBtn.classList.toggle("switch-btn-on");
})



//price range handler
//variables
const priceInputs = document.querySelectorAll(".price-input");
const minPrice = document.getElementById("price-min");
const maxPrice = document.getElementById("price-max");
const minRange = document.getElementById("range-min");
const maxRange = document.getElementById("range-max");
const maxValue = 21399900;
const minValue = 0;
const sliderProgress = document.querySelector(".slider .progress")





//changing price input based on range input

minRange.addEventListener("input", function(){
    const maxRangeVal = +maxRange.value;
    const minRangeVal = +minRange.value;
    const rangeValGap = maxRangeVal - minRangeVal;

    if (rangeValGap < 0) {
        minRange.value = minPrice.value.replace(/[^0-9]/g, "");
        return
    }

    minPrice.value = minRangeVal.toLocaleString();
    let rightD = minRangeVal * 100 / maxValue;
    sliderProgress.style.right = `${rightD}%`;
})

maxRange.addEventListener("input", function(){
    const maxRangeVal = +maxRange.value;
    const minRangeVal = +minRange.value;
    const rangeValGap = maxRangeVal - minRangeVal;

    if (rangeValGap < 0) {
        maxRange.value = maxPrice.value.replace(/[^0-9]/g, "");
        return
    }

    maxPrice.value = maxRangeVal.toLocaleString();
    let leftD = -((maxRangeVal * 100 / maxValue) - 100);
    sliderProgress.style.left = `${leftD}%`;
})

//changing range input based on price input

minPrice.addEventListener("input", function(){
    let minPriceVal = minPrice.value.replace(/[^0-9]/g, "");
    const maxPriceVal = maxPrice.value.replace(/[^0-9]/g, "");
    const priceValGap = maxPriceVal - minPriceVal;
    if (priceValGap < 0) {
        minPrice.value = maxPriceVal;
        minPriceVal = maxPriceVal;
    }
    minRange.value = minPriceVal;
    let rightD = minPriceVal * 100 / maxValue;
    
    if (minPriceVal < minValue) {
        sliderProgress.style.right = "0";
    }else{
        sliderProgress.style.right = `${rightD}%`;
    }
})

maxPrice.addEventListener("input", function(){
    const minPriceVal = minPrice.value.replace(/[^0-9]/g, "");
    let maxPriceVal = maxPrice.value.replace(/[^0-9]/g, "");
    const priceValGap = maxPriceVal - minPriceVal;
    if (priceValGap < 0) {
        maxPrice.value = minPriceVal;
        maxPriceVal = minPriceVal;
    }
    maxRange.value = maxPriceVal;
    let leftD = -((maxPriceVal * 100 / maxValue) - 100);
    
    if (maxPriceVal > maxValue) {
        sliderProgress.style.left = '0%';
    }else{
        sliderProgress.style.left = `${leftD}%`;
    }
})

// thousand seperator
priceInputs.forEach(input =>{
    input.addEventListener('input', ()=>{
        const inputVal = input.value.replace(/[^0-9]/g, "");
        const inputValNum = +inputVal;
        input.value = inputValNum.toLocaleString();    
    })
})


// no border on the left side of products at the left edge
// variables
const products = document.querySelectorAll(".product");

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    let productNo = i + 1
    if (productNo % 4 === 0) {
        product.classList.add("no-border-l")
    }
    
}
