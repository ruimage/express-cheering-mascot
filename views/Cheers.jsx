const React = require('react');
const Main = require('./Main')

export const Cheers = (cheer_name) => {
  return (
    <Main signText={getCheer(cheer_name)}>
    </Main>
  );
};

function getCheer({cheer_name}) {
  const cheersList = {
    'RED HOT': 'H-O-T!',
    'DO IT AGAIN': 'Go, Fight, Win',
    '2 BITS': 'Holler!',
    'STOMP YOUR FEET': 'STOMP!',
  }
  let cheer = cheersList[cheer_name];
  return cheer || 'Go Team!'
}

