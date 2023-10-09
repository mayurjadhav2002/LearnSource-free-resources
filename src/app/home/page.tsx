// 'use client'
'use client'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer/page';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';
import 'react-alice-carousel/lib/alice-carousel.css';
const items = [
  <Banner />,
  <Banner />
];
const tshirtcards = [
  <Card id={"1"} url={'./Assets/products/t-shirt/IMG-20230828-WA0030.webp'} />,
  <Card id={"2"} url={'./Assets/products/t-shirt/IMG-20230828-WA0031.webp'} />,
  <Card id={"3"} url={'./Assets/products/t-shirt/IMG-20230828-WA0032.webp'} />,
  <Card id={"4"} url={'./Assets/products/shirt/IMG-20230828-WA0011.webp'} />,
  <Card id={"5"} url={'./Assets/products/shirt/IMG-20230828-WA0018.webp'} />,
  <Card id={"6"} url={'./Assets/products/t-shirt/IMG-20230828-WA0032.webp'} />
]
const pantscards = [
  <Card id={"1"} url={'./Assets/products/pants/IMG-20230828-WA0012.webp'} />,
  <Card id={"2"} url={'./Assets/products/pants/IMG-20230828-WA0013.webp'} />,
  <Card id={"3"} url={'./Assets/products/pants/IMG-20230828-WA0014.webp'} />,
  <Card id={"3"} url={'./Assets/products/pants/IMG-20230828-WA0012.webp'} />,
  <Card id={"3"} url={'./Assets/products/pants/IMG-20230828-WA0013.webp'} />,
  <Card id={"4"} url={'./Assets/products/pants/IMG-20230828-WA0016.webp'} />
]
const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: {
    items: 6,
    itemsFit: 'contain'
  },
};
const categories = [
  {
    name: 'Category 1',
    heading: 'Featured Combo',
    images: [
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0007.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0008.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0021.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0022.webp",
        "description": "min 30% off"
      }],
  },
  {
    name: 'Category 2',
    heading: 'Combo of 3',
    images: [
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0009.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0036.webp",
        "description": "min 30% off"
      }],
  },
  {
    name: 'Category 3',
    heading: 'Combo of 2',
    images: [
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0010.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0037.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0026.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0027.webp",
        "description": "min 30% off"
      }],
  },
  {
    name: 'Category 4',
    heading: 'Combo of 4',
    images: [

      {
        "image": "./Assets/products/combo/IMG-20230828-WA0005.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0024.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0025.webp",
        "description": "min 30% off"
      },],
  },
  {
    name: 'Category 4',
    heading: 'Best Seller',
    images: [
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0017.webp",
        "description": "min 30% off"
      }, {
        "image": "./Assets/products/combo/IMG-20230828-WA0017.webp",
        "description": "min 30% off"
      }],
  },
  {
    name: 'Category 4',
    heading: 'Featured Products',
    images: [
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },],
  }
];
const offers = [
  {
    name: 'Category 3',
    heading: 'Combo of 2',
    images: [
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0010.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0037.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0026.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0027.webp",
        "description": "min 30% off"
      }],
  },
  {
    name: 'Category 4',
    heading: 'Combo of 4',
    images: [

      {
        "image": "./Assets/products/combo/IMG-20230828-WA0005.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0024.webp",
        "description": "min 30% off"
      },
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0025.webp",
        "description": "min 30% off"
      },],
  },
  {
    name: 'Category 4',
    heading: 'Best Seller',
    images: [
      {
        "image": "./Assets/products/combo/IMG-20230828-WA0017.webp",
        "description": "min 30% off"
      }, {
        "image": "./Assets/products/combo/IMG-20230828-WA0017.webp",
        "description": "min 30% off"
      }],
  },
  {
    name: 'Category 4',
    heading: 'Featured Products',
    images: [
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },
      {
        "image": "./tShirt.jpg",
        "description": "min 30% off"
      },],
  }
];
function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
        <AliceCarousel mouseTracking items={items} infinite={true} autoPlay={true} autoPlayInterval={2000} disableButtonsControls disableDotsControls />
      </div>
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 relative -top-32 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <div className="p-5 relative -top-20">
        <div className='md:p-3'>
          <h3 className='mb-5 font-bold text-md md:text-lg'>Best of Men's clothings </h3>
          <div className="">
            <AliceCarousel responsive={responsive} mouseTracking items={tshirtcards} infinite={true} autoPlay={true} autoPlayInterval={2500} disableDotsControls
              renderPrevButton={() => (
                <button className="carousel-button prev left-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </button>
              )}
              renderNextButton={() => (
                <button className="carousel-button next right-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              )}
            />
          </div>
        </div>
        {/* best of women clothings */}
        <div className='md:p-3'>
          <h3 className='mb-5 font-bold text-md md:text-lg'>Best of Men's Bottom Wear</h3>
          <div className="flex flex-row justify-between overflow-auto">
            <AliceCarousel responsive={responsive} mouseTracking items={pantscards} infinite={true} autoPlay={true} autoPlayInterval={2500} disableDotsControls
              renderPrevButton={() => (
                <button className="carousel-button prev left-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </button>
              )}
              renderNextButton={() => (
                <button className="carousel-button next right-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              )}
            />
          </div>
        </div>
        <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {offers.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
        {/* best of childrens clothings */}
        <div className='md:p-3'>
          <h3 className='mb-5 font-bold text-md md:text-lg'>Best of Children Clothings </h3>
          <AliceCarousel responsive={responsive} mouseTracking items={tshirtcards} infinite={true} autoPlay={true} autoPlayInterval={2500} disableDotsControls
            renderPrevButton={() => (
              <button className="carousel-button prev left-0 absolute top-28">
                <div className='bg-white p-3'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </button>
            )}
            renderNextButton={() => (
              <button className="carousel-button next right-0 absolute top-28">
                <div className='bg-white p-3'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            )}
          />
          <div className="flex flex-row justify-between overflow-auto">
          </div>
        </div>
        <div className='md:p-3'>
          <h3 className='mb-5 font-bold text-md md:text-lg'>Best of Children Clothings </h3>
          <AliceCarousel responsive={responsive} mouseTracking items={tshirtcards} infinite={true} autoPlay={true} autoPlayInterval={2500} disableDotsControls
            renderPrevButton={() => (
              <button className="carousel-button prev left-0 absolute top-28">
                <div className='bg-white p-3'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </button>
            )}
            renderNextButton={() => (
              <button className="carousel-button next right-0 absolute top-28">
                <div className='bg-white p-3'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            )}
          />
          <div className="flex flex-row justify-between overflow-auto">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

interface Image {
  image: string;
  description: string;
}
interface CategoryCardProps {
  category: {
    name: string;
    heading: string;
    images: Image[];
  };
}
const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, heading, images } = category;
  let rows = 1;
  let cols = images.length;
  if (images.length === 2) {
    rows = 2;
    cols = 1;
  } else {
    rows = 2;
    cols = 2;
  }
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: '1rem',
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-xl font-semibold mb-2 p-4">{heading}</h2>
      <div className="px-5 py-1" style={gridStyle}>
        {images.map((image, index) => (
          <div>
            <img
              key={image.image}
              src={image.image}
              alt={`${name} Image ${index}`}
              className="h-40 object-fit"
            />
            <h2 className="text-sm font-normal mb-2">{image.description}</h2>
          </div>
        ))}
      </div>
      <div className="px-4 py-1">
        <h2 className="text-sm underline font-normal mb-2">see all products</h2>
      </div>
    </div>
  );
};
function Card(props: any) {
  return (
    <Link href={`/home/${props.id}`} >
      <div className='m-2 bg-white'>
        <div className="w-1/7 rounded overflow-hidden shadow-md">
          <img className="h-[34vh] w-full object-fit" src={props.url} alt="Product Image" />
          <div className="px-2 py-2">
            <div className="font-bold text-md mb-1">Comming Soon</div>
            <p className="text-gray-700 text-sm">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="px-5 py-2 flex justify-between">
            <div className="font-bold mt-1 text-xl text-gray-600">₹00.00</div>
            <div>
              <button className="bg-blue-300 hover:bg-blue-500 text-xl mx-1 text-white  p-2 rounded-full">
                <AiOutlineShoppingCart />
              </button>
              <button className="bg-blue-300 hover:bg-blue-500 text-xl mx-1 text-white  p-2 rounded-full">
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
function Banner() {
  return (
    <div className="bg-gradient-to-r from-slate-400 via--slate-100 to-slate-400 text-white p-8 py-20 pb-52">
      <div className="mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Welcome to Our Stoffspot Store!
        </h1>
        <p className="text-lg mb-8">
          Discover the best deals on the latest products.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>

    // <div className='h-[60vh]'>
    //   <img className='object-center object-cover h-full w-full' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0dEKMoC-puPjFFrH3rE_vAHaEQ%26pid%3DApi&f=1&ipt=31de6a4f7a6cfb958ce423ea9a4a03b945963616363a88a7bd9eedfe57648812&ipo=images" onDragStart={handleDragStart} role="presentation" />
    // </div>
  )
}
export default LandingPage;