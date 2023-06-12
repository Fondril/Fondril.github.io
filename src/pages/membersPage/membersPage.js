import React from 'react';
import Navig from '../../components/navigation/Nav';
import Footer from '../../components/footer/footer';

function membersPage () {
      return (
            <div>
                  <Navig />
                  <allMembers/>
                  <userPage/>
                  <Footer/>
            </div>
      )
}

export default membersPage;