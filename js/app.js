$('#flightmode').live('touchstart touchend', function(event) {
  if (event.type == 'touchstart') {
	console.log('touchstart on: '+event.target.id);
	  switch(event.target.id)
	  {
		case 'trim':
		  currentCmd = 'trim';
		  event.preventDefault();
	  	  break;
	  	case 'moveForward':
		  currentCmd = 'moveForward';
          event.preventDefault();
	  	  break;
	  	case 'moveBackward':
		  currentCmd = 'moveBackward';
          event.preventDefault();
	  	  break;
	  	case 'rotateLeft':
		  currentCmd = 'rotateLeft';
          event.preventDefault();
	  	  break;
	  	case 'rotateRight':
		  currentCmd = 'rotateRight';
          event.preventDefault();
	  	  break;
	  	case 'start':
		  currentCmd = 'trim';
          console.log('--- Starting UDP-Command-Interval ---');
          intRef = setInterval(doCurrentCmd,30);
		  event.preventDefault();
	      break;
	  	case 'takeoff':
		  currentCmd = 'takeoff';
          event.preventDefault();
	      break;
	  	case 'land':
		  currentCmd = 'land';
     	  event.preventDefault();
	      break;
		default:
		}
  } else {
    console.log("touchend: "+event.target.id);
      currentCmd = 'hover';
      event.preventDefault();
}
});
	
	
var showStatus = function (_status){
	$('#statusWindow').text(_status);
};