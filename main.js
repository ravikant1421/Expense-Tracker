let inputChooseAmt = document.querySelector('#input_choose_amt');
let selChooseDesc = document.querySelector('#sel_choose_desc');
let selChooseCate = document.querySelector('#sel_choose_cate');
let btnAddExp = document.querySelector('#btn_add_exp');
let ulData = document.querySelector('#ul_data');

btnAddExp.addEventListener('click', () => {
    let inputChooseAmtText = inputChooseAmt.value;
    let selChooseDescText = selChooseDesc.options[selChooseDesc.selectedIndex].text;
    let selChooseCateText = selChooseCate.options[selChooseCate.selectedIndex].text;

    let li = document.createElement('li');
    let deleteExpense = document.createElement('button');
    let editExpense = document.createElement('button');

    deleteExpense.setAttribute('class', 'deleteExpenseClass');
    editExpense.setAttribute('class', 'editExpenseClass');
    deleteExpense.innerText = 'Delete Expense';
    editExpense.innerText = 'Edit Expense';
    li.textContent = inputChooseAmtText + "_" + selChooseDescText + "_" + selChooseCateText;
    let localStorageValue = li.textContent;
    li.append(deleteExpense);
    li.append(editExpense);
    ulData.append(li);

    let localStorageKey = li.textContent;
    localStorage.setItem(localStorageKey, localStorageValue);
});

ulData.addEventListener('click', (event) => {

    if (event.target.closest('.deleteExpenseClass')) {
        let li = event.target.closest('li');
        localStorage.removeItem(li.textContent);
        li.remove();
    }
    if (event.target.closest('.editExpenseClass')) {
        let li = event.target.closest('li');
        let [inputChooseAmtText, selChooseDescText, selChooseCateText] = localStorage.getItem(li.textContent).split('_');
        inputChooseAmt.value = inputChooseAmtText;
        for (let i = 0; i < selChooseDesc.options.length; i++) {
            if (selChooseDesc.options[i].text === selChooseDescText) {
                selChooseDesc.selectedIndex = i;
                break;
            }
        }
        for (let i = 0; i < selChooseCate.options.length; i++) {
            if (selChooseCate.options[i].text === selChooseCateText) {
                selChooseCate.selectedIndex = i;
                break;
            }
        }
        localStorage.removeItem(li.textContent);
        li.remove();
    }
})
window.addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let arr = localStorage.getItem(key).split('_');
        let inputChooseAmtText = arr[0];
        let selChooseDescText = arr[1];
        let selChooseCateText = arr[2];

        let li = document.createElement('li');
        let deleteExpense = document.createElement('button');
        let editExpense = document.createElement('button');

        deleteExpense.setAttribute('class', 'deleteExpenseClass');
        editExpense.setAttribute('class', 'editExpenseClass');
        deleteExpense.innerText = 'Delete Expense';
        editExpense.innerText = 'Edit Expense';
        li.textContent = inputChooseAmtText + "_" + selChooseDescText + "_" + selChooseCateText;
        li.append(deleteExpense);
        li.append(editExpense);
        ulData.append(li);
    }
});