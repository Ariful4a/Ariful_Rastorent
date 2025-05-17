import Cover from "../Menu_Page/Cover";
import contactImg from '../../../assets/menu/guides-2.jpeg'

const ContactSection = () => {
  return (
    <section>
        <Cover img={contactImg} title={'Contact Page'}></Cover>
      <section className="bg-white py-16 px-4 md:px-0 mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            If you have any questions or need assistance, please don&apos;t
            hesitate to <br /> contact us. We&apos;re here to help!
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Form
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-600 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Type your name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Type your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Number</label>
                  <input
                    type="number"
                    placeholder="Type your number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Message</label>
                  <textarea
                    placeholder="Type your message"
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">
                    Upload File
                  </label>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-700"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-3">
                <i className="fa-solid fa-location-dot mr-2 text-blue-500"></i>{" "}
                123 Main Street, Dhaka, Bangladesh
              </p>
              <p className="text-gray-600 mb-3">
                <i className="fa-solid fa-phone mr-2 text-blue-500"></i>{" "}
                +880123456789
              </p>
              <p className="text-gray-600 mb-3">
                <i className="fa-solid fa-envelope mr-2 text-blue-500"></i>{" "}
                arifuldeveloper70@gmail.com
              </p>
              <p className="text-gray-600">
                <i className="fa-solid fa-fax mr-2 text-blue-500"></i>{" "}
                +880123456789
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Location:</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.54115919769!2d90.35423469128072!3d23.80285383257572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1732914794991!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
