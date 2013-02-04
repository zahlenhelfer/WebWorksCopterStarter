$('#flightmode').live('touchstart touchend', function(event) {
  if (event.type == 'touchstart') {
	console.log('touchstart on: '+event.target.id);
	  switch(event.target.id)
	  {
		case 'trim':
		  currentCmd = 'trim';
	  	  break;
	  	case 'moveForward':
		  currentCmd = 'moveForward';
	  	  break;
	  	case 'moveBackward':
		  currentCmd = 'moveBackward';
	  	  break;
	  	case 'rotateLeft':
		  currentCmd = 'rotateLeft';
	  	  break;
	  	case 'rotateRight':
		  currentCmd = 'rotateRight';
	  	  break;
	  	case 'start':
		  currentCmd = 'trim';
          console.log('--- Starting UDP-Command-Interval ---');
          intRef = setInterval(doCurrentCmd,30);
	      break;
	  	case 'takeoff':
		  currentCmd = 'takeoff';
	      break;
	  	case 'land':
		  currentCmd = 'land';
	      break;
		default:
		}
  } else {
    console.log("touchend: "+event.target.id);
      currentCmd = 'hover';  
}
});
	
	
var showStatus = function (_status){
	$('#statusWindow').text(_status);
};