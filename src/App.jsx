import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [userData, setUserData] = useState("")
  const [bgColor, setBgColor] = useState()
  const [randomNum, setRandomNum] = useState("1")

  const randomNumber = () => {
    var setRandom = Math.floor(Math.random() * 30) + 1
    setRandomNum(setRandom)
  }

  var color = ["#FFCCCB", "#ADD8E6", "#90EE90", "#FFD580"]

  function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * color.length)
    var backColor = color[randomIndex]
    setBgColor(backColor)
  }

  const getUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${randomNum}`)
    const data = await response.json()
    setUserData(data)
  }

  useEffect(() => {
    getUser()
    getRandomColor()
  }, [randomNum])


  return (
    <>
      <h1 className='text-center fw-bolder mt-4'>Random User On Refresh</h1>

      <div className='bg container mt-3' style={{ backgroundColor: `${bgColor}` }}>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='imagebg container mt-4'>
              <img src={userData?.image} alt="" />
            </div>
            <h6 className='text-center mt-2 fw-bolder'>{userData?.firstName} {userData?.lastName}</h6>
            <h6 className='text-center'>{userData?.gender}</h6>

            <div className='row ms-4 mt-4'>
              <div className='col-lg-6'>
                <h6><b>Birth Date</b></h6>
                <h6>{userData?.birthDate}</h6>
                <h6 className='mt-4 fw-bolder'>Weight</h6>
                <h6>{userData?.weight}</h6>
              </div>

              <div className='col-lg-6'>
                <h6><b>Age</b></h6>
                <h6>{userData?.age}</h6>
                <h6 className='mt-4 fw-bolder'>Height</h6>
                <h6>{userData?.height}</h6>
              </div>

              <button onClick={() => randomNumber()} className='bg-white fw-bolder py-1 mt-4' style={{ border: 'none', width: '100px' }}>REFRESH</button>

            </div>
          </div>

          <div className='col-lg-6'>
            <h6 className='mt-4 fw-bolder'>Home Address</h6>
            <h6>{userData?.address?.address}</h6>
            <h6 className='mt-5 fw-bolder'>Mobile Phone</h6>
            <h6>{userData?.phone}</h6>
            <h6 className='mt-5 fw-bolder'>Company</h6>
            <h6>{userData?.company?.address?.address}</h6>
            <h6 className='mt-5 fw-bolder'>Job Title</h6>
            <h6>{userData?.company?.title}</h6>
            <h6 className='mt-5 fw-bolder'>Email</h6>
            <h6>{userData?.email}</h6>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
