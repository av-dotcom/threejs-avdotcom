const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="flex gap-3 items-center">
                <p className="text-white-700">Find me here!</p>
                <a href="https://github.com/av-dotcom" target="_blank" rel="noopener noreferrer" className="social-icon hover:opacity-75 transition-opacity duration-200">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a href="https://www.linkedin.com/in/alejandro-vilaca-26634a229/" target="_blank" rel="noopener noreferrer" className="social-icon hover:opacity-75 transition-opacity duration-200">
                    <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2" />
                </a>
            </div>
            <p className="text-white-500">© 2024 <span className="font-semibold">avilaca<span className='font-normal'>.com</span></span>. All rights reserved.</p>
        </footer>
    );
};

export default Footer;