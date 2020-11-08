import React from 'react';
import AvatarNavbar from '../../components/avatarNavbar';
import CardQueue from '../../components/cardQueue';

import PingPongIcon from '../../assets/icons/pingpong.svg';
//import { Container } from './styles';

const ChooseQueues: React.FC = () => {
  return (
    <div className="">
      <AvatarNavbar name="Roger Bernardo" url="https://avatars3.githubusercontent.com/u/48859060?s=460&u=123d876938f95e03eaadd31dbb079018fa374c77&v=4" />
      <CardQueue name='Ping Pong' url={PingPongIcon} />

    </div>
  );
}

export default ChooseQueues;