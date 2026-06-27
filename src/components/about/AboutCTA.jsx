// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const AboutCTA = () => {
//   return (
//     <section className="bg-[#ECDCD0] py-24 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: false,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//         >
//           <p
//             className="
//               uppercase
//               tracking-[4px]
//               text-[#C97A34]
//               font-semibold
//             "
//           >
//             Ready To Snack Better?
//           </p>

//           <h2
//             className="
//               mt-5
//               text-4xl
//               md:text-6xl
//               font-bold
//               text-white
//               leading-tight
//             "
//           >
//             Discover Handcrafted Snacks
//             <br />
//             Made With Honest Ingredients.
//           </h2>

//           <p
//             className="
//               mt-8
//               text-lg
//               text-black-300
//               max-w-3xl
//               mx-auto
//               leading-8
//             "
//           >
//             Whether you're looking for a healthy snack, a protein-rich bite, or
//             a delicious traditional treat, Native Crunch brings together
//             authentic ingredients, natural goodness, and irresistible taste in
//             every bar.
//           </p>

//           <motion.div
//             whileHover={{
//               scale: 1.05,
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//             className="mt-12"
//           >
//             <Link
//               to="/"
//               className="
//                 inline-flex
//                 items-center
//                 gap-3
//                 bg-[#C97A34]
//                 hover:bg-[#B66D2E]
//                 text-white
//                 px-10
//                 py-4
//                 rounded-full
//                 text-lg
//                 font-semibold
//                 transition-all
//                 duration-300
//               "
//             >
//               Explore Products
//               <ArrowRight size={22} />
//             </Link>
//           </motion.div>

//           {/* Bottom Stats */}

//           <div className="grid md:grid-cols-3 gap-8 mt-20">
//             {[
//               {
//                 number: "100%",
//                 label: "Natural Ingredients",
//               },
//               {
//                 number: "0%",
//                 label: "Refined White Sugar",
//               },
//               {
//                 number: "∞",
//                 label: "Love in Every Bite",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: false,
//                   amount: 0.3,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.15,
//                 }}
//               >
//                 <h3 className="text-5xl font-bold text-[#C97A34]">
//                   {item.number}
//                 </h3>

//                 <p className="mt-3 text-black-300 text-lg">{item.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutCTA;
