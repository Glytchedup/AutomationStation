var cmd=require('node-cmd');

export default function() { 
   
    cmd.run(
        'START /I java -jar mariott.script-0.10.jar calendar2',
        function(err, data, stderr){
            console.log('the current working dir is : ',data)
        }
        );
    }

    // cmd.run(
    //     ' cd "./client/src/components/Scripts/app/" && java -jar mariott.script-0.10.jar calendar2',
    //     function(err, data, stderr){
    //         console.log('the current working dir is : ',data)
    //     }
    //   );
      