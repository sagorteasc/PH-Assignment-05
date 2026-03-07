document.getElementById('search').addEventListener('click', function () {
    showSpinner();

    document.getElementById('issues').innerHTML = '';

    const searchItem = document.getElementById('input');
    const searchItemValue = searchItem.value.trim().toLowerCase();

    // fetch the data
    setTimeout(() => {
        fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchItemValue}`)
            .then(res => res.json())
            .then(data => {
                const allCards = data.data;
                const searchElement = allCards.filter(card => card.title.trim().includes(searchItemValue));
                displayIssues(searchElement);
                removeSpinner();
            })

    }, 2000);
})