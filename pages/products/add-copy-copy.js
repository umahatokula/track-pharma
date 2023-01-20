import React, { useContext, useEffect, useState } from 'react'
import { CiMail } from "react-icons/ci";
import { RiWallet2Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import AppContext from '../../context/AppContext';
import { useListState } from '@mantine/hooks';

function AddProduct() {

    const{ handleProductChange, saveItem, product } = useContext(AppContext);
    
    // side effects
    const [sideEffect, addSideEffect] = useState('');
    const [sideEffectsList, addSideEffecstList] = useListState([]);
    const appendSideEffect = () => {
        addSideEffecstList.append(sideEffect)
    };
    const deleteSideEffect = (index) => {
        addSideEffecstList.remove(index);
    }

    // compositions
    const [composition, addComposition] = useState('');
    const [compositionList, addCompositionList] = useListState([]);
    const appendComposition = () => {
        addCompositionList.append(composition)
    };
    const deleteComposition = (index) => {
        addCompositionList.remove(index);
    }

    useEffect(() => {
        console.log('sideEffectsList', sideEffectsList);
        console.log('composition', compositionList);
        handleProductChange(sideEffectsList, 'sideEffects')
        handleProductChange(compositionList, 'composition')
    },[sideEffectsList, compositionList])

    return (
        <div className='flex flex-col gap-12 md:flex-row bg-white w-full h-full shadow-md rounded-md p-10'>
            <div className='w-full'>
                <p className='text-xl md:text-2xl font-bold mb-4'>Add New User</p>
                <pre>{JSON.stringify(product, 2, null)}</pre>

                <div className=''>
                    
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Manufacturer Name</label>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'manufacturerName')} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Manufacturer Email</label>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'manufacturerEmail')} className='w-full h-9 rounded-md p-2 text-sm' type="email" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Manufacturing Date</label>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'manDateEpoch')} className='w-full h-9 rounded-md p-2 text-sm' type="date" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Expires in (Days)</label>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'expDateEpoch')} className='w-full h-9 rounded-md p-2 text-sm' type="date" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Product Name</label>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'name')} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Choose Prodcut Type</label>
                        <div className='flex items-center space-x-12'>
                            <div className='flex items-center space-x-2'>
                                <input onChange={(e) => handleProductChange(e, 'productType')} className='w-4 h-4 rounded p-1 text-sm form-radio' name='product_type' type="radio" id='product_type_i' /> 
                                <label htmlFor='product_type_i'>Individual</label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <input onChange={(e) => handleProductChange(e, 'productType')} className='w-4 h-4 rounded p-1 text-sm form-radio' name='product_type' type="radio" id='product_type_b' /> 
                                <label htmlFor='product_type_b'>Batch</label>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Product ID</label>
                        <span className='w-full text-xs text-gray-300'>F0212522542</span>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'barcodeId')} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Product Image</label>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'productImage')} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                        </div>
                    </div>
                    
                    <p className='text-xl md:text-2xl font-bold mb-4'>General Information</p>

                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Type</label>
                        <div>
                            <select className='w-full h-9 rounded-md p-2 text-sm'>
                                <option>Type A</option>
                                <option>Type B</option>
                                <option>Type C</option>
                            </select>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Scientific Name</label>
                        <div>
                            <input onChange={(e) => handleProductChange(e, 'scientificName')} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                        </div>
                    </div>
                    
                    <p className='text-lg md:text-xl font-bold mb-4'>Side Effects</p>

                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Side Effect</label>
                        <div className='flex gap-4'>
                            <div className='w-3/4'>
                                <input className='w-full h-9 rounded-md p-2 text-sm' onChange={(e)=>{
                                    addSideEffect(e.target.value)
                                }} type="text" />
                            </div>
                            <div className='flex justify-center items-center w-1/4'>
                                <AiFillPlusCircle onClick={()=>appendSideEffect()} className='text-pharmaGreen-800 cursor-pointer' size={25} />
                            </div>
                        </div>
                        <div>
                            {
                                sideEffectsList.map((sideEffect, index) => {
                                    return (
                                        <div key={index} className='flex gap-4 my-2'>
                                            <div className='w-3/4'>
                                                {sideEffect}
                                            </div>
                                            <div className='flex justify-center items-center w-1/4'>
                                                <AiFillMinusCircle onClick={() => deleteSideEffect(index)} className='text-red-800 cursor-pointer' size={25} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Composition</label>
                        <div className='flex gap-4'>
                            <div className='w-3/4'>
                                <input className='w-full h-9 rounded-md p-2 text-sm' onChange={(e)=> {
                                    addComposition(e.target.value)
                                }} type="text" />
                            </div>
                            <div className='flex justify-center items-center w-1/4'>
                                <AiFillPlusCircle onClick={()=>appendComposition()} className='text-pharmaGreen-800 cursor-pointer' size={25} />
                            </div>
                        </div>
                        <div>
                            {
                                compositionList.map((composition, index) => {
                                    return (
                                        <div key={index} className='flex gap-4 my-2'>
                                            <div className='w-3/4'>
                                                {composition}
                                            </div>
                                            <div className='flex justify-center items-center w-1/4'>
                                                <AiFillMinusCircle onClick={() => deleteComposition(index)} className='text-red-800 cursor-pointer' size={25} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Usage</label>
                        <div>
                            <textarea onChange={(e) => handleProductChange(e, 'usage')} className='w-full h-9 rounded-md p-2 text-sm' type="text"></textarea>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => saveItem()} className='bg-pharmaGreen-800 text-white rounded-md text-sm py-2 px-4 hover:bg-pharmaGreen-700 transition ease-linear duration-150'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct