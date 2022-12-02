import React, { useReducer } from 'react';
import DashboarLayout from '../../../components/Dashboard/DashboarLayout';

const AddProducts = () => {
  const handleAddProduct = ({ e }: any) => {
    e.preventDefault();
  };

  return (
    <DashboarLayout title="Add Products">
      <div className="w-[80%]    bg-slate-200 container m-auto mt-8 rounded-md px-4">
        <div>
          <h1 className="text-3xl  text-center mt-2">Add Products</h1>
          <form onSubmit={handleAddProduct}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2   ">
              <div className="ml-4">
                <label className="label">
                  <span className="label-text text-xl">Product Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-md"
                  name="title"
                />
                <label className="label">
                  <span className="label-text text-xl">Product Price:</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Prroduct Price"
                  className="input input-bordered input-warning w-full max-w-md"
                  name="price"
                />
                <label className="label">
                  <span className="label-text text-xl">
                    Product Description:
                  </span>
                </label>
                <textarea
                  type="text"
                  className="textarea textarea-warning w-full max-w-md h-40"
                  placeholder="Enter product description"
                  name="description"
                ></textarea>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xl">Product Category:</span>
                </label>
                <select
                  disabled
                  className="select select-warning w-full max-w-md"
                >
                  <option disabled selected>
                    Pick a pizza
                  </option>
                  <option>Car</option>
                  <option>Veggie</option>
                  <option>Pepperoni</option>
                  <option>Margherita</option>
                  <option>Hawaiian</option>
                </select>
                <label className="label">
                  <span className="label-text text-xl">
                    Tamporly Past Image Url :
                  </span>
                </label>
                <input
                  type="text"
                  name="imgUrl"
                  placeholder=" Tamporly Past Image Url "
                  className="input input-bordered input-warning w-full max-w-md"
                />

                <label className="label">
                  <span className="label-text text-xl">Stock</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Stock"
                  className="input input-bordered input-warning w-full max-w-md"
                  name="stock"
                />
                <label className="label">
                  <span className="label-text text-xl">Uploading </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-md w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex justify-end mr-5">
              <button
                className="commonBtn commonBtnCss commonbtn-hover rounded-md"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboarLayout>
  );
};

export default AddProducts;
