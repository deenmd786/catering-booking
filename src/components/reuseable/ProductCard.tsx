"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './Button'; // Adjust the import path as necessary
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import { Product } from '../../types/Products';

interface ProductCardProps {
    product: Product;
    isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isInCart }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State to manage text expansion
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
    };

    const handleToggle = () => {
        setIsExpanded(!isExpanded); // Toggle the expanded state
    };

    return (
        <div className="bg-[var(--background-secondary)] rounded-lg shadow-md overflow-hidden sm:w-[108px] md:w-[136px] lg:w-32  lg:text-center xl:w-[141px]"> {/* Fixed width and height */}
            <div className="relative h-20 md:h-24 lg:h-28"> {/* Set a fixed height for the image container */}
                <Image
                    width={250}
                    height={200}
                    alt={`${product.productName} dish`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={product.productImg[0]}
                />
            </div>
            <div className="p-2 flex flex-col"> {/* Flexbox for content alignment */}
                <h3 
                    className={`text-start text-xs sm:text-sm font-semibold text-red-600 cursor-pointer ${isExpanded ? '' : 'text-ellipsis line-clamp-1'}`} 
                    onClick={handleToggle}
                >
                    {isExpanded ? product.productName : product.productName} {/* Ensure you are accessing the correct property */}
                </h3>
                <p className="hidden sm:flex capitalize text-xs text-gray-700 text-ellipsis line-clamp-1 max-lg:mb-1">Region: {product.region}</p>
                <p className="flex sm:hidden capitalize text-xs text-gray-700 text-ellipsis line-clamp-1 max-lg:mb-1">{product.region}</p>
                <p className="hidden lg:flex capitalize text-xs text-gray-700 mb-2">Cooking By: {product.cookingMethods}</p> {/* Access product.cookingMethods */}
                <div> {/* Push the button to the bottom */}
                    <Button
                        label={isInCart ? 'Remove' : 'Add to Plate'}
                        className={`w-full rounded-lg !font-normal max-xl:!text-xs lg:!py-2  ${
                            isInCart ? '!bg-black text-white' : ' text-white'
                        } hover:opacity-90`}
                        onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;