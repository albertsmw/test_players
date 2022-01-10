import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import ReactPlayerLoader from "@brightcove/react-player-loader";

type player = 'bright' | 'mux' | 'both'

function App() {

  const [type, settype] = useState<player | undefined>()
  const [muvidID, setmuvidID] = useState<string | undefined>()
  const [brividID, setbrividID] = useState<string | undefined>()

  useEffect(() => {
    setmuvidID('Q3TyTHAr2Azlj5JPu85f02g1MdaRsrWy3O02DgBg1Q2dA')
    setbrividID('6273834160001')
  }, [])
  
  const nextVid = () => {
    setmuvidID('KnvuLN7b3ZnLXWGltUhPymBSefWon9secI6LH02Lo00ME')
    setbrividID('6286752269001')
  }

  useEffect(() => {
    if (type) setTimeout(nextVid, 25000)
  }, [type])

  useEffect(() => {
    
  })
  
  return (
    <div className="App">
      <h3>test</h3>
      <button onClick={() => settype('both')}>both</button>
      <button onClick={() => settype('mux')}>mux</button>
      <button onClick={() => settype('bright')}>bright</button>
      <button onClick={nextVid}>nextVid</button>
      <div style={{}}>
      {(type === 'both' || type==='mux') && muvidID && <ReactPlayer 
        url={`https://stream.mux.com/${muvidID}.m3u8`}
        playing={true}
        width={'650px'}
        
      />}
      { (type === 'both' || type==='bright') &&  brividID && 
          <ReactPlayerLoader
            style={{width: '500px', height: '500px'}}
            accountId={'3845398857001'}
            // onSuccess={
            //   (success: any) => {
            //   const player = success.ref;
            //   if (onEnded) player.on('ended', onEnded);
            //   if (onCanPlay) player.on('canplay', onCanPlay);
            // }
            // }
            onFailure={() => console.log("player error")}
            videoId={brividID}
            playerId={"144526bf-0865-417b-bf57-3b3009ba3913"}
            options={{
              playsinline: true,
              autoplay: true,
              resposive: true,
              controlBar: {
                volumePanel: {
                  inline: false,
                  vertical: true,
                },
              },
              subtitles: true,
              poster: "",
              id: "player"
            }}
          />
        }
        </div>
    </div>
  );
}

export default App;

const sampleIDsdk = [
  '6286752269001',
  '6286751313001',
  '6286751314001',
  '6286752865001',
  '6286754142001'
]

const muxid = [
  'KnvuLN7b3ZnLXWGltUhPymBSefWon9secI6LH02Lo00ME',
  'HRB3ul5OPSNVOzad01q0001iJ02e00X443gvawNqhalLys6A',
  '02vaATwmhdjArHhMkzFfHfztJf9LKAqSr4ebosN01DKSs',
  '8FueAOqlOPcZLIrTN1Nslx7ZY5ZbQCt00eyzFvmK00oLA',
  'pAc01S4wxNjBLa1007m02c4XrpRhMZ58DyFburhVPIp6YE'
]