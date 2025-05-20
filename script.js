document.addEventListener('DOMContentLoaded', () => {
    // Text transformation
    const transformBtn = document.querySelector('.transform-btn');
    const dynamicText = document.querySelector('.dynamic-text');
    
    transformBtn.addEventListener('click', () => {
        dynamicText.textContent = dynamicText.textContent === 'Try clicking the button below' 
            ? 'Text successfully transformed!' 
            : 'Try clicking the button below';
    });

    // Style toggling
    const styleBtn = document.querySelector('.style-btn');
    const styleBox = document.querySelector('.style-box');
    let isStyled = false;
    
    styleBtn.addEventListener('click', () => {
        isStyled = !isStyled;
        
        styleBox.style.backgroundColor = isStyled ? '#d8f3dc' : '#e9ecef';
        styleBox.style.color = isStyled ? '#2b9348' : 'inherit';
        styleBox.style.fontWeight = isStyled ? 'bold' : 'normal';
        styleBox.style.border = isStyled ? '2px dashed #2b9348' : 'none';
    });

    // Element management
    const addBtn = document.querySelector('.add-btn');
    const removeBtn = document.querySelector('.remove-btn');
    const elementList = document.querySelector('.element-list');
    let itemCount = 1;
    
    addBtn.addEventListener('click', () => {
        itemCount++;
        const newItem = document.createElement('div');
        newItem.className = 'list-item';
        newItem.textContent = `Item ${itemCount}`;
        elementList.appendChild(newItem);
    });
    
    removeBtn.addEventListener('click', () => {
        if (elementList.children.length > 1) {
            elementList.removeChild(elementList.lastElementChild);
            itemCount--;
        } else {
            alert('You need at least one item!');
        }
    });
});
