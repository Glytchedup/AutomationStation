const fs = require('fs');




let config = 'url = https://salesnet.marriott.com\r\n\r\n' +
             '# OYV2 Marsha codes\r\n' +
             'calendar2_level = BVUFI,GEGFI,FAISH\r\n\r\n' +
             '# EID and password\r\n' +
             'login= EID\r\n' +
             'pass= PASSWORD\r\n\r\n' +
             '# Update to your EID\r\n' +
             'ff_bin = ..\\ff47\\firefox.exe\r\n\r\n' + 
             '#C:\\Users\\EID\\Scripts\\ff47\\firefox.exe\r\n\r\n' +
             '# for GPO Clicker\r\n' +
             'letter_codes = BVUFI,GEGFI,FAISH\r\n' +
             'path_to_save_test_price = C:\Users\EID\Desktop';
                         
             // write to a new file named 2pac.txt
             fs.writeFile('app/test.txt', config, (err) => {  
                 // throws an error, you could also catch it here
                 if (err) throw err;
             
                 // success case, the file was saved
                 console.log('config saved!');
             });
