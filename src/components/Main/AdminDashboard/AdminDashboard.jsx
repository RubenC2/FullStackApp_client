// import HTMLReactParser from 'html-react-parser';
//       <div>{HTMLReactParser(content)}</div>
import React, { useState, useRef } from "react";
import JoditEditor from 'jodit-react';
import axios from "axios";

const ArticuloAdd = () => {

  const [catId, setCatId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autoria, setAutoria] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [message, setMessage] = useState("");
  const editor = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!catId || !titulo || !autoria || !contenido || !imagenUrl) {
      setMessage("Faltan campos por completar.");
      return;
    }

    // Aviso para confirmar publicar
    const confirmar = window.confirm("¿Quieres publicar este artículo?");
    if (!confirmar) {
      return;
    }

    // Datos que envío
    const articuloData = {
      cat_id: catId,
      titulo: titulo,
      autoria: autoria,
      contenido: contenido,
      imagen_url: imagenUrl
    };

    try {

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/articulos`, articuloData);
      console.log("Artículo publicado:", response.data);

      setMessage("¡Artículo creado!");

      // Limpiar los campos
      setCatId("");
      setTitulo("");
      setAutoria("");
      setImagenUrl("");
      setContenido("");

    } catch (error) {
      console.error("Error al guardar el artículo:", error);
      setMessage("Error al guardar el artículo.");
    }
  };

  return (
    <section>
      <h1 className="create">Crear Artículo</h1>

      <form onSubmit={handleSubmit}>

        <article>
          <label className="create">Categoria:</label>
          <select
            value={catId}
            onChange={(e) => setCatId(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="1">Fluyendo en familia</option>
            <option value="2">Pareja conectada</option>
            <option value="3">Todo empieza por ti</option>
          </select>
        </article>

        <article>
          <label className="create">Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
            required
          />
        </article>

        <article>
          <label className="create">Autoría:</label>
          <input
            type="text"
            value={autoria}
            onChange={(e) => setAutoria(e.target.value)}
            placeholder="Autoría"
            required
          />
        </article>

        <article>
          <label className="create"></label>
          <JoditEditor
            ref={editor}
            value={contenido}
            onBlur={(newContent) => setContenido(newContent)}
            onChange={(newContent) => { }}
            config={{ editorCssClass: "my-editor" }} />
        </article>

        <article>
          <label className="create">Imagen URL:</label>
          <input
            type="text"
            value={imagenUrl}
            onChange={(e) => setImagenUrl(e.target.value)}
            placeholder="URL de la imagen"
            required
          />
        </article>

        <button type="submit">Publicar artículo</button>
      </form>

      {/* Aquí muestro mensaje de éxito/error */}
      {message && <p>{message}</p>}
    </section>
  );
};

export default ArticuloAdd;
