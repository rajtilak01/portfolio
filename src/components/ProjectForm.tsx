import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: [''],
    description: '',
    deployedUrl: '',
    tags: [''],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;

    if (name === 'imageUrl') {
      // Update a specific index of the imageUrl array
      const newImageUrls = [...formData.imageUrl];
      if (index !== undefined) newImageUrls[index] = value;
      setFormData({ ...formData, imageUrl: newImageUrls });
    } else if (name === 'tags') {
      // Update a specific index of the tags array
      const newTags = [...formData.tags];
      if (index !== undefined) newTags[index] = value;
      setFormData({ ...formData, tags: newTags });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addField = (field: 'imageUrl' | 'tags') => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post('/api/post-project', formData);
      console.log("resulting coming after saving the data", result);
      // alert('Project added successfully!');
      toast.success('Project added successfully!', {
        position: "top-right",
        autoClose: 2000,
        theme: "colored"

      })
    } catch (error) {
      toast.error('An error occurred while adding the project.',{
        position: "top-right",
        autoClose: 2000,
        theme: "colored"
      });
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer/>
      <div className=' text-2xl text-center m-4'>Submit Project info here</div>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-800 shadow-md rounded-md space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-medium">Project Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md text-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="text-gray-700 font-medium">Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md text-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="deployedUrl" className="text-gray-700 font-medium">Deployed URL</label>
        <input
          type="url"
          name="deployedUrl"
          id="deployedUrl"
          value={formData.deployedUrl}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md text-black"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Image URLs</label>
        {formData.imageUrl.map((url, index) => (
          <input
            key={index}
            type="url"
            name="imageUrl"
            value={url}
            onChange={(e) => handleChange(e, index)}
            className="p-2 border rounded-md text-black"
          />
        ))}
        <button
          type="button"
          onClick={() => addField('imageUrl')}
          className="text-blue-500 underline"
        >
          Add another image URL
        </button>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Tags</label>
        {formData.tags.map((tag, index) => (
          <input
            key={index}
            type="text"
            name="tags"
            value={tag}
            onChange={(e) => handleChange(e, index)}
            className="p-2 border rounded-md text-black"
          />
        ))}
        <button
          type="button"
          onClick={() => addField('tags')}
          className="text-blue-500 underline"
        >
          Add another tag
        </button>
      </div>

      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Submit Project
      </button>
    </form>
    </div>
  );
};

export default ProjectForm;
