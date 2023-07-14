import React, { useState } from 'react';
import axios from 'axios';

import StyledComponent from '../components/StyledComponent';

const BookForm = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [formData, setFormData] = useState({
        title: '',
        cover: '',
        author: '',
        coAuthors: [],
        genres: [],
        subgenres: [],
        description: '',
        tags: [],
        isbn: '',
    });

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                cover: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    // const handleArrayChange = (event, arrayName) => {
    //     const { value } = event.target;
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [arrayName]: [...prevFormData[arrayName], value],
    //     }));
    // };

    const handleArrayChange = (event, arrayName) => {
        const { value } = event.target;
        const isComma = value.includes(',');
        const isEnterKey = event.key === 'Enter';
        const isButtonClick = event.type === 'click';

        if ((isComma || isEnterKey || isButtonClick) && value.trim() !== '') {
            event.preventDefault();
            const newValue = value.replace(',', '').trim();
            setFormData((prevFormData) => ({
                ...prevFormData,
                [arrayName]: [...prevFormData[arrayName], newValue],
            }));
            event.target.value = '';
        }
    };

    const handleRemoveItem = (index, arrayName) => {
        setFormData((prevFormData) => {
            const newArray = [...prevFormData[arrayName]];
            newArray.splice(index, 1);
            return { ...prevFormData, [arrayName]: newArray };
        });
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const isEnterKey = event.key === 'Enter';
    //     const isSubmitButton = event.target.type === 'submit';

    //     if (isEnterKey && !isSubmitButton) {
    //         return;
    //     }

    //     console.log(formData);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isEnterKey = event.key === 'Enter';
        const isSubmitButton = event.target.type === 'submit';

        if (isEnterKey && !isSubmitButton) {
            return;
        }

        try {
            // Envie os dados do formulário para a API
            const response = await axios.post('http://localhost:4000/api/books', formData);

            // Lógica de manipulação da resposta da API
            console.log(response.data);
        } catch (error) {
            // Trate o erro da requisição
            console.error(error);
        }
    };


    return (
        <StyledComponent>
            <div>
                <form method='POST'>
                    <div className="row p-3">
                        <div className="col-12">
                            <label className="form-label">Título:</label>
                            <input className="form-control" type="text" name="title" value={formData.title} onChange={handleChange} />
                        </div>
                        <div className="col-6">
                            <div>
                                <label className="form-label" htmlFor="cover">Cover:</label>
                                <input className="form-control" type="file" id="cover" name="cover" onChange={handleUpload} />
                                <div className='d-flex justify-content-center align-items-center mt-4 p-2'>
                                    {formData.cover && <img className={styles.img_cover} src={formData.cover} alt="Capa do Livro" />}
                                </div>
                                <div className="d-grid gap-2 mt-4">
                                    <button className="btn btn-primary" type="button">Upload</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <label className="form-label">Autor:</label>
                                <input className="form-control" type="text" name="author" value={formData.author} onChange={handleChange} />
                            </div>
                            <div>
                                <label className="form-label">Co-autores:</label>
                                <input className="form-control"
                                    type="text"
                                    onChange={(event) => handleArrayChange(event, 'coAuthors')}
                                />
                                <ul>
                                    {formData.coAuthors.map((coAuthor, index) => (
                                        <li key={index}>
                                            {coAuthor}{' '}
                                            <button onClick={() => handleRemoveItem(index, 'coAuthors')}>X</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <label className="form-label">Gêneros:</label>
                                <input className="form-control"
                                    type="text"
                                    onChange={(event) => handleArrayChange(event, 'genres')}
                                />
                                <ul>
                                    {formData.genres.map((genre, index) => (
                                        <li key={index}>
                                            {genre} <button onClick={() => handleRemoveItem(index, 'genres')}>X</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <label className="form-label">Subgêneros:</label>
                                <input className="form-control"
                                    type="text"
                                    onChange={(event) => handleArrayChange(event, 'subgenres')}
                                />
                                <ul>
                                    {formData.subgenres.map((subgenre, index) => (
                                        <li key={index}>
                                            {subgenre}{' '}
                                            <button onClick={() => handleRemoveItem(index, 'subgenres')}>X</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <label className="form-label">Descrição:</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <label className="form-label">Tags:</label>
                                <div className="input-group">
                                    <input className="form-control" type="text" onChange={(event) => handleArrayChange(event, 'tags')} />
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={(event) => handleArrayChange(event, 'tags')}
                                    >
                                        Adicionar
                                    </button>
                                </div>
                                <div className='mt-2'>
                                    {formData.tags.map((tag, index) => (
                                        <span className="badge bg-primary me-2" key={index}>
                                            {tag} <button onClick={() => handleRemoveItem(index, 'tags')}>X</button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="form-label">ISBN:</label>
                                <input className="form-control"
                                    type="text"
                                    name="isbn"
                                    value={formData.isbn}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-4">
                                <button className="btn btn-success" type="submit" onClick={handleSubmit}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </StyledComponent>
    );
};

export default BookForm;
