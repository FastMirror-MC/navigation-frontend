{
    const nodes = document.querySelectorAll('.link');
    for (const node of nodes) {
        node.addEventListener('click',(e)=>{
            e.preventDefault();
            e.stopPropagation();
            const tempATag = document.createElement('a');
            tempATag.href = e.target.dataset.href;
            tempATag.setAttribute('target','_blank');
            tempATag.click();
            tempATag.remove();
        })
    }
}

// Coded By 戴兜 With All of Love

