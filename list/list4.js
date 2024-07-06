function displayAnswer(elementId) {

  //s4Resuscitation.html*    
  
      if (elementId === 'vice grip') {
      alert(`Vice Grip:
      -for suspected spinal injury;  
      -approach from side;  
      -place one forearm along spine with hand cupping back of casualty's head;  
      -other forearm on casualty's sternum supporting jaw;  
      -lock both writs and squeeze the forearms together to create a vice, this immobilises casualty's body with an upward downward pressure;  
      -for casualty face down in water, vice grip first then rotate person to face up;   
      -move carefully minimise motion altering casualty's hips and legs.
      (Reference from SLSS manual)`);  
      
} else if (elementId === 'extend arm rollover') {
  alert(`-approach from side, only do in shallow water upto stomach level;;
         extend arms-extend both arms to ears & press firm along head;
         position thumbs-position thumbs lightly on back of head(prevent neck extension);
         roll gently-move fwd, slow, glide to ahcieve horizontal body + 
                     roll onto back turning face outwards + rest on crook of your arms;
         pull inwards-maintain immobilisation + pull inwards with far hand +
                      press against your chest free your inner hand to support the body;

        `);

} else if (elementId === 'head splint') {
  alert(`is extended arm support`);
} else if (elementId === 'spinal rescue steps') {
  alert(`STEPS
  1-activate emergency plan > EMS
  2-gentle approach to casualty
  3-immobilisation > vice grip, extended arm rollover
  4-airway management > establish breathing, jaw thrust
  5-recruit assistants > most experienced, knowledgeable takes charge
  6-stabilisation > head-hips-legs sequence
  7-remove from water > spinal board
  8-follow up
  .()`);
} else if (elementId === 'jaw thrust') {
  alert(`without head tilt chin lift,
  -use both hands, thumbs press below casualty's cheek bones;
  -fingers clench casualty's jaw joint and press upwards.
  -this moves the tongue opens the airway`);

}else if (elementId === 'assistants stabilise') {
  alert(`1-1st rescuer still immobilise head-neck;
         2-2nd rescuer supports hips to water surface;
         3-3rd rescuer supports ankles at water surface;
         4-4th rescuer gets spinal board/door/plank;
         5-non-breathing victim, 2nd rescuer can do EAR;
         6-if not, switch over to whoever can do EAR`);
}

else if (elementId === 'placing casualty on board') {
  alert(`1st rescuer release grip by sliding bottom arm as board replaces support to under board;
         5th rescuer  immobilise head with towels or straps;
         strap casualty to board before removal from water;
         strapping-over forehead, under arms, across upper chest, hipbones, thighs, ankles;
         do not strap-abdomen prevent vomitting, becos diaphragm breathing; 
         cervical collar if available.`);
}
else if (elementId === 'remove from water') {
  alert(`shallow water-board parrallel to water's edge, support board horizontally out of water;
         deep water - perpendicular to pool side, head first out, slide out of the water horizontally.  `);
}
else if (elementId === 'conscious person') {
  alert(`after water removal:
         -person flat on back, maintain head immobilisaton;
         -do not remove till EMS arrives;
         -no food or fluids;
         -reassure person.`);
}
else if (elementId === 'unconscious person breathing') {
  alert(`after water removal:
  -person flat on back, maintain head immobilisaton;
  -one rescuer maintain jaw thrust to open airway;
  -do not remove till EMS arrives;`);
}
else if (elementId === 'unconscious person no breathing') {
  alert(`deep water-vice grip/bear-hug grip
         bear-hug grip: slide arms from behind + 
                        bend elbows + 
                        secure head with palms pressed firmly on head
         recruit assistants on surfacing.
         maintain jaw thrust, ABC -> commence CPR`);                            
}
else if (elementId === 'spinal vomits') {
  alert(`tilt spinal board carefully to side OR
         use of suction device when possible;
         always maintain immobilisation of neck.
  `);
}
else if (elementId === 'vice grip video') {
  window.open(`/videos/ViceGripVid.mp4`,'newwindow','width=400,height=250');
}
else if (elementId === 'extended arm rollover video') {
  window.open(`/videos/ExtendedArmRolloverVideo.mp4`,'newwindow','width=400,height=250');
}
else if (elementId === 'transfer head splint to board video') {
  window.open(`/videos/TransferHeadSplintToBoard.webm`,'newwindow','width=400,height=250');
}
else if (elementId === 'jaw thrust video') {
  window.open(`/videos/webm-jawthrust.webm`,'newwindow','width=400,height=250');
}
}