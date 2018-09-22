import React, {Component} from 'react';
import { ReactSlackChat } from 'react-slack-chat';

class SlackComponentNA extends Component {
  render() {
    return (
        <ReactSlackChat
          botName='testbot' // VisitorID, CorpID, Email, IP address etc.
          apiToken='xoxb-105098869779-441001243173-pABCuDm8nT50SKnXqKDnm9E9'
          channel_id='G3Z3247C2'
          username='davekubo'
          themeColor='#856090'
          userImage='http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg'
          debugMode={true}
          saveSession
          hooks={[
            {
              /* My Custom Hook */
              id: 'getSystemInfo',
              action: () => 'MY SYSTEM INFO!'
            }
          ]}
        />
      )
  }
}

export default SlackComponentNA;