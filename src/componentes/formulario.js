import React, { useState } from 'react';

const DomainForSale = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    genero: '',
    estado: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="bg-gray-900 w-full flex items-start justify-start text-left">
      {/* Mueve todo el contenido más a la izquierda */}
      <div className="mt-24 ml-24 text-white">
        <div className="p-8 bg-gray-800 rounded-md border border-blue-300">
          <form onSubmit={handleSubmit}>
            {/* Primera fila: Nombre, Apellido Paterno, Apellido Materno */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/3">
                <label htmlFor="nombre" className="block mb-2">Nombre(s):</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre(s)"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/3">
                <label htmlFor="apellidoPaterno" className="block mb-2">Apellido Paterno:</label>
                <input
                  type="text"
                  name="apellidoPaterno"
                  placeholder="Apellido Paterno"
                  value={formData.apellidoPaterno}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/3">
                <label htmlFor="apellidoMaterno" className="block mb-2">Apellido Materno:</label>
                <input
                  type="text"
                  name="apellidoMaterno"
                  placeholder="Apellido Materno"
                  value={formData.apellidoMaterno}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Segunda fila: Fecha de Nacimiento */}
            <div className="mb-4">
              <label htmlFor="fechaNacimiento" className="block mb-2">Fecha de Nacimiento:</label>
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
                required
              />
            </div>

            {/* Tercera fila: Género y Estado */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="genero" className="block mb-2">Género:</label>
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
                  required
                >
                  <option value="">Selecciona Género</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="estado" className="block mb-2">Estado:</label>
                <select
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
                  required
                >
                  <option value="">Selecciona Estado</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                </select>
              </div>
            </div>

            {/* Botón Generar CURP */}
            <button
              type="submit"
              className="bg-gray-900 py-2 px-4 text-white rounded-md border border-blue-300 hover:bg-blue-900 focus:outline-none"
            >
              Generar CURP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DomainForSale;