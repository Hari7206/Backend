import React, { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [data, setData] = useState([])
  const [editId, setEditId] = useState(null)

  // Fetch Data
  function fetchData() {
    axios.get("/api/note")
      .then((res) => {
        setData(res.data.note)
      })
  }

  // Delete
  function handleDelete(id) {
    axios.delete(`/api/note/${id}`).then(() => {
      fetchData()
    })
  }

  // Create
  function handleSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements

    axios.post("/api/note", {
      title: title.value,
      description: description.value
    }).then(() => {
      fetchData()
      e.target.reset()
    })
  }

  // Update
  function handleUpdate(e, id) {
    e.preventDefault()

    const { title, description } = e.target.elements

    axios.patch(`/api/note/${id}`, {
      title: title.value,
      description: description.value
    }).then(() => {
      fetchData()
      setEditId(null)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center gap-10 p-6'>

      {/* Title */}
      <h1 className='text-3xl font-bold text-gray-800'>Notes App</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 flex flex-col gap-4 items-center w-80 rounded-2xl shadow-lg border'
      >
        <h2 className='text-xl font-semibold text-gray-700'>Add New Note</h2>

        <input
          type="text"
          name="title"
          placeholder="Enter title..."
          className='p-3 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <input
          type="text"
          name="description"
          placeholder="Enter description..."
          className='p-3 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <button className='px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white w-full transition'>
          Submit
        </button>
      </form>

      {/* Notes */}
      <div className='flex flex-wrap gap-6 justify-center items-start'>
        {
          data.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-2xl p-5 w-80 hover:shadow-xl hover:-translate-y-1 transition duration-300 border"
            >

              {/* Edit Mode */}
              {
                item._id === editId ? (
                  <form onSubmit={(e) => handleUpdate(e, item._id)} className='flex flex-col gap-3'>

                    <input
                      type="text"
                      name="title"
                      defaultValue={item.title}
                      placeholder="Edit title..."
                      className="p-2 border rounded-lg w-full"
                    />

                    <input
                      type="text"
                      name="description"
                      defaultValue={item.description}
                      placeholder="Edit description..."
                      className="p-2 border rounded-lg w-full"
                    />

                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={() => setEditId(null)}
                        className="flex-1 py-1 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h1 className="text-lg font-bold text-gray-800 mb-1">
                      {item.title}
                    </h1>

                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </>
                )
              }

              {/* Actions */}
              {
                item._id !== editId && (
                  <div className='flex justify-between mt-5'>
                    <button
                      type="button"
                      onClick={() => handleDelete(item._id)}
                      className='px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm'
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditId(item._id)}
                      className='px-3 py-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm'
                    >
                      Update
                    </button>
                  </div>
                )
              }

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App