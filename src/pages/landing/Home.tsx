import Navbar from "../../components/Navbar";

const Home = () => {
 return (
  <div className="w-full h-screen flex flex-col relative">
   <Navbar />
   <div className="absolute top-5 left-5 right-5 bottom-5 bg-violet-800 rounded-xl -z-10" />
   <div className="mx-42">
    <h1>Landing page</h1>
   </div>
  </div>
 );
};

export default Home;
