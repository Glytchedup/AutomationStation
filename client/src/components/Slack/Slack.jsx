import React, {Component} from 'react';
import { ReactSlackChat } from 'react-slack-chat';

// import botImage from './images/bot.png';
import botImage from './images/square.png';

class SlackComponent extends Component {
  render() {
    return (        
      <ReactSlackChat
      //Test Slack Room
        // botName="testbot1"
        // apiToken="eG94Yi0zNDIzMTMyMTE0MDgtNDQ5OTQwMDg2OTk0LWVPcTIxdHNUZEZTZGxiMDlXd0pIUHdlRw=="
        botName="contactme"
        apiToken="eG94Yi00NjU4NzMxNTg1NDgtNDY1MzA4MDQxNjAwLVFaUEJBM0R2OXpZVmJydmI0NFZUZk43SQ=="
        
        //Work Slack Room
        // botName="rmasbot"
        // apiToken="eG94Yi0xMDUwOTg4Njk3NzktNDUwOTg2NDE0NTE5LUZPd0ZxdEJzdXZJdFRWZnZybFRUQmZnYg=="

        channels={[
          {name: 'contactme'},
          {name: 'Contact Me',
          id: 'CDR2V1W8P',
        },
        //   {name: 'classstream'},
        //   {name: 'ClassStream',
        //   id: 'CD9EJNJTZ',
        // }
            //Work room
            // name: 'bayteamvmo'
            // name: 'test-temp'
        ]}
        helpText='Slack 💬'
        themeColor='#000000'
        userImage={botImage}
      />
    )
  }
}

export default SlackComponent;
