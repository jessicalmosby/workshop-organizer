import { createParticipants, getWorkshops } from '../fetch-utils.js';

const selectEl = document.querySelector('select');
const form = document.querySelector('form');

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const workshopOption = document.createElement('option');

        workshopOption.textContent = workshop.name;
        workshopOption.value = workshop.id;

        selectEl.append(workshopOption);
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');
    const contact = data.get('contact');
    const workshopId = data.get('workshop-id');

    await createParticipants({
        name: name,
        contact_info: contact,
        workshop_id: workshopId,
    });
    location.replace('../');
});
