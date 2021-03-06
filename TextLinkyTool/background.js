//Menus Methods
function menuCombine(tab)
{
    //Filter block list
    let taburl=tab.url;
    if (taburl.startsWith("https://addons.mozilla.org/") || taburl.startsWith("moz-extension://") || (taburl.startsWith("about:") && taburl != "about:blank")) {
        return;
    }

    //Toolbar button enable
    browser.browserAction.enable(tab.id);

    //Context menus combine
    commonLookup.getUserTltSetting().then((tlt)=>{
        browser.menus.create({
            id: commonLookup.actlist.copySelectedPuretext + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copySelectedPuretext"),
            contexts: ["selection"]
        });
        browser.menus.create({
            id: commonLookup.actlist.copySelectedHtmltext + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copySelectedHtmltext"),
            contexts: ["selection"]
        });
        browser.menus.create({
            id: "separator-0",
            type: "separator",
            contexts: ["selection"]
        });
        browser.menus.create({
            id: commonLookup.actlist.copyLinkName + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyLinkName"),
            contexts: ["link"]
        });
        browser.menus.create({
            id: commonLookup.actlist.copyLinkUrl + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyLinkUrl"),
            contexts: ["link"]
        });
        tlt.userTltSetting.linkCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copyLinkFormatText + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyLinkFormatText").format(item.name),
                contexts: ["link"]
            });
        });
        browser.menus.create({
            id: commonLookup.actlist.copyImageUrl + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyImageUrl"),
            contexts: ["image"]
        });
        browser.menus.create({
            id: commonLookup.actlist.showImage + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"showImage"),
            contexts: ["image"]
        });
        browser.menus.create({
            id: "separator-1",
            type: "separator",
            contexts: ["link", "image"]
        });
        tlt.userTltSetting.urlsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copySelectedUrls + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copySelectedUrls").format(item.name),
                contexts: ["selection"]
            });
        });
        browser.menus.create({
            id: commonLookup.actlist.openSelectedUrls + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"openSelectedUrls"),
            contexts: ["selection"]
        });
        browser.menus.create({
            id: "separator-2",
            type: "separator",
            contexts: ["selection"]
        });
        tlt.userTltSetting.imageUrlsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copySelectedImageUrls + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copySelectedImageUrls").format(item.name),
                contexts: ["selection"]
            });
        });
        browser.menus.create({
            id: commonLookup.actlist.showSelectedImages + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"showSelectedImages"),
            contexts: ["selection"]
        });
        browser.menus.create({
            id: commonLookup.actlist.copyPagePuretext + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyPagePuretext"),
            contexts: ["page"]
        });
        browser.menus.create({
            id: commonLookup.actlist.copyPageHtmltext + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyPageHtmltext"),
            contexts: ["page"]
        });
        browser.menus.create({
            id: "separator-3",
            type: "separator",
            contexts: ["page"]
        });
        tlt.userTltSetting.urlsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copyPageUrls + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyPageUrls").format(item.name),
                contexts: ["page"]
            });
        });
        browser.menus.create({
            id: commonLookup.actlist.openPageUrls + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"openPageUrls"),
            contexts: ["page"]
        });
        browser.menus.create({
            id: "separator-4",
            type: "separator",
            contexts: ["page"]
        });
        tlt.userTltSetting.imageUrlsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copyPageImageUrls + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyPageImageUrls").format(item.name),
                contexts: ["page"]
            });
        });
        browser.menus.create({
            id: commonLookup.actlist.showPageImages + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"showPageImages"),
            contexts: ["page"]
        });
        browser.menus.create({
            id: "separator-5",
            type: "separator",
            contexts: ["selection"]
        });
        tlt.userTltSetting.aObjectsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copySelectedAObjectsInfo + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copySelectedAObjectsInfo").format(item.name),
                contexts: ["selection"]
            });
        });
        tlt.userTltSetting.imageUrlsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copySelectedImgObjectsInfo + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copySelectedImgObjectsInfo").format(item.name),
                contexts: ["selection"]
            });
        });
        browser.menus.create({
            id: "separator-6",
            type: "separator",
            contexts: ["page"]
        });
        tlt.userTltSetting.aObjectsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copyPageAObjectsInfo + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyPageAObjectsInfo").format(item.name),
                contexts: ["page"]
            });
        });
        tlt.userTltSetting.imageUrlsCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copyPageImgObjectsInfo + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyPageImgObjectsInfo").format(item.name),
                contexts: ["page"]
            });
        });
        browser.menus.create({
            id: commonLookup.actlist.copyTabName + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyTabName"),
            contexts: ["tab"]
        });
        browser.menus.create({
            id: commonLookup.actlist.copyTabUrl + "-0",
            title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyTabUrl"),
            contexts: ["tab"]
        });
        tlt.userTltSetting.tabCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copyTabFormatText + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyTabFormatText").format(item.name),
                contexts: ["tab"]
            });
        });
        browser.menus.create({
            id: "separator-7",
            type: "separator",
            contexts: ["tab"]
        });
        tlt.userTltSetting.tabsinfoCustomFormatList.forEach((item,idx)=>{
            browser.menus.create({
                id: commonLookup.actlist.copyAllTabsInfo + "-" + idx.toString(),
                title: commonLookup.getMessage(tlt.userTltSetting.locale,tlt.userTltSetting.localeData,"copyAllTabsInfo").format(item.name),
                contexts: ["tab"]
            });
        });
    });
}
function tabActivated(tab)
{
    //Menus rebuild
    browser.menus.removeAll().then(()=>{
        browser.browserAction.disable(tab.tabId);
        browser.tabs.get(tab.tabId).then(menuCombine);
    });
}
function tabUpdated(tabid, info, tab)
{
    //Menus rebuild
    if (tab.status=="complete")
    browser.menus.removeAll().then(()=>{
        browser.browserAction.disable(tab.id);
        menuCombine(tab);
    });
}

