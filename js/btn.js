// all button
document.getElementById('all-btn').addEventListener('click', function () {
    showSpinner();
    document.getElementById('issues').innerHTML = '';

    // active button status
    this.classList.add('btn-primary');
    document.getElementById('open-btn').classList.remove('btn-primary');
    document.getElementById('close-btn').classList.remove('btn-primary');

    displayIssues(allIssues);
    removeSpinner();
})

// open button
document.getElementById('open-btn').addEventListener('click', function () {
    showSpinner();
    document.getElementById('issues').innerHTML = '';

    // active button status
    this.classList.add('btn-primary');
    document.getElementById('all-btn').classList.remove('btn-primary');
    document.getElementById('close-btn').classList.remove('btn-primary');

    // filtering data
    const openIssues = allIssues.filter(open => open.status === 'open');

    displayIssues(openIssues);
    removeSpinner();
})

// close button
document.getElementById('close-btn').addEventListener('click', function () {
    showSpinner();
    document.getElementById('issues').innerHTML = '';

    // active button status
    this.classList.add('btn-primary');
    document.getElementById('all-btn').classList.remove('btn-primary');
    document.getElementById('open-btn').classList.remove('btn-primary');

    // filtering data
    const closeIssues = allIssues.filter(close => close.status === 'closed');

    displayIssues(closeIssues);
    removeSpinner();
})