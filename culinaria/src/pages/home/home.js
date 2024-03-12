import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cozinha from '../../assets/Cookies.png'
import jsonData from '../../api.json'
import Incluir from '../incluir/incluir.js';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import '../../assets/style.css';


// Componente de Modal
const Modal = ({ isOpen, onClose, selectedItem }) => {
    if (!isOpen || !selectedItem) return null;
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{selectedItem.titulo}</h2>
          <img src={selectedItem.image} alt={selectedItem.titulo} className='imag'/>
          <h2>Ingredientes:</h2>
          <p>{selectedItem.ingredientes}</p>
          <h2>Modo de preparo:</h2>
          <p>{selectedItem.modoPreparo}</p>
        </div>
      </div>
    );
};


const Home = () =>  {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
      };
    
    const addItemToList = (newItem) => {
        setData([...data, newItem]);
    };

    useEffect(() => {
        var listaReceitas = [...jsonData];
        setData(listaReceitas);
        }, []);

    return(
       <>
        
        <section className="fullAlignFlex espacoTopo">
                <div className="container align-self-center">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={Cozinha} className='imagem1'></img>
                        </div>
                    </div>
                </div>
        </section>


        <hr className="divisor"></hr>

        <section className="d-flex mb-5 espacoTopo fullAlignFlex" id="listaDoces">
            <div className="container align-self-center">
                <h1>RECEITAS VÓ MARIA</h1>
                <div className="d-flex mt-3 flex-wrap justify-content-center">
                    {data.map(item => (
                       <div className='estiloc'> 
                            <div key={item.id} onClick={() => handleItemClick(item)} className='col-md-12 col-lg-6 col-xl-4' style={{ cursor: 'pointer' }}>
                                    <h3><strong>{item.titulo}</strong></h3>
                                    <img src={item.image} alt={item.titulo} style={{ maxWidth: '350px', maxHeight: '350px' }} />
                                
                            </div>

                            <div className='descricao'>
                                <p>{item.ingredientes}</p>
                            </div>
                       </div> 
                    
                        
                        
                    ))} 
                </div>
                <hr className="divisor mt-5"></hr>

            </div>
        </section>
        <div className='estiloc2'>
            <Incluir addItemToList={addItemToList} />
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedItem={selectedItem} />
        </div>    
        <hr className="divisor mt-5"></hr>
       </>
    );
}



export default Home;