// store the relationship between tab id and contents
const data = [
    {
        tabId: "tab1",
        title: 'React',
        hash: "#react",
        content: "React is a JavaScript library for building user interfaces.",
    },
    {
        tabId: "tab2",
        title: 'Vue',
        hash: "#vue",
        content: "Vue is the Progressive JavaScript Framework.",
    },
    {
        tabId: "tab3",
        title: 'Angular',
        hash: "#angular",
        content: "Angular is a platform for building mobile and desktop web applications.",
    }
];

const content = document.querySelector(".content-text");
const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", function (event) {
    if (event.target.id) {
        updateActiveTab(event.target.id);
        updateUrl(event.target.id);
    }
});

// popstate event is fired when the active history entry changes while the user navigates the session history
window.addEventListener('popstate', (event) => {
    console.log(event.state);
    updateActiveTab(event.state.tabId);
});


// function which updates the active tab
const updateActiveTab = (selectedTabId) => {
    const currentTab = tabs.querySelector(".active");
    if (currentTab.id !== selectedTabId) {
        // remove the active class of the previously selected tab
        currentTab.classList.remove("active");
    }

    const selectedTab = document.getElementById(selectedTabId);
    // add active class to the selected tab
    selectedTab.classList.add("active");

    // change the content of the tab
    content.innerHTML = getTabData(selectedTabId).content;
};


// function which updates the url
const updateUrl = (selectedTabId) => {
    const tabData = getTabData(selectedTabId);
    // update the URL - pushState -> https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
    history.pushState(
        { tabId: tabData.tabId, title: tabData.title },
        tabData.title,
        `index.html${tabData.hash}`
    );
}


// function which finds the data of the selected tab
const getTabData = (tabId) => {
    return data.find(tab => tab.tabId === tabId);
}


// self invoked arrow function -> https://flaviocopes.com/javascript-iife/
// this function is called when the application is started
(() => {
    // get tab id from the location's hash
    const selectedTab = data.find(d => d.hash === window.location.hash);
    if (selectedTab) {
        // update the active tab with the selected tab
        updateActiveTab(selectedTab.tabId);
        // update the url
        updateUrl(selectedTab.tabId);
    } else {
        // set the default tab
        updateActiveTab('tab1');
        // set the default url
        updateUrl('tab1');
    }
})();