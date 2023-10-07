import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import gojo from '../../../public/Assets/gojo.jpg'
import Link from 'next/link';
type TdcartProps = {
  onClose: () => void;
};

var products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$34.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 3,
    name: 'Classic Leather Sneakers',
    href: '#',
    color: 'White',
    price: '$79.99',
    quantity: 1,
    imageSrc: 'https://example.com/classic-sneakers.jpg',
    imageAlt: 'White classic leather sneakers with a clean design.',
  },
  {
    id: 4,
    name: 'Vintage Denim Jacket',
    href: '#',
    color: 'Denim Blue',
    price: '$59.00',
    quantity: 1,
    imageSrc: 'https://example.com/vintage-denim-jacket.jpg',
    imageAlt: 'Denim blue vintage-style denim jacket with faded details.',
  },
  {
    id: 5,
    name: 'Smartphone Holder Stand',
    href: '#',
    color: 'Black',
    price: '$12.99',
    quantity: 1,
    imageSrc: 'https://example.com/smartphone-holder.jpg',
    imageAlt: 'Black smartphone holder stand for desk or bedside use.',
  },
  
  // ... (other products)
];

const Tdcart: React.FC<TdcartProps> = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [cartItems, setCartItems] = useState(products);

  const removeItemFromCart = (itemId: number) => {
    products = cartItems.filter((item) => item.id !== itemId);
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);

  };
  useEffect(() => {
    setCartItems(products);
  }, [products]);

  const totalPrice = cartItems.reduce((accumulator, product) => {
    const price = parseFloat(product.price.replace('$', ''));
    return accumulator + price * product.quantity;
  }, 0);

  return (
    <div className="relative z-20">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col  bg-white shadow-xl">
                  <div className="flex p-5 items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="ml-3 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                <div className="flex-1 custom-scrollbar overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Image
                                src={gojo}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {product.quantity}</p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => removeItemFromCart(product.id)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{totalPrice.toFixed(2)}</p>
                  </div>
                 <div className="mt-6">
                    <Link
                    href="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tdcart;
