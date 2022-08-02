var list = document.querySelector('ul');
var input = document.querySelector('input');
var button = document.querySelector('button');

button.addEventListener('click', () => {
    var myItem = input.value;
    input.value = '';

    var listItem = document.createElement('li');
    var listText = document.createElement('span');
    var listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'DELETE';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});
