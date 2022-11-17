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

export default tabSwitcher;