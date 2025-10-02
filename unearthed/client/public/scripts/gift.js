const renderGift = async () => {
    console.log('rendering gift');
    const requestedID = parseInt(window.location.href.split('/').pop());
    console.log(requestedID);

    const response = await fetch('/gifts');
    const data = await response.json();

    const giftContent = document.getElementById('gift-content');

    let gift;

    gift = data.find(gift => gift.id === requestedID);
    console.log('Gift: ', gift);

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`
    } else {
        const message = document.createElement('h2');
        message.textContent = 'Gift Not Found';
        giftContent.appendChild(message);
    }
}

renderGift();