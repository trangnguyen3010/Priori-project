import React from 'react';
import { ReactComponent as Logo } from './Profiles/logo192.png';
import logo from './Profiles/logo.jpeg'; // Tell webpack this JS file uses this image


const OurTeam = () => {
  var staffs = [
    { name: 'Thai La', photo: 'logo192.png', id: 1 },
    { name: 'Long Pham', photo: 'logo192.png', id: 2 },
    { name: 'Melvin Lugo', photo: 'logo192.png', id: 3 },
    { name: 'Ujiwal Dixit', photo: 'logo192.png', id: 4 },
    { name: 'Trang Nguyen', photo: 'logo192.png', id: 5 }
  ];

  return (
    <div className="class">
      <div className='main'>
        {staffs.slice(0,3).map(staff => (
          <div className="profile-card" key={staff.id} >
            <div className="img">
              <img src={logo} alt="Logo" />
            </div>
            <div className="caption">
              <h3>{staff.name}</h3>
              <p>Full Stack Developer</p>
              {/* <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div> */}
            </div>
          </div>
        ))
        }
      </div>

      <div className='main'>
        {staffs.slice(3,5).map(staff => (
          <div className="profile-card" key={staff.id} >
            <div className="img">
              <img src={logo} alt="Logo" />
            </div>
            <div className="caption">
              <h3>{staff.name}</h3>
              <p>Full Stack Developer</p>
              {/* <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div> */}
            </div>
          </div>
        ))
        }
      </div>
      </div>
  );
      }

      export default OurTeam;