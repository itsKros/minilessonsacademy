import React from 'react'; 
export default function RightSideBar() {
  return (
     <section className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div class="container px-5 py-24 h-full bg-gray-100 ml-auto w-[450px]">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
          <div class="flex flex-wrap -m-4">
            {/* Close Button */}
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-bold">Panel</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}