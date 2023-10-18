// import React, { useState } from 'react'
// import Webcam from 'react-webcam'
// const WebcamComponent = () => <Webcam />
// const videoConstraints = {
//   width: 400,
//   height: 400,
//   facingMode: 'user',
// }
// const Profile = () => {
//   const [picture, setPicture] = useState('')
//   const webcamRef = React.useRef(null)
//   const capture = React.useCallback(() => {
//     const pictureSrc = webcamRef.current.getScreenshot()
//     setPicture(pictureSrc)
//   })
//   return (
//     <div>
//       <h2 className="mb-5 text-center">
//         React Photo Capture using Webcam Examle
//       </h2>
//       <div>
//         {picture == '' ? (
//           <Webcam
//             audio={false}
//             height={400}
//             ref={webcamRef}
//             width={400}
//             screenshotFormat="image/jpeg"
//             videoConstraints={videoConstraints}
//           />
//         ) : (
//           <img src={picture} />
//         )}
//       </div>
//       <div>
//         {picture != '' ? (
//           <button
//             onClick={(e) => {
//               e.preventDefault()
//               setPicture('')
//             }}
//             className="btn btn-primary"
//           >
//             Retake
//           </button>
//         ) : (
//           <button
//             onClick={(e) => {
//               e.preventDefault()
//               capture()
//             }}
//             className="btn btn-danger"
//           >
//             Capture
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }
// export default Profile

import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios';

function Profile() {

  const [openCameraTrue, setOpenCameraTrue] = useState(true);
  const [changeData, setChangeData] = useState(true);
  const [imageData, setImageData] = useState('')

  async function handleTakePhoto(e) {
    setImageData(e)
    setChangeData(false)
    const file = {
      'data': e.replace('data:image/png;base64,', '')
    };
    console.log(file)
    axios.post('http://localhost:5000/upload', file)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    // if (file != null) {
    //   let response = await fetch('upload',
    //     {
    //       method: 'post',
    //       body: file,
    //     }
    //   );
    //   let res = await response.json();
    //   if (res.status !== 1){
    //     alert('Error uploading file');
    //   }
    // }
  }

  function openCamera() {
    console.log("opening camera");
    setOpenCameraTrue(!openCameraTrue)
    console.log(openCameraTrue)
  }

  function closeCamera() {
    console.log("closing camera");
    setOpenCameraTrue(!openCameraTrue)
    setChangeData(!changeData)
    console.log(openCameraTrue)
  }

  return (
    <div>
      {openCameraTrue ?
        <div>
          <button onClick={openCamera}>Open Camera</button><br />
        </div> :
        <div>
          <button onClick={closeCamera}>Close Camera</button>
          {changeData ?
            <Camera
              onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
            /> :
            <img src={`${imageData}`} />
          }
        </div>
      }
    </div>
  );
}

export default Profile;