import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import '../styles/promociones.css';
import { getAllPromotions as getAllPromotionsFirebase, addNewPromotions as addNewPromotionsFirebase, updatePromotions as updatePromotionsFirebase, deletePromotions as deletePromotionsFirebase } from "../services/apiFirebase.js";



const Promociones = () => {
  const [promotions, setPromotions] = useState([]);
  const [editingPromotions, setEditingPromotions] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    refunds: "",
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const fetchingData = async () => {
    const promotions = await getAllPromotionsFirebase()
    setPromotions(promotions)
  }

  useEffect(() => {
    fetchingData()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingPromotions) {
      const res = await updatePromotionsFirebase(editingPromotions, formData)
      const updatedPromotions = promotions.map(p =>
        p.id === editingPromotions ? res : p
      )
      setPromotions(updatedPromotions)
      setEditingPromotions(null)
    } else {
      const addedPromotions = await addNewPromotionsFirebase({
        name: formData.name,
        refunds: Number(formData.refunds),
        image: formData.image,
        description: formData.description
      })
      setPromotions([addedPromotions, ...promotions])
    }

    setFormData({
      name: "",
      refunds: "",
      image: "",
      description: ""
    })
  }

  const handleUpdatePromotions = (promotions) => {
    setFormData({
      name: promotions.name,
      refunds: promotions.refunds,
      image: promotions.image,
      description: promotions.description
    })
    setEditingPromotions(promotions.id)
  }

  const handleDeletePromotions = async (id) => {
    try {
      if (!confirm("¿Estás seguro que deseas borrar esta promoción?")) {
        return
      }

      const idDeletedPromotions = await deletePromotionsFirebase(id)
      alert(`Promoción id: ${idDeletedPromotions} borrada con éxito`)
      const filteredPromotions = promotions.filter(p => p.id !== id)
      setPromotions(filteredPromotions)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <h2>¡Ofertas Imperdibles!</h2>
          <p>
Descubrí las mejores promociones en locales de comida, supermercados, farmacias y muchas otras categorías. En Club de Promos juntamos todas las ofertas que valen la pena, para que ahorres fácil y rápido, sin tener que buscar en mil lugares.          </p>
        </section>
        <section>
          <h3>Agregar/ Actualizar Promoción</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Titulo"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="refunds"
              type="number"
              placeholder="Reintegro"
              required
              value={formData.refunds}
              onChange={handleChange}
            />

            <input
              name="image"
              type="text"
              placeholder="URL image"
              required
              value={formData.image}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Descripción"
              required
              value={formData.description}
              onChange={handleChange}
            >
            </textarea>
            <button>{editingPromotions ? "Actualizar" : "Agregar"}</button>
          </form>
        </section>
        <section className="promotions">
          <h2>Nuestras Promociones</h2>
          <div className="promotions-list">
            {promotions.map((promotions) => (
              <div key={promotions.id}>
                <img src={promotions.image} alt="" />
                <h4>{promotions.name}</h4>
                <p>{promotions.description}</p>
                <div className="buy">
                  <p>Tope Reintegro ${promotions.refunds}</p>
                  <button>Comprar</button>
                </div>
                <div>
                  <button onClick={() => handleUpdatePromotions(promotions)}>Actualizar</button>
                  <button onClick={() => handleDeletePromotions(promotions.id)}>Borrar</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export { Promociones }