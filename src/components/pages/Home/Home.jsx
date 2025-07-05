import React from 'react';

export default function Home() {
  return (
    <>
      {/* Sectione 1 Create Studio Quality Courses  */}
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

      {/* Sectione 2 3Day Free Trail  */}
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
            src="/assets/home/home-1.png"
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

      {/* Sectione 3 Day Free Trail  */}
      <section className="py-10 bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FFF8E8_34.62%,_#FBF1F3_50%,_#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-30 lg:px-8 flex flex-row flex-wrap gap-10">
          <h2 className="text-center w-full mb-10 font-bold font-bold text-black text-[50px] leading-[65px]">What You Get</h2>
          <div class="w-[1000px] mx-auto grid grid-cols-2 gap-15">
            <div class="w-full relative">
              <img alt="content" class="w-auto h-auto w-full" src="/assets/home/home-2.webp" />
              <img alt="content" class="absolute top-0 w-auto h-auto rotate-[-10deg] w-full" src="/assets/home/home-2.webp" />
            </div>
            <div class="w-full flex flex-wrap">
              <div class="ctaBlock">
                <h2 class="font-bold text-black text-[24px] leading-[31px] mb-2"><span class="text-[#9b0ff1]">100% Ownership</span> of All Content</h2>
                <p class="font-medium text-black text-[20px] leading-[26px]">Your intellectual property stays yours forever </p>
              </div>
              <div class="ctaBlock">
                <h2 class="font-bold text-black text-[24px] leading-[31px] mb-2"><span class="text-[#9b0ff1]">Research-Backed</span> Material</h2>
                <p class="font-medium text-black text-[20px] leading-[26px]">Content based on trusted sources, not generic AI fluff </p>
              </div>
              <div class="ctaBlock">
                <h2 class="font-bold text-black text-[24px] leading-[31px] mb-2"><span class="text-[#9b0ff1]">Risk-Free</span> Experience</h2>
                <p class="font-medium text-black text-[20px] leading-[26px]">Try it free for 3 days with zero hassle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 flex flex-row flex-wrap gap-10">
          <h3 className="font-medium text-black text-[26px] leading-[34px] text-center w-full">Trusted by <span class="font-bold">10,000+ Course</span> Creators & Counting</h3>
          <div class="container w-full max-w-[1000px] px-5 mx-auto grid grid-cols-4 gap-10 items-center justify-center text-center">
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/1.webp" />
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/2.webp" />
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/3.webp" />
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/4.webp" />
          </div>

          <div class="container inline-flex items-center w-full flex justify-center gap-10">
            <div class="userBlock inline-flex">
              <img alt="content" class="sm:w-13 sm:h-13 rounded-full z-1" src="/assets/home/user-1.png" />
              <img alt="content" class="sm:w-13 sm:h-13 rounded-full z-2 ml-[-25px]" src="/assets/home/user-2.png" />
              <img alt="content" class="sm:w-13 sm:h-13 rounded-full z-3 ml-[-25px]" src="/assets/home/user-3.png" />
              <img alt="content" class="sm:w-13 sm:h-13 rounded-full z-4 ml-[-25px]" src="/assets/home/user-4.png" />
              <img alt="content" class="sm:w-13 sm:h-13 rounded-full z-5 ml-[-25px]" src="/assets/home/user-5.jpg" />
              <img alt="content" class="sm:w-13 sm:h-13 rounded-full z-6 ml-[-25px]" src="/assets/home/user-6.webp" />
              <img alt="content" class="sm:w-13 sm:h-13 rounded-full z-7 ml-[-25px]" src="/assets/home/user-7.png" />
            </div>
            <h3 class="font-bold text-black text-[24px] leading-[31px] mb-2">4.9/5 Rating</h3>
            <img alt="content" class="w-50   " src="/assets/brand-icon/star.png" />
          </div>
        </div>
      </section>

      {/* Sectione 3 Most Course Ideas*/}
      <section className="py-10 mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-30 lg:px-8 flex flex-row flex-wrap gap-4">
          <h2 className="w-[650px] mx-auto font-bold text-[50px] leading-[70px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">Why Most Course Ideas Die Before Launch</h2>
          <p class="text-gray-900 text-lg title-font font-medium w-full text-center">We surveyed 300 first-time creators who joined Mini Lessons Academy.</p>
          <p class="text-gray-900 text-lg title-font font-medium w-full text-center">Here's what was killing their progress:</p>
        </div>
        <div className="w-full max-w-[950px] mx-auto sm:px-6 mb-30 flex flex-col items-center gap-10">
          <h2 className="text-center w-full mb-3 font-bold text-black text-[50px] leading-[65px]"> The True Cost of Staying Stuck </h2> 
          <div className="w-full flex flex-wrap -m-4">
            {/* Left Image Block */}
            <div className="p-4 lg:w-1/3 bg-center bg-cover rounded-[25px]" style={{ backgroundImage: "url('/assets/home/home-3.jpg')" }} >
              <span></span>
            </div>

            {/* Right Text Block */}
            <div className="p-4 lg:w-2/3">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Lost Revenue</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]">
                    Every month without your course = potential $1,000s uncaptured
                  </p>
                </div>
              </div>

              {/* CTA 2 */}
              <div className="ctaBlock p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Invisible Expertise</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]">
                    Your knowledge remains hidden while others gain visibility
                  </p>
                </div>
              </div>

              {/* CTA 3 */}
              <div className="ctaBlock p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Mental Burden</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]">
                    That unfinished project is draining your creative energy
                  </p>
                </div>
              </div>

              {/* CTA 4 */}
              <div className="ctaBlock p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Market Position</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]">
                    Competitors publish faster and claim your audience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sectione 4 3Day Free Trail  */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-10 ">
          <h3 className=" mx-auto mb-[-15px] text-center font-bold text-[46px] leading-[50px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">That’s Why We Built Mini Lessons Academy</h3>
          <h3 className="w-[900px] mx-auto text-center font-bold text-[40px] leading-[55px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">A powerful AI tool that turns your idea into a ready‑to‑sell course in five simple steps.</h3>

          <div class="w-full max-w-[800px] mx-auto grid grid-cols-2 gap-5">
            <div class="w-full p-7 pb-0 border border-[#ECECEC] shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg p-5">
              <h3 class="font-bold text-[30px] leading-[39px] text-[#DA0000] text-center mb-2">The Old Way</h3>
              <h3 class="font-bold text-[30px] leading-[39px] text-[#00000] text-center mb-3">(That's Failing You)</h3>
              <div class="space-y-4">
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Endless writing cycles</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Disorganized content docs</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Expensive, difficult platforms</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Multiple hiring needs</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Steep learning curves</p>
              </div>
              <img alt="content" class="w-auto h-auto w-full" src="/assets/home/home-4.png" />

            </div>
            <div class="w-full relative p-7 pb-0 border border-[#ECECEC] shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg p-5">
              <h3 class="font-bold text-[30px] leading-[39px] text-[#DA0000] text-center mb-2">The Better Way</h3>
              <div class="space-y-4 mr-[-50px]">
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ 90-second course creation</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ Built-in knowledge frameworks</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ All-in-one platform</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ Automatic professional design</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ Tech-free publishing</p>
              </div>

              <img alt="content" class="absolute inset-x-0 bottom-0 mx-auto w-auto h-auto w-full" src="/assets/home/home-5.png" />
            </div>

          </div>
          <button className="max-w-[400px] mx-auto w-full flex justify-center items-center font-bold text-white text-[35px] leading-[40px] py-6 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
            Start Trial
          </button>
        </div>
      </section>

      {/* Sectione 5 How Mini Lessons Academy Works  */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-30 lg:px-8 flex flex-row flex-wrap gap-4">
          <h2 className="text-center w-full font-bold text-black text-[50px] leading-[65px]"> How Mini Lessons Academy Works
          </h2>

          <div className="w-full max-w-[1000px] mx-auto grid grid-cols-2 gap-5">
            {/* Left Image Block */}
            <div className="p-4">
              <span
                className="block w-full h-[400px] bg-center bg-cover rounded-[25px]"
                style={{ backgroundImage: "url('/assets/home/home-5.jpg')" }}
              ></span>
            </div>

            {/* Right Text Block */}
            <div className="p-4">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 w-full flex flex-wrap items-center gap-3">
                <h3 className="font-bold text-[#9B0FF1] text-[34px] leading-[44px] mb-2">Step 1</h3>
                <h3 className="font-bold text-black text-[28px] leading-[36px] mb-2">Enter Your Course Topic (10 Seconds)</h3>
                <p className="font-medium text-black text-[20px] leading-[26px]"> Simply type what you want to teach. Our AI Title Generator instantly suggests clear, compelling titles that position your expertise.</p>
                <div class="space-y-2 mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> No more agonizing over the "perfect" title</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Get expert guidance on narrowing your</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Stop second-guessing and start creating immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}