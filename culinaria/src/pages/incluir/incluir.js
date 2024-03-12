import React, { useState } from 'react';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './incluir.css';
import '../../assets/style.css';

const Adicao = ({ addItemToList }) => {
    const [newItem, setNewItem] = useState({ titulo: '', image: '', ingredientes: '', modoPreparo: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.titulo.trim() !== '' && newItem.image.trim() !== '' && newItem.ingredientes.trim() !== '' && newItem.modoPreparo.trim() ) {
            addItemToList(newItem);
            setNewItem({ titulo: '', image: '', ingredientes: '', modoPreparo: '' });
        }
    };

    

    return (
        <div className="container adicaoFlex" id="adicao">
            <h2>Adicione uma Receita !</h2>
            <form onSubmit={handleSubmit} className='formAdicao'>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" className="form-control" id="titulo" name="titulo" value={newItem.titulo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Link da Imagem:</label>
                    <input type="text" className="form-control" id="image" name="image" value={newItem.image} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="modoPreparo">Modo de preparo:</label>
                    <textarea className="form-control" id="modoPreparo" name="modoPreparo" value={newItem.modoPreparo} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredientes">Ingredientes:</label>
                    <textarea className="form-control" id="ingredientes" name="ingredientes" value={newItem.ingredientes} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-danger mt-4">Adicionar Item</button>
            </form>
        </div>
    );
};

export default Adicao;