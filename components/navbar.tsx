import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <br></br> {/* NEUMIM CSS */}
      <nav className="flex items-center justify-between rounded-2xl bg-white m-6 px-8">
        <div className="flex items-center m-4">
          <ImLab size={35} className="text-black mr-2" />
          <h1
            className={cn(
              "text-5xl font-semibold text-black drop-shadow-md",
              font.className
            )}
          >
            NextLabs
          </h1>
        </div>
        <UserButton />
      </nav>
    </div>
  );
};

export default Navbar;
