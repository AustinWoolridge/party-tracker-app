ParentComponent : is like you receiving the guest list from your parents.
PartyComponent is where you see and display who's invited to your party.

Once parent component is set using "props" (your guest list) you can't change it back.

________________________________


PartyMoodComponent : is where you manage and display the party mood level using state.
When you click the button, it increases the mood level and updates it in real-time.

Even though State was set to 5 initially you can update it in real time because is "state"