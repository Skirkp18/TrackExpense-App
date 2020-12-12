const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

let db;
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = ({ target }) => {
    db = target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = ({ target }) => {
    db = target.result;
    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function(event) {
    console.log("error")
    // saveRecord(event);

};


function saveRecord(data) {
    console.log(data);
    // register service worker

    // check for service worker


    // SW lifecycle

        // Install -> create bulk (pending) collection

        // activate ->


        // saveRecord -> save to indexedDB

        // listen online and send records
        
}