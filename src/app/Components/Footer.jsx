"use client";

import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
   <footer className="bg-gray-900 text-gray-200 py-10 px-20">
           <div className="container mx-auto grid md:grid-cols-3 gap-8 items-start">
             <div>
               {/* <h3 className="text-lg font-bold mb-3">About Us</h3> */}
               <Image
                 src="/img/fabricshade.png"
                 alt="Fabricshade"
                 width={150}
                 height={100}
  style={{ width: 150, height: 100 }}
                 className="mb-3"
               />
               <p>
                 Formed in 2006, Fabricshade India is a renowned manufacturer and supplier of Lamp
                 Shades with unique finishes and unmatched quality.
               </p>
             </div>
   
             <div></div>
   
             <div>
               {/* <h3 className="text-lg font-bold mb-3">Contact</h3> */}
               <h2 className="text-xl">
                 <span className="text-pink-500">Fabric</span>
                 shade<span className="text-blue-400"> India</span>
               </h2>
              <div className="mt-6 space-y-2">
     <p className="flex gap-2 ">
       <span className="font-semibold text-gray-800"><PhoneCall className="text-white"/></span>{" "}
       <a href="tel:+919892432682" className="text-pink-600 hover:underline">
         (+91) 9892 4326 82
       </a>
     </p>
     
     <p className="flex gap-2">
       <span className="font-semibold text-gray-800"><Mail className="text-white"/></span>{" "}
       <a href="mailto:info@fabricshadeindia.in" className="text-pink-600 hover:underline">
         info@fabricshadeindia.in
       </a>
     </p>
   </div>
   
             </div>
           </div>
     <hr className="mt-10 "/>
           <div className="text-center mt-10 text-sm text-gray-400">
             &copy; 2025 FabricShade India. All Rights Reserved.
           </div>
         </footer>
  );
}
