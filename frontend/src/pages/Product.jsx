import React from 'react'
import Navbar from '../components.jsx/Navbar'

const Product = () => {
  return (
    <div className="font-sans bg-[#f6f9fc] text-[#1f2a37] leading-relaxed min-h-screen">

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Page Header ── */}
      <div className="bg-white border-b border-[#e0e8f1] pb-20">
        <div className="max-w-[1040px] mx-auto px-5 pt-4">
          <p className="text-[0.85rem] text-[#5f6f82]">
            <a className="text-[#0f6fcf]" href="index.html">Home</a> / Mobiles / Samsung Galaxy M35
          </p>
          <h1 className="text-[clamp(1.5rem,3.6vw,2.2rem)] font-bold mt-2 tracking-tight">
            Samsung Galaxy M35 5G (8GB RAM, 128GB)
          </h1>
          <p className="text-[#5f6f82] text-[0.92rem] mt-1 mb-3.5">Model SM-M356B. Prices updated 20 minutes ago.</p>
          <span className="inline-block bg-[#e8f7ef] text-[#0a7a47] font-semibold px-4 py-1.5 rounded-full text-[0.95rem]">
            Lowest price: ₹15,999 on Flipkart
          </span>
        </div>
      </div>

      <div className="max-w-[1040px] mx-auto px-5">

        {/* ── Summary Tiles ── */}
        <div className="grid grid-cols-4 max-[860px]:grid-cols-2 gap-4 -mt-14 relative">
          <div className="bg-[#dcebfa] rounded-xl p-4">
            <span className="text-[0.95rem] font-semibold">Lowest price</span>
            <b className="block text-[1.9rem] font-semibold leading-tight">₹15,999</b>
          </div>
          <div className="bg-[#dcebfa] rounded-xl p-4">
            <span className="text-[0.95rem] font-semibold">Highest price</span>
            <b className="block text-[1.9rem] font-semibold leading-tight">₹17,990</b>
          </div>
          <div className="bg-[#dcebfa] rounded-xl p-4">
            <span className="text-[0.95rem] font-semibold">Best discount</span>
            <b className="block text-[1.9rem] font-semibold leading-tight">35%</b>
          </div>
          <div className="bg-[#dcebfa] rounded-xl p-4">
            <span className="text-[0.95rem] font-semibold">Drop chance (15 days)</span>
            <b className="block text-[1.9rem] font-semibold leading-tight">68%</b>
          </div>
        </div>

        {/* ── Filter + Bar Chart ── */}
        <div className="grid grid-cols-[200px_1fr] max-[860px]:grid-cols-1 gap-4 mt-4">
          <aside className="pt-6 px-1">
            <h2 className="text-[0.85rem] font-semibold mb-2.5">Platform</h2>
            <label className="flex gap-2 items-center text-[0.88rem] mb-2.5 cursor-pointer">
              <input className="w-4 h-4 accent-[#1e90ff]" type="checkbox" defaultChecked /> Flipkart
            </label>
            <label className="flex gap-2 items-center text-[0.88rem] mb-2.5 cursor-pointer">
              <input className="w-4 h-4 accent-[#1e90ff]" type="checkbox" defaultChecked /> Amazon
            </label>
            <label className="flex gap-2 items-center text-[0.88rem] mb-2.5 cursor-pointer">
              <input className="w-4 h-4 accent-[#1e90ff]" type="checkbox" defaultChecked /> Croma
            </label>
            <label className="flex gap-2 items-center text-[0.88rem] mb-2.5 cursor-pointer">
              <input className="w-4 h-4 accent-[#1e90ff]" type="checkbox" defaultChecked /> Reliance Digital
            </label>
          </aside>

          <section className="bg-white border border-[#e0e8f1] rounded-xl p-5 mt-4">
            <h2 className="text-[1rem] font-bold">Current price by platform</h2>
            <p className="text-[0.8rem] text-[#5f6f82] mb-3">Price in rupees on each store</p>
            <svg className="w-full h-auto block" viewBox="0 0 520 210" role="img" aria-label="Bar chart of price by platform">
              <g stroke="#e3edf7">
                <line x1="50" y1="20" x2="510" y2="20"/>
                <line x1="50" y1="70" x2="510" y2="70"/>
                <line x1="50" y1="120" x2="510" y2="120"/>
                <line x1="50" y1="170" x2="510" y2="170"/>
              </g>
              <text fontSize="10" fill="#5f6f82" x="6" y="24">₹20K</text>
              <text fontSize="10" fill="#5f6f82" x="6" y="74">₹15K</text>
              <text fontSize="10" fill="#5f6f82" x="6" y="124">₹10K</text>
              <text fontSize="10" fill="#5f6f82" x="6" y="174">₹5K</text>
              <g>
                <rect x="80" y="38" width="64" height="132" fill="#1e90ff"/>
                <text fontSize="11" fill="#1f2a37" x="112" y="32" textAnchor="middle">₹15,999</text>
                <text fontSize="10" fill="#5f6f82" x="112" y="190" textAnchor="middle">Flipkart</text>
              </g>
              <g>
                <rect x="200" y="35" width="64" height="135" fill="#1e90ff"/>
                <text fontSize="11" fill="#1f2a37" x="232" y="29" textAnchor="middle">₹16,499</text>
                <text fontSize="10" fill="#5f6f82" x="232" y="190" textAnchor="middle">Amazon</text>
              </g>
              <g>
                <rect x="320" y="30" width="64" height="140" fill="#1e90ff"/>
                <text fontSize="11" fill="#1f2a37" x="352" y="24" textAnchor="middle">₹17,990</text>
                <text fontSize="10" fill="#5f6f82" x="352" y="190" textAnchor="middle">Croma</text>
              </g>
            </svg>
          </section>
        </div>

        {/* ── Comparison Table + Price History ── */}
        <div className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-4 mt-4">

          <section className="bg-white border border-[#e0e8f1] rounded-xl p-5">
            <h2 className="text-[1rem] font-bold">Price comparison</h2>
            <p className="text-[0.8rem] text-[#5f6f82] mb-3">Price, MRP and discount</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-[0.8rem] text-[#5f6f82] font-semibold pb-2 px-2">Platform</th>
                    <th className="text-left text-[0.8rem] text-[#5f6f82] font-semibold pb-2 px-2">Price</th>
                    <th className="text-left text-[0.8rem] text-[#5f6f82] font-semibold pb-2 px-2">Discount</th>
                    <th className="text-left text-[0.8rem] text-[#5f6f82] font-semibold pb-2 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#f1f8ff]">
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      Flipkart<span className="block text-[0.75rem] text-[#0f6fcf]">Lowest price</span>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1] font-bold">
                      ₹15,999<s className="block text-[#5f6f82] text-[0.8rem] font-normal">₹24,499</s>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      <span className="bg-[#dcedff] text-[#0f6fcf] px-2.5 py-0.5 rounded-full text-[0.82rem] whitespace-nowrap">35% off</span>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      <a className="inline-block no-underline bg-[#1e90ff] text-white rounded-md px-3.5 py-1.5 text-[0.88rem] font-semibold whitespace-nowrap hover:bg-[#0f6fcf]" href="#">Buy</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">Amazon</td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1] font-bold">
                      ₹16,499<s className="block text-[#5f6f82] text-[0.8rem] font-normal">₹24,499</s>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      <span className="bg-[#dcedff] text-[#0f6fcf] px-2.5 py-0.5 rounded-full text-[0.82rem] whitespace-nowrap">33% off</span>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      <a className="inline-block no-underline bg-[#1e90ff] text-white rounded-md px-3.5 py-1.5 text-[0.88rem] font-semibold whitespace-nowrap hover:bg-[#0f6fcf]" href="#">Buy</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">Croma</td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1] font-bold">
                      ₹17,990<s className="block text-[#5f6f82] text-[0.8rem] font-normal">₹24,499</s>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      <span className="bg-[#dcedff] text-[#0f6fcf] px-2.5 py-0.5 rounded-full text-[0.82rem] whitespace-nowrap">27% off</span>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      <a className="inline-block no-underline bg-[#1e90ff] text-white rounded-md px-3.5 py-1.5 text-[0.88rem] font-semibold whitespace-nowrap hover:bg-[#0f6fcf]" href="#">Buy</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">Reliance Digital</td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1] font-bold">-</td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]">
                      <span className="text-[#c0392b] text-[0.85rem]">Out of stock</span>
                    </td>
                    <td className="py-3 px-2 border-t border-[#e0e8f1]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white border border-[#e0e8f1] rounded-xl p-5">
            <h2 className="text-[1rem] font-bold">Price history</h2>
            <p className="text-[0.8rem] text-[#5f6f82] mb-3">Lowest price across platforms</p>
            <div className="flex gap-1.5 mb-2" role="group" aria-label="Time range">
              <button className="border border-[#e0e8f1] bg-white rounded-full px-3.5 py-1 text-[0.85rem] cursor-pointer">30 days</button>
              <button className="border border-[#1e90ff] bg-[#1e90ff] text-white rounded-full px-3.5 py-1 text-[0.85rem] cursor-pointer">90 days</button>
              <button className="border border-[#e0e8f1] bg-white rounded-full px-3.5 py-1 text-[0.85rem] cursor-pointer">1 year</button>
            </div>
            <svg className="w-full h-auto block" viewBox="0 0 520 190" role="img" aria-label="Price history line chart">
              <g stroke="#e3edf7">
                <line x1="50" y1="15" x2="510" y2="15"/>
                <line x1="50" y1="60" x2="510" y2="60"/>
                <line x1="50" y1="105" x2="510" y2="105"/>
                <line x1="50" y1="150" x2="510" y2="150"/>
              </g>
              <text fontSize="10" fill="#5f6f82" x="6" y="19">₹18.5K</text>
              <text fontSize="10" fill="#5f6f82" x="6" y="64">₹17.5K</text>
              <text fontSize="10" fill="#5f6f82" x="6" y="109">₹16.5K</text>
              <text fontSize="10" fill="#5f6f82" x="6" y="154">₹15.5K</text>
              <path d="M50 50 C110 40,150 85,200 70 S280 100,330 85 S400 135,450 120 S490 140,510 138" fill="none" stroke="#1e90ff" strokeWidth="2.5"/>
              <text fontSize="10" fill="#5f6f82" x="50" y="176">Jul</text>
              <text fontSize="10" fill="#5f6f82" x="250" y="176">Aug</text>
              <text fontSize="10" fill="#5f6f82" x="470" y="176">Today</text>
            </svg>
            <p className="text-[0.8rem] text-[#5f6f82] mt-2">All-time low: ₹15,499 during the Great Indian Festival sale.</p>
          </section>
        </div>

        {/* ── Prediction + Alert ── */}
        <div className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-4 mt-4 mb-8">

          <section className="bg-white border border-[#e0e8f1] rounded-xl p-5">
            <h2 className="text-[1rem] font-bold">Price prediction</h2>
            <div className="text-[1.4rem] font-bold text-[#0f6fcf] mt-2">Better to wait</div>
            <p className="text-[#5f6f82] text-[0.9rem] mb-3">The price is likely to fall in the next 15 days.</p>

            <div className="flex justify-between text-[0.88rem]"><span>Chance the price drops</span><b>68%</b></div>
            <div className="h-2.5 bg-[#f6f9fc] rounded-full overflow-hidden my-1.5 mb-3">
              <b className="block h-full bg-[#1e90ff]" style={{width:'68%'}}></b>
            </div>

            <div className="flex justify-between text-[0.88rem]"><span>Chance the price rises</span><b>14%</b></div>
            <div className="h-2.5 bg-[#f6f9fc] rounded-full overflow-hidden my-1.5 mb-3">
              <b className="block h-full bg-[#f0a35e]" style={{width:'14%'}}></b>
            </div>

            <ul className="ml-4 text-[0.88rem] text-[#5f6f82] mt-1">
              <li>A festive sale may start within 10 days</li>
              <li>Today's price is 6% below the 90-day average</li>
              <li>Last year the price fell by up to ₹1,200 during sales</li>
            </ul>
            <p className="mt-3 text-[0.78rem] text-[#5f6f82] border-t border-[#e0e8f1] pt-2.5">
              This is an estimate based on price history and sale patterns. It is not a guarantee.
            </p>
          </section>

          <section className="bg-white border border-[#e0e8f1] rounded-xl p-5" id="alert">
            <h2 className="text-[1rem] font-bold">Set a price alert</h2>
            <p className="text-[0.8rem] text-[#5f6f82] mb-3">We will email you when the price reaches your target.</p>
            <form>
              <label className="block text-[0.88rem] font-semibold mt-2.5 mb-1" htmlFor="email">Email address</label>
              <input className="w-full border border-[#e0e8f1] rounded-md px-3 py-2.5 text-sm focus:border-[#1e90ff] outline-none" id="email" type="email" placeholder="you@example.com" required />
              <label className="block text-[0.88rem] font-semibold mt-2.5 mb-1" htmlFor="target">Target price (₹)</label>
              <input className="w-full border border-[#e0e8f1] rounded-md px-3 py-2.5 text-sm focus:border-[#1e90ff] outline-none" id="target" type="number" min="1" placeholder="14999" required />
              <button className="mt-3.5 w-full bg-[#1e90ff] text-white border-0 rounded-md py-3 font-semibold cursor-pointer hover:bg-[#0f6fcf]" type="submit">Set alert</button>
            </form>
          </section>
        </div>

      </div>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-[#e0e8f1] text-[#5f6f82] py-5 mt-8">
        <div className="max-w-[1040px] mx-auto px-5">
          Prices may be a few hours old. Please confirm the price on the seller's site before buying.
        </div>
      </footer>

    </div>
  )
}

export default Product
