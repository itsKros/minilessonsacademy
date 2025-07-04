import React from 'react';

export default function Home() {
  return (
    <>
      <section className="pt-30 bg-[linear-gradient(180deg,_#FFF8E8_14.62%,_#FBF1F3_50%,_#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10">
          <h1 className="font-medium text-black text-[22px] leading-[29px] uppercase">FOR EDUCATORS, COACHES & BUSINESS OWNERS</h1>
          <h2 className="w-[900px] font-bold text-[60px] leading-[78px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">Create Studio Quality Courses & E-Books in 90 Seconds</h2>
          <h3 className="font-bold text-[36px] leading-[47px] text-[#4D4D4D]">✨ (Without Writing a Single Word) ✨</h3>
          <h3 className="w-[700px] font-medium text-black text-[22px] leading-[29px]"> Mini Lessons Academy transforms your raw expertise into polished, <b>ready-to-sell digital products in minutes.</b> </h3>
          <nav className="list-none mb-10 text-center font-medium text-black text-[22px] leading-[29px] space-y-2">
            <li>No tech skills.</li>
            <li>No design talent.</li>
            <li>No content creation burnout.</li>
          </nav>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 lg:px-8 flex flex-row flex-wrap gap-10">
          <div class="grid grid-cols-3 gap-8">
            <div class="p-7 flex flex-row flex-wrap gap-4 rounded-xl border border-[#F1F1F1] h-full w-full bg-white">
              <img alt="content" className="sm:w-12 sm-h-12" src="/assets/home/icon-1.webp" />
              <p class="text-gray-900 text-lg title-font font-medium">Generate complete courses, e-books, and lead magnets with AI that actually sounds like you</p>
            </div>
            <div class="p-7 flex flex-row flex-wrap gap-4 rounded-lg border border-[#FFE5AD] h-full w-full bg-[#FFFBF3]">
              <img alt="content" className="sm:w-12 sm-h-12" src="/assets/home/icon-2.webp" />
              <p class="text-gray-900 text-lg title-font font-medium">Generate complete courses, e-books, and lead magnets with AI that actually sounds like you</p>
            </div>
            <div class="p-7 flex flex-row flex-wrap gap-4 rounded-lg border border-[#9AE6BF] h-full w-full bg-[#f4fffa]">
              <img alt="content" className="sm:w-12 sm-h-12" src="/assets/home/icon-3.webp" />
              <p class="text-gray-900 text-lg title-font font-medium">Generate complete courses, e-books, and lead magnets with AI that actually sounds like you</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-10 items-center justify-center">
          {/* Image */}
          <img
            alt="content"
            className="mx-auto max-w-full h-auto"
            src="/assets/home/dtr.png"
          />

          {/* Start Trial Button */}
          <button className="max-w-[791px] w-full mx-auto flex justify-center items-center font-medium text-white text-[35px] leading-[40px] py-6 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
            Start Trial
          </button>


          {/* Vidalytics Embed */}
          <div
            id="vidalytics_embed_3w0cbex34DPfSjQm"
            style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}
          ></div>

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
      (function (v, i, d, a, l, y, t, c, s) {
        y = '_' + d.toLowerCase(); c = d + 'L';
        if (!v[d]) { v[d] = {}; }
        if (!v[c]) { v[c] = {}; }
        if (!v[y]) { v[y] = {}; }
        var vl = 'Loader', vli = v[y][vl], vsl = v[c][vl + 'Script'], vlf = v[c][vl + 'Loaded'], ve = 'Embed';
        if (!vsl) {
          vsl = function (u, cb) {
            if (t) { cb(); return; }
            s = i.createElement("script");
            s.type = "text/javascript";
            s.async = 1;
            s.src = u;
            if (s.readyState) {
              s.onreadystatechange = function () {
                if (s.readyState === "loaded" || s.readyState == "complete") {
                  s.onreadystatechange = null; vlf = 1; cb();
                }
              };
            } else {
              s.onload = function () { vlf = 1; cb(); };
            }
            i.getElementsByTagName("head")[0].appendChild(s);
          };
        }
        vsl(l + 'loader.min.js', function () {
          if (!vli) {
            var vlc = v[c][vl];
            vli = new vlc();
          }
          vli.loadScript(l + 'player.min.js', function () {
            var vec = v[d][ve];
            t = new vec(); t.run(a);
          });
        });
      })(window, document, 'Vidalytics', 'vidalytics_embed_3w0cbex34DPfSjQm', 'https://fast.vidalytics.com/embeds/UNl1lqys/3w0cbex34DPfSjQm/');
    `,
            }}
          />
        </div>



      </section>
    </>
  );
}