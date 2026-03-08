const detailsModal = async (id) => {
    try {
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
        const data = await res.json()
        const singleDetail = data.data;

        const modalBox = document.getElementById('issue-detail');
        const modalContainer = document.getElementById('modal-container');

        modalContainer.innerHTML = `
            <div class="space-y-3">
                <h3 class="font-bold text-2xl text-[#1F2937]">${singleDetail.title}</h3>
                <div class="flex items-center gap-2">
                    <button class="px-4 py-2 text-white rounded-full ${singleDetail.status === 'open' ? 'bg-[#00A96E]' : 'bg-[#A855F7]'}">${singleDetail.status === 'open' ? 'Opened' : 'Closed'}</button>
                    <span class="text-[#64748B]"> • </span>
                    <p class="text-xs text-[#64748B]">Opened by ${singleDetail.author}</p>
                    <span class="text-[#64748B]"> • </span>
                    <p class="text-xs text-[#64748B]">${new Date(singleDetail.createdAt).toLocaleDateString()}</p>
                </div>
                <div class="flex gap-1 items-center whitespace-nowrap">
                    ${labels(singleDetail.labels)}
                </div>
                <p class="text-[#64748B]">${singleDetail.description}</p>
                <div class="bg-[#F8FAFC] rounded-lg p-4 flex justify-between shadow-sm">
                    <div>
                        <p class="text-[#64748B]">Assignee:</p>
                        <h3 class="text-[#1F2937] font-semibold">${singleDetail.assignee === '' ? 'Unknown' : singleDetail.assignee}</h3>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <p class="text-[#64748B]">Priority:</p>
                        <h3 class="rounded-full w-fit px-4 py-2 text-white ${singleDetail.priority === 'high' ? 'bg-[#EF4444]' : singleDetail.priority === 'medium' ? 'bg-[#F59E0B]' : 'bg-[#9CA3AF]'}">${singleDetail.priority === 'high' ? 'HIGH' : singleDetail.priority === 'medium' ? 'MEDIUM' : 'LOW'}</h3>
                    </div>
                </div>
            </div>
        `
        modalBox.showModal();
    }

    catch (err) {
        alert('Error', err);
    }
}