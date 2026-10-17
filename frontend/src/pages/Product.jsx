import React from 'react'
import '../styles/product.css'

const Product = () => {
  return (
    <div className="product-page">
      {/* ── Header ── */}
      <header className="top">
        <div className="wrap">
          <nav className="nav">
            <a className="logo" href="index.html">Price<i>Watch</i></a>
            <ul>
              <li><a href="index.html#how">How it works</a></li>
              <li><a href="index.html#deals">Popular deals</a></li>
              <li><a href="#alert">Price alerts</a></li>
              <li><a className="cta" href="index.html">Check another product</a></li>
            </ul>
          </nav>

          <p className="crumb"><a href="index.html">Home</a> / Mobiles / Samsung Galaxy M35</p>
          <h1 className="title">Samsung Galaxy M35 5G (8GB RAM, 128GB)</h1>
          <p className="sub">Model SM-M356B. Prices updated 20 minutes ago.</p>
          <span className="pill">Lowest price: ₹15,999 on Flipkart</span>
        </div>
      </header>

      <div className="wrap">

        {/* ── Summary tiles ── */}
        <div className="tiles">
          <div className="tile"><span>Lowest price</span><b>₹15,999</b></div>
          <div className="tile"><span>Highest price</span><b>₹17,990</b></div>
          <div className="tile"><span>Best discount</span><b>35%</b></div>
          <div className="tile"><span>Drop chance (15 days)</span><b>68%</b></div>
        </div>

        {/* ── Filter + Bar chart ── */}
        <div className="grid g3">
          <aside className="filter">
            <h2>Platform</h2>
            <label><input type="checkbox" defaultChecked /> Flipkart</label>
            <label><input type="checkbox" defaultChecked /> Amazon</label>
            <label><input type="checkbox" defaultChecked /> Croma</label>
            <label><input type="checkbox" defaultChecked /> Reliance Digital</label>
          </aside>

          <section className="card">
            <h2>Current price by platform</h2>
            <p className="hint">Price in rupees on each store</p>
            <svg className="chart" viewBox="0 0 520 210" role="img" aria-label="Bar chart of price by platform">
              <g stroke="#e3edf7">
                <line x1="50" y1="20" x2="510" y2="20"/>
                <line x1="50" y1="70" x2="510" y2="70"/>
                <line x1="50" y1="120" x2="510" y2="120"/>
                <line x1="50" y1="170" x2="510" y2="170"/>
              </g>
              <text x="6" y="24">₹20K</text>
              <text x="6" y="74">₹15K</text>
              <text x="6" y="124">₹10K</text>
              <text x="6" y="174">₹5K</text>
              <g>
                <rect x="80" y="38" width="64" height="132" fill="#1e90ff"/>
                <text className="val" x="112" y="32" textAnchor="middle">₹15,999</text>
                <text x="112" y="190" textAnchor="middle">Flipkart</text>
              </g>
              <g>
                <rect x="200" y="35" width="64" height="135" fill="#1e90ff"/>
                <text className="val" x="232" y="29" textAnchor="middle">₹16,499</text>
                <text x="232" y="190" textAnchor="middle">Amazon</text>
              </g>
              <g>
                <rect x="320" y="30" width="64" height="140" fill="#1e90ff"/>
                <text className="val" x="352" y="24" textAnchor="middle">₹17,990</text>
                <text x="352" y="190" textAnchor="middle">Croma</text>
              </g>
            </svg>
          </section>
        </div>

        {/* ── Comparison table + Price history ── */}
        <div className="grid g2">
          <section className="card">
            <h2>Price comparison</h2>
            <p className="hint">Price, MRP and discount</p>
            <div className="scroll">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="low">
                    <td>Flipkart<span className="flag">Lowest price</span></td>
                    <td className="price">₹15,999<s>₹24,499</s></td>
                    <td><span className="off">35% off</span></td>
                    <td><a className="buy" href="#">Buy</a></td>
                  </tr>
                  <tr>
                    <td>Amazon</td>
                    <td className="price">₹16,499<s>₹24,499</s></td>
                    <td><span className="off">33% off</span></td>
                    <td><a className="buy" href="#">Buy</a></td>
                  </tr>
                  <tr>
                    <td>Croma</td>
                    <td className="price">₹17,990<s>₹24,499</s></td>
                    <td><span className="off">27% off</span></td>
                    <td><a className="buy" href="#">Buy</a></td>
                  </tr>
                  <tr>
                    <td>Reliance Digital</td>
                    <td className="price">-</td>
                    <td><span className="oos">Out of stock</span></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="card">
            <h2>Price history</h2>
            <p className="hint">Lowest price across platforms</p>
            <div className="range" role="group" aria-label="Time range">
              <button>30 days</button>
              <button>90 days</button>
              <button>1 year</button>
            </div>
            <svg className="chart" viewBox="0 0 520 190" role="img" aria-label="Price history line chart">
              <g stroke="#e3edf7">
                <line x1="50" y1="15" x2="510" y2="15"/>
                <line x1="50" y1="60" x2="510" y2="60"/>
                <line x1="50" y1="105" x2="510" y2="105"/>
                <line x1="50" y1="150" x2="510" y2="150"/>
              </g>
              <text x="6" y="19">₹18.5K</text>
              <text x="6" y="64">₹17.5K</text>
              <text x="6" y="109">₹16.5K</text>
              <text x="6" y="154">₹15.5K</text>
              <path d="M50 50 C110 40,150 85,200 70 S280 100,330 85 S400 135,450 120 S490 140,510 138" fill="none" stroke="#1e90ff" strokeWidth="2.5"/>
              <text x="50" y="176">Jul</text>
              <text x="250" y="176">Aug</text>
              <text x="470" y="176">Today</text>
            </svg>
            <p className="hint" style={{margin:'8px 0 0'}}>All-time low: ₹15,499 during the Great Indian Festival sale.</p>
          </section>
        </div>

        {/* ── Prediction + Alert ── */}
        <div className="grid g2">
          <section className="card pred">
            <h2>Price prediction</h2>
            <div className="verdict" style={{marginTop:'8px'}}>Better to wait</div>
            <p className="psub">The price is likely to fall in the next 15 days.</p>
            <div className="row"><span>Chance the price drops</span><b>68%</b></div>
            <div className="bar"><b style={{width:'68%'}}></b></div>
            <div className="row"><span>Chance the price rises</span><b>14%</b></div>
            <div className="bar up"><b style={{width:'14%'}}></b></div>
            <ul>
              <li>A festive sale may start within 10 days</li>
              <li>Today's price is 6% below the 90-day average</li>
              <li>Last year the price fell by up to ₹1,200 during sales</li>
            </ul>
            <p className="note">This is an estimate based on price history and sale patterns. It is not a guarantee.</p>
          </section>

          <section className="card alert-box" id="alert">
            <h2>Set a price alert</h2>
            <p className="hint">We will email you when the price reaches your target.</p>
            <form>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" required />
              <label htmlFor="target">Target price (₹)</label>
              <input id="target" type="number" min="1" placeholder="14999" required />
              <button type="submit">Set alert</button>
            </form>
          </section>
        </div>

      </div>

      {/* ── Footer ── */}
      <footer>
        <div className="wrap">
          Prices may be a few hours old. Please confirm the price on the seller's site before buying.
        </div>
      </footer>
    </div>
  )
}

export default Product
