// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const ProductCategories = ({ categories }) => {
//   return (
//     <section className="bg-[#ECDCD0] py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{
//             once: false,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <p className="uppercase tracking-[4px] text-[#C97A34] font-semibold">
//             Our Collection
//           </p>

//           <h2 className="text-5xl font-bold text-[#2E1E13] mt-4">
//             Explore Our Product Categories
//           </h2>

//           <p className="mt-6 text-[#6D645D] text-lg leading-8">
//             From creamy peanut butter bars to traditional chikki and innovative
//             specialty snacks, discover a range crafted for every craving.
//           </p>
//         </motion.div>

//         {/* Cards */}

//         <div className="grid lg:grid-cols-3 gap-10 mt-20">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{
//                 opacity: 0,
//                 y: 50,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: false,
//                 amount: 0.2,
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.15,
//               }}
//               whileHover={{
//                 y: -8,
//               }}
//               className="
//                 bg-white
//                 rounded-3xl
//                 overflow-hidden
//                 border
//                 border-[#E8D6C6]
//                 shadow-sm
//                 hover:shadow-2xl
//                 transition-all
//               "
//             >
//               {/* Product Image */}

//               <div className="bg-[#F8F2EA] p-10">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="
//                     h-72
//                     w-full
//                     object-contain
//                     transition-transform
//                     duration-300
//                     hover:scale-105
//                   "
//                 />
//               </div>

//               {/* Content */}

//               <div className="p-8">
//                 <h3 className="text-3xl font-bold text-[#2E1E13]">
//                   {category.title}
//                 </h3>

//                 <p className="mt-5 text-[#6D645D] leading-8">
//                   {category.description}
//                 </p>

//                 <Link
//                   to="/"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     mt-8
//                     text-[#C97A34]
//                     font-semibold
//                     hover:gap-4
//                     transition-all
//                   "
//                 >
//                   Explore Collection
//                   <ArrowRight size={20} />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductCategories;
