![wireframe](/assets/wireframe.png)
![supabase_workshops](/assets/workshops.png)
![supabase_participants](/assets/participants.png)

## Plan

-   add test data to workshops and participants
-   add RLS so only authenticated users can do things with the data (select, update, delete, create)
    -   workshops > enable read for all users
    -   participants >
        -   enable read for all users
        -   insert authenticated only
        -   delete authenticated only

-(landing page) Workshops page

-   getWorkshops function (fetch all of the workshops and their participants)
-   render function that displays the workshops
    -loop through workshops and display

-   (new page) Create page

    -   HTML > form elements with inputs for name, contact, placeholder select for workshops
    -   get our workshops (getWorkshops) and dynamically add option to select
    -   add createParticipant function to fetch-utils
    -   add event for the form submit, grabbing the form data and sending it to supabase (calling createParticipant)

-   delete member (on landing page)
    -   add deleteParticipant(id) in fetch-utils
        -make participant element clickable & delete on click
