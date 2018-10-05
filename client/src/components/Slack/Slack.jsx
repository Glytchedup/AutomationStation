import React, {Component} from 'react';
import { ReactSlackChat } from 'react-slack-chat';

import botImage from './images/bot.png';

class SlackComponent extends Component {
  render() {
    return (        
      <ReactSlackChat
        botName="testbot1"
        apiToken="eG94Yi0zNDIzMTMyMTE0MDgtNDQ5OTQwMDg2OTk0LWVPcTIxdHNUZEZTZGxiMDlXd0pIUHdlRw=="
        channels={[
          {
            name: 'project-3-test'
          }
        ]}
        helpText='Need Help?'
        themeColor='#007bff'
        userImage={botImage}
      />
    )
  }
}

export default SlackComponent;
