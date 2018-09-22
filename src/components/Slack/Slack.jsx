import React, {Component} from 'react';
// import { ReactSlackChat } from 'react-slack-chat';

class SlackComponent extends Component {
  render() {
    return (
        
      <div>
      <img src="https://a.slack-edge.com/3aabd6/marketing/img/pricing/enterprise_grid_logo.png" size={50}/>
      <p>Placeholder for Slack Integration</p>
      </div>

        
//         <ReactSlackChat
//           botName='5punk-unique-id' // VisitorID, CorpID, Email, IP address etc.
//           apiToken='xoxb-105098869779-441001243173-pABCuDm8nT50SKnXqKDnm9E9'
//           channels={[
//           {
//             name: 'random'
//           },
//           {
//             name: 'test',
//             id: 'G3Z3247C2',
//             icon: ''
//           },
//           {
//             name: 'test22',
//             id: '',
//             icon: './logo.svg'
//           }]}
//           helpText='Optional Help Text'
//           themeColor='#856090'
//           userImage='http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg'
//           debugMode={true}
//           hooks={[
//             {
//               /* My Custom Hook */
//               id: 'getSystemInfo',
//               action: () => 'MY SYSTEM INFO!'
//             }
//           ]}
//         />
      )
  }
}

export default SlackComponent;
