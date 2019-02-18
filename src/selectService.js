const selectedCats = [];

const selectCat = id => {
    const index = selectedCats.indexOf(id);

    if (index !== -1) {
        selectedCats.splice(index, 1);
        return;
    }
    selectedCats.push(id);
};

export { selectCat, selectedCats };
