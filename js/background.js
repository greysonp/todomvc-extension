var STORAGE_ID = 'todos-angularjs';

// Creates a context menu item that will appear when you
// right-click selected text
chrome.contextMenus.create({
    'title': 'Add as a task',
    'contexts': ['selection'],
    'onclick': createTask
});

function createTask(info, tab) {
    // Get the stored tasks
    chrome.storage.sync.get(STORAGE_ID, function(data) {
        var todos = data[STORAGE_ID] || [];

        // Add a new task that has a title of the text the
        // user selected
        todos.push({
            'title': info.selectionText,
            'completed': false
        });

        // Store the updated list of tasks
        var storedTasks = {};
        storedTasks[STORAGE_ID] = todos;
        chrome.storage.sync.set(storedTasks);
    });
}