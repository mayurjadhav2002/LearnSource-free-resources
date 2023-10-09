import React from 'react'

function Abc() {
  return (
    <div>
    
          {/* Header */}
    

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">About Us</h2>
          <p className="text-lg mb-4">Qbytespace is your go-to platform for discovering free software giveaways, coupons, free courses, learning materials, AI tools, and more. We curate valuable resources from the internet to help you enhance your digital experience.</p>
          <p className="text-lg">Explore our offerings and unlock a world of possibilities today.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
          <div className="flex flex-wrap justify-center">
            {/* Feature Card 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg m-4 w-80">
              <h3 className="text-xl font-semibold mb-4">Free Software</h3>
              <p className="text-gray-600">Access premium software for free and boost your productivity.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg m-4 w-80">
              <h3 className="text-xl font-semibold mb-4">Coupons & Discounts</h3>
              <p className="text-gray-600">Save money with exclusive coupons and discounts on various products.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg m-4 w-80">
              <h3 className="text-xl font-semibold mb-4">Free Courses</h3>
              <p className="text-gray-600">Enhance your skills with a wide range of free online courses.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white shadow-lg p-6 rounded-lg m-4 w-80">
              <h3 className="text-xl font-semibold mb-4">AI Tools</h3>
              <p className="text-gray-600">Leverage powerful AI tools to streamline your tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <p className="text-lg mb-4">Have questions or need assistance? Feel free to reach out to us at [Insert Contact Email Address]. We{"'"}re here to help!</p>
          <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out">Contact Us</button>
        </div>
      </section></div>
  )
}

export default Abc