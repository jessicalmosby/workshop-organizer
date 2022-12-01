/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getWorkshops } from './fetch-utils.js';
import { renderWorkshop } from './render-utils.js';

/* Get DOM Elements */
const workshopListEl = document.getElementById('workshop-list');

/* Events */
// window event listener go here

/* Display Functions */
async function fetchAndDisplayWorkshops() {
    // await getWorkshops();
    workshopListEl.textContent = '';

    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopEl = renderWorkshop(workshop);
        const participantsEl = document.createElement('ul');
        for (let participant of workshop.participants) {
            const participantEl = document.createElement('li');
            participantEl.textContent = `${participant.name}: ${participant.contact_info}`;

            // participantEl.addEventListener('click', async () => {
            //     deleteParticipant function go here
            //     fetchAndDisplayWorkshops();
            // });
            participantsEl.append(participantEl);
        }
        workshopEl.append(participantsEl);
        workshopListEl.append(workshopEl);
    }
}
