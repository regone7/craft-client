

const Contructus = () => {
    return (
        <div>
            <section className="p-6 text-white">
                <form noValidate="" className="container md:w-1/2 max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 border-2 border-white ">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label htmlFor="name" className=" mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className=" w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className=" w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className=" w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contructus;