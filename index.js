console.log("Hello, from JavaScript!");

//tabSwitcher variables
const menuItems = document.querySelectorAll('[data-tab-target]');
const menueContents = document.querySelectorAll('[data-tab-content]');
const sortItems = document.querySelectorAll('[data-sort-item]');
const navItemshover = document.querySelectorAll('[data-nav-hover]');

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
tabSwitcher(navItemshover,"red-und-he",null,"mouseover");

//product filter items visibility
//variables
const filterTitle = document.querySelectorAll(".product-filter-title");
const filterItems = document.querySelectorAll(".product-filter-items");

for (let i = 0; i < filterTitle.length; i++) {
    const element = filterTitle[i];

    element.addEventListener("click", function(){
        filterItems[i].classList.toggle("d-none");
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
