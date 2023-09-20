// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation) {
    const scubahq = 42; 
    return Math.abs (pickuplocation - scubahq);
  }
  


  function distanceFromHqInFeet(pickuplocation) {
    distanceFromHqInBlocks(pickuplocation);
    const blockfeet= 264;
    return (blockfeet*distanceFromHqInBlocks(pickuplocation))

  }

    function distanceTravelledInFeet(pickuplocation, scubahq) {
        const blockfeet=264;
        return Math.abs((pickuplocation-scubahq)*264)
      }



      function calculatesFarePrice(pickuplocation, scubahq) {
    
        const totalFeet = Math.abs(scubahq - pickuplocation) * 264; 

        if (totalFeet > 2500) {
            return 'cannot travel that far';
          }

        if (totalFeet <= 400) {
            return 0; 
          } else if (totalFeet <= 2000) {
            return (totalFeet - 400) * 0.02; 
          } else {
            return 25; 
          }
        
        
        
      }

      