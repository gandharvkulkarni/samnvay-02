import { Link } from 'react-router-dom';
import logoWhite from '../../Samnvay-logo-new-white.png';

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center space-x-3">
             <img src={logoWhite} alt='Samnvay Logo' className='w-48' />
            </div>

            <p className="text-center text-gray-400 max-w-md">
              Promoting Peace Through Dialogue. Making justice accessible to everyone, everywhere.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
               <span className="text-gray-600">•</span>
              <Link to={'/rules'} className="hover:text-emerald-400 transition-colors">Rules</Link>
              <span className="text-gray-600">•</span>
              <button className="hover:text-emerald-400 transition-colors">Terms of Service</button>
              <span className="text-gray-600">•</span>
              <button className="hover:text-emerald-400 transition-colors">Cookie Policy</button>
            </div>

            <div className="pt-6 border-t border-gray-800 w-full text-center">
              <p className="text-sm text-gray-500">
               © 2025 Samnvay. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer