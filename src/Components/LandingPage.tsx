import React, { useState } from 'react'
import MenuBar from './MenuBar';
import Modal from './Modal';

export default function LandingPage() {
    const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
         <MenuBar setVisible={setVisible}/>
         <Modal visible={visible} setVisible={setVisible}/>

    </>
  )
}