//Main Methods
browser.menus.onClicked.addListener((info, tab) => {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then((acttabs) => {
        let acttab = acttabs[0];
        let actinfo = info.menuItemId.split("-");
        let actid = actinfo[0];
        let actidx = Number(actinfo[1]);
        switch (actid) {
            case commonLookup.actlist.copySelectedPuretext:
            case commonLookup.actlist.copyPagePuretext:
            case commonLookup.actlist.copySelectedHtmltext:
            case commonLookup.actlist.copyPageHtmltext:
            case commonLookup.actlist.copySelectedUrls:
            case commonLookup.actlist.copyPageUrls:
            case commonLookup.actlist.openSelectedUrls:
            case commonLookup.actlist.openPageUrls:
            case commonLookup.actlist.copySelectedImageUrls:
            case commonLookup.actlist.copyPageImageUrls:
            case commonLookup.actlist.copySelectedAObjectsInfo:
            case commonLookup.actlist.copyPageAObjectsInfo:
            case commonLookup.actlist.copySelectedImgObjectsInfo:
            case commonLookup.actlist.copyPageImgObjectsInfo:
            case commonLookup.actlist.showSelectedImages:
            case commonLookup.actlist.showPageImages:
                executeCommand(acttab, {
                    cmd: actid,
                    idx: actidx
                });
                break;
            case commonLookup.actlist.copyLinkName:
            case commonLookup.actlist.copyLinkUrl:
            case commonLookup.actlist.copyLinkFormatText:
                executeCommand(acttab, {
                    cmd: actid,                    
                    data: {
                        name: info.linkText,
                        url: info.linkUrl
                    },
                    idx: actidx
                });
                break;
            case commonLookup.actlist.copyTabName:
            case commonLookup.actlist.copyTabUrl:
            case commonLookup.actlist.copyTabFormatText:            
                executeCommand(acttab, {
                    cmd: actid,
                    data: {
                        name: tab.title,
                        url: tab.url
                    },
                    idx: actidx
                });
                break;
            case commonLookup.actlist.copyAllTabsInfo:
                let tabsInfo=[];
                browser.tabs.query({currentWindow:true}).then((ti)=>{
                    ti.forEach((t)=>{
                        tabsInfo.push({name:t.title,url:t.url});
                    });
                    executeCommand(acttab, {
                        cmd: actid,
                        data: tabsInfo,
                        idx: actidx
                    });
                });
                break;
            case commonLookup.actlist.copyImageUrl:
                executeCommand(acttab, {
                    cmd: actid,
                    data: {
                        url: info.srcUrl
                    },
                    idx: actidx
                });
                break;
            case commonLookup.actlist.showImage:
                commonLookup.getUserTltSetting().then((tlt) => {
                    let data = [info.srcUrl];
                    let cmd = commonLookup.actlist.serverOpenTabs;
                    if (tlt.userTltSetting.openOneImageDirectly === false) {
                        cmd = commonLookup.actlist.serverShowImages;
                    }
                    serverAction({
                        cmd: cmd,
                        data: data,
                        idx: actidx
                    });
                });
                break;
            default:
                console.log("no use");
        }
    });
});
browser.browserAction.onClicked.addListener((tab) => {
    executeCommand(tab, {
        cmd: commonLookup.actlist.toolbarButtonAction
    });
});
browser.commands.onCommand.addListener((command) => {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then((acttabs) => {
        let acttab = acttabs[0];
        executeCommand(acttab, {
            cmd: commonLookup.actlist.keyboardShortcutAction
        });
    });
});

//Common Method
//execute command on page
function executeCommand(tab, msg) {
    browser.tabs.sendMessage(tab.id, msg)
        .then(() => {
            console.log("Command executed.");
        })
        .catch((errmsg) => {
            console.error(`Command failed: ${errmsg}`);
        });
}

//execute command on background
function serverAction(msg) {
    switch (msg.cmd) {
        case commonLookup.actlist.serverOpenTabs:
            msg.data.forEach((u) => {
                browser.tabs.create({
                    url: u
                });
            });
            break;
        case commonLookup.actlist.serverShowImages:
            browser.tabs.create({
                url: "imglist.html"
            }).then((tab) => {
                browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
                    if (tabId == tab.id) {
                        executeCommand(tab, msg);
                    }
                });
            });
            break;
        default:
            console.log("no use");
    }
}

//tabs listener
browser.tabs.onActivated.addListener(tabActivated);
browser.tabs.onUpdated.addListener(tabUpdated);

//background listener
browser.runtime.onMessage.addListener(serverAction);