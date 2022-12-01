export function renderWorkshop(workshopObject) {
    const workshopEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    nameEl.textContent = workshopObject.name;

    workshopEl.append(nameEl);

    return workshopEl;
}
