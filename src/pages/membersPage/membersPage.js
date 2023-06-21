import React from 'react';
import Navig from '../../components/navigation/Nav';
import Footer from '../../components/footer/footer.js';
import AllMembers from '../../components/allMembers/allMembers';

const membersPage = () => {
      return (
            <div>
                  <Navig  />
                  <AllMembers/>
                  {/* <UserPage/> */}
                  <Footer/>
            </div>
      )
}

export default membersPage;