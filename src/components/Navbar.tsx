export default function Navbar() {

 const navData = {
   items: [
     { label: "Home", href: "/" },
     { label: "How it Works", href: "/how-it-works" },
     { label: "Features", href: "/features" },
     { label: "Feedback", href: "/feedback" },
   ],
 };

 return (
  <nav className="mx-42  py-10 flex items-center justify-between ">
  <h1 className="text-white font-semibold font-violet-500">Tickety<span className="text-4xl font-bold text-green-400">.</span></h1>
   <ul className="flex items-center gap-10 text-sm font-light text-white">
     {navData.items.map((item) => (
       <li key={item.href}>
         <a href={item.href}>{item.label}</a>
       </li>
     ))}
   </ul>
   <button className="h-10 text-xs font-bold text-white rounded-md bg-violet-600 px-5">Login</button>
  </nav>
 );
}
