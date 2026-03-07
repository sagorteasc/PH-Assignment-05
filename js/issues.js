// fetch issues
const loadIssues = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json();
    displayIssues(data.data);
}

// display issues
const displayIssues = (issues) => {
    const issuesContainer = document.getElementById('issues');

    issues.forEach(issue => {
        // console.log(issue);
        const issueCards = document.createElement('div');
        issueCards.innerHTML = `
            <div onclick="detailsModal(${issue.id})" class="card bg-base-100 h-full shadow-sm border-t-5 ${issue.status === 'open' ? 'border-t-[rgb(99,230,190)]' : 'border-t-[rgb(177,151,252)]'}">
                <div class="flex flex-col gap-0.5 p-6 flex-grow">
                    <div class="flex justify-between mb-3">
                        <img src=${issue.status === 'open' ? "assets/Open-Status.png" : "assets/Closed-Status.png"} alt="">
                        <h3 class="px-4 py-2 font-medium text-sm rounded-[100px] ${issue.priority === 'high' ? 'bg-[#FEECEC] text-[#EF4444]' : issue.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : 'bg-[#EEEFF2] text-[#9CA3AF]'}">
                        ${issue.priority === 'high' ? 'HIGH' : issue.priority === 'medium' ? 'MEDIUM' : 'LOW'}
                        </h3>
                    </div>
                    <div class="space-y-1 mb-3 flex-grow">
                        <h3 class="font-semibold text-sm text-[#1F2937]">${issue.title}</h3>
                        <p class="text-xs text-[#64748B]">${issue.description}</p>
                    </div>
                    <div class="flex gap-1 items-center whitespace-nowrap mb-3">
                        ${labels(issue.labels)}
                    </div>
                    <hr class="text-gray-300 mb-3">
                    <div class="text-[#64748B] text-xs flex justify-between items-center">
                        <h3>#${issue.id} ${issue.author}</h3>
                        <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div class="text-[#64748B] text-xs flex justify-between items-center">
                        <h3>Assignee: ${issue.assignee === '' ? 'Unknown' : issue.assignee}</h3>
                        <p>${new Date(issue.updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
        issuesContainer.appendChild(issueCards);
    });
}

// labels array
const labels = (items) => {
    const label = items.map(item => `<span class="px-1.5 py-2 bg-[#FFF8DB] text-[#D97706] rounded-[100px] font-medium text-xs">${item.toUpperCase()}</span>`)
    return (label.join(" "));
}

loadIssues();