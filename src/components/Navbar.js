import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-12 mr-4" src="/logo.png" />
          <span class="font-semibold text-xl tracking-tight">ToDo App</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
