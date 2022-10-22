import React from 'react';
import {useWorkshops} from "../../context/WorkshopsContext";
function WorkshopsPopup() {
  const {setIsOpened} = useWorkshops();
  return (
    <div className="workshops-popup">
      <img src="assets/close.svg" alt="close button" className="workshops-popup__close" onClick={() => setIsOpened(prev => !prev)}/>
      <h2 className="heading-2">Etkinlikler</h2>
      <p>
        Game Jam esnasında gerçekleşecek etkinliklerimizden haberin var mıydı? Detaylar için sosyal medya hesaplarımızı kontrol etmeyi unutma!
      </p>
      <div>
        <img src="assets/konuşmacı1.jpg" alt="birinci konuşmacı fotoğraf"/>
        <img src="assets/konuşmacı2.jpg" alt="ikinci konuşmacı fotoğraf"/>
        <img src="assets/konuşmacı3.jpg" alt="üçüncü konuşmacı fotoğraf"/>
        <img src="assets/konuşmacı4.jpg" alt="dördüncü konuşmacı fotoğraf"/>
        <img src="assets/konuşmacı5.jpg" alt="beşinci konuşmacı fotoğraf"/>
      </div>
    </div>
  );
}

export default WorkshopsPopup;