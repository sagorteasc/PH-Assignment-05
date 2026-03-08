document.getElementById('search').addEventListener('click', function () {
    showSpinner();

    // clear active button status
    document.getElementById('all-btn').classList.remove('btn-primary');
    document.getElementById('open-btn').classList.remove('btn-primary');
    document.getElementById('close-btn').classList.remove('btn-primary');
    document.getElementById('issues').innerHTML = '';

    // extract the value from input field
    const searchItem = document.getElementById('input');
    const searchItemValue = searchItem.value.trim().toLowerCase();
    searchItem.value = '';

    // fetch the data
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchItemValue}`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.data;
            const searchElement = allCards.filter(card => card.title.toLowerCase().trim().includes(searchItemValue));
            displayIssues(searchElement);
            removeSpinner();
        })
})