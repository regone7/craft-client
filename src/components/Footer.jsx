

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-black text-base-content">
                <aside>
                    <div className="flex  justify-center items-center ">
                        
                        <h1 className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-rose-500 via-green-300 to-green-500 text-transparent bg-clip-text">Sketchbook</h1>
                    </div>
                    <div className="grid grid-cols-1 space-y-3">
                        <div className="text-white">
                            <h1 className="font-semibold">Services</h1>
                            <div className="flex gap-3 ">
                                <p>Branding</p>
                                <p>Design</p>
                                <p>Marketing</p>
                                <p>Advertisement</p>
                            </div>
                        </div>
                        <div className="text-white">
                            <h1 className="font-semibold">Legal</h1>
                            <div className="flex gap-3">
                                <p>Terms of use</p>
                                <p>Privacy policy</p>
                                <p>Cookie policy</p>
                            </div>
                        </div>

                    </div>
                    <p className="mt-5  w-full border-2 border-gray-300 rounded-full px-3 text-white">Copyright © 2024 - All right reserved by Regone</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;