import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Printer } from 'lucide-react';

export default function CV() {
  useEffect(() => {
    document.title = "Michael Gruen - Resume";
  }, []);

  return (
    <div className="min-h-screen bg-bg pt-24 pb-12 px-6 print:p-0 print:bg-white print:text-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Web-only controls */}
        <div className="flex justify-end mb-8 print:hidden">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-bg font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            <Printer size={16} />
            Print / Save PDF
          </button>
        </div>

        {/* Resume Document */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-white text-black font-serif p-8 md:p-16 shadow-2xl print:shadow-none print:p-0 print:max-w-none w-full mx-auto" style={{ maxWidth: '8.5in' }}
        >
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-tighter">
              <a href="https://www.forbes.com/sites/tomward/2021/02/13/michael-gruen-knows-everybody/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Michael Gruen</a>
            </h1>
            <div className="text-sm flex flex-wrap justify-center gap-x-4 gap-y-2 items-center font-sans tracking-tight text-gray-700">
              <a href="mailto:gruenm@duq.edu" className="text-[#003366] hover:underline">gruenm@duq.edu</a>
              <span className="hidden sm:inline opacity-30">•</span>
              <a href="https://www.linkedin.com/in/michael-gruen99/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/michael-gruen99</a>
              <span className="hidden sm:inline opacity-30">•</span>
              <a href="https://www.crunchbase.com/person/michael-gruen" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">crunchbase.com/person/michael-gruen</a>
              <span className="hidden sm:inline opacity-30">•</span>
              <span>New York / Los Angeles / Palm Beach</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] mt-6 text-gray-400 font-sans">Blue text indicates hyperlinks to external verification and press coverage</p>
          </div>

          {/* Education */}
          <div className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-2 font-sans">Education</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg">Thomas R. Kline School of Law of Duquesne University</h3>
                <span className="text-sm font-sans">Pittsburgh, PA</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-sm italic">Juris Doctor (J.D.) Candidate</p>
                <span className="text-sm italic font-sans">Entering Fall 2026 — Expected 2029</span>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg">Touro College</h3>
                <span className="text-sm font-sans">New York, NY</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-sm italic">Bachelor of Science in Marketing, Summa Cum Laude</p>
                <span className="text-sm italic font-sans">May 2022</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-2 ml-4 text-gray-800">
                <li>GPA: 3.90/4.00</li>
              </ul>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-2 font-sans">Professional Experience</h2>
            
            {/* DominateX */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg"><a href="https://web.archive.org/web/20230619070234/https://www.benzinga.com/startups/23/04/31739711/maverick-entrepreneur-michael-gruen-sets-new-standard-for-consulting-firms-and-startup-incubators-wi" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">DominateX / Elysium Innovations</a></h3>
                <span className="text-sm font-sans">West Palm Beach, FL</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <p className="text-sm italic text-gray-700">Chief Strategy Officer</p>
                <span className="text-sm italic font-sans text-gray-500">January 2022 - March 2023</span>
              </div>
              <ul className="list-disc text-sm ml-4 space-y-2 pl-2 text-gray-800">
                <li>Direct strategic operations for AI-driven technology incubator in partnership with funds managing $500M+ private equity portfolio across fintech, healthtech, and e-commerce ventures</li>
                <li>Structure and negotiate complex technology licensing agreements, joint ventures, and M&A transactions, ensuring regulatory compliance and IP protection</li>
                <li>Counsel portfolio executives on corporate governance, deal structuring, and exit strategies impacting company valuations</li>
              </ul>
            </div>

            {/* Animal Capital */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg"><a href="https://www.businessinsider.com/tiktok-sway-boys-15-million-fund-to-invest-in-startups-2021-4" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Animal Capital</a></h3>
                <span className="text-sm font-sans">Los Angeles, CA</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <p className="text-sm italic text-gray-700"><a href="https://www.bloomberg.com/profile/person/22292687" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">General Partner</a></p>
                <span className="text-sm italic font-sans text-gray-500">March 2020 - April 2023</span>
              </div>
              <ul className="list-disc text-sm ml-4 space-y-2 pl-2 text-gray-800">
                <li>Managed $25M venture capital fund with high-profile LPs including TikTok CEO Kevin Mayer, Netflix founder Marc Randolph, Android founder Rich Miner, and Winklevoss Capital</li>
                <li>Conducted comprehensive due diligence on 75+ startups, analyzing corporate structures, intellectual property portfolios, regulatory compliance, and litigation risks</li>
                <li>Structured and negotiated investment terms using SAFEs, convertible notes, and preferred equity instruments with appropriate protective provisions</li>
                <li>Portfolio investments include Lolli, Whoop, The Routing Company, Whatnot, Gemini, and Super Coffee; achieved top-quartile returns</li>
              </ul>
            </div>

            {/* CrossCheck Studios */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg"><a href="https://deadline.com/2021/11/josh-richards-stxfilms-first-look-deal-halloween-party-1234867557/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">CrossCheck Studios</a></h3>
                <span className="text-sm font-sans">Los Angeles, CA</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <p className="text-sm italic text-gray-700">Co-founder & President</p>
                <span className="text-sm italic font-sans text-gray-500">January 2021 - March 2022</span>
              </div>
              <ul className="list-disc text-sm ml-4 space-y-2 pl-2 text-gray-800">
                <li>Co-founded production company <a href="https://www.hollywoodreporter.com/tv/tv-news/social-media-star-josh-richards-partners-with-mark-wahlbergs-unrealistic-ideas-to-form-crosscheck-studios-4136645/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">with Mark Wahlberg's Unrealistic Ideas</a>; negotiated first-look deals with Amazon Studios and STXfilms</li>
                <li>Structured multi-party agreements involving talent rights, production entities, and distribution partners, managing complex revenue participation models</li>
                <li>Established compliance protocols for union regulations (SAG-AFTRA, IATSE), insurance requirements, and international distribution rights</li>
                <li>Executive produced content distributed through NBCUniversal, Amazon Studios, and Facebook Watch reaching millions of viewers</li>
              </ul>
            </div>

            {/* TalentX Entertainment */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg"><a href="https://www.forbes.com/sites/tomward/2020/05/29/talentx-is-at-the-forefront-of-the-tiktok-movement/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">TalentX Entertainment</a></h3>
                <span className="text-sm font-sans">Los Angeles, CA</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <p className="text-sm italic text-gray-700">Co-founder & Vice President of Talent</p>
                <span className="text-sm italic font-sans text-gray-500">October 2019 - March 2021</span>
              </div>
              <ul className="list-disc text-sm ml-4 space-y-2 pl-2 text-gray-800">
                <li>Orchestrated successful <a href="https://www.tubefilter.com/2021/03/09/esports-firm-rektglobal-acquires-talentx-entertainment/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">acquisition by ReKT Global (now Infinite Reality)</a>; managed many legal aspects of transaction</li>
                <li>Raised $2.5M+ in seed funding from strategic investors; drafted and negotiated all investment documentation and shareholder agreements</li>
                <li>Developed standardized talent agreements ensuring FTC compliance, intellectual property assignment provisions, and binding arbitration clauses</li>
                <li>Signed and managed 150+ creators including Sway House and Hype House members representing 300M+ combined audience</li>
                <li>Negotiated 350+ commercial contracts with clients including Netflix, McDonald's, Amazon, and NBCUniversal; scaled to $15M+ annual revenue</li>
              </ul>
            </div>
          </div>

          {/* Selected Advisory & Investment Activities */}
          <div className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-2 font-sans">Selected Advisory & Investment Activities</h2>
            <ul className="list-disc text-sm ml-4 space-y-3 pl-2 text-gray-800">
              <li><strong><a href="https://www.forbes.com/sites/tomward/2021/09/15/josh-richards-is-bringing-back-the-wooly-mammoth/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Colossal Biosciences</a>:</strong> Seed investor in biotechnology company pioneering de-extinction and species preservation</li>
              <li><strong><a href="https://www.billboard.com/pro/josh-richards-invests-breakr-app-connecting-influencers/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Breakr</a>:</strong> Strategic advisor for music-influencer marketplace enabling viral TikTok campaigns</li>
              <li><strong>Deliverr:</strong> Advisor for logistics and fulfillment platform acquired by Shopify for $2.4B</li>
              <li><strong>Pearpop:</strong> Early investor/advisor in creator collaboration marketplace backed by a16z (Total funding: $34M)</li>
              <li><strong><a href="https://www.tubefilter.com/2021/08/23/josh-richards-bryce-hall-ani-energy-walmart/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Ani Energy</a>:</strong> Founding partner of energy drink brand scaled to Walmart's 4,700+ U.S. locations</li>
              <li><strong><a href="https://www.foxbusiness.com/technology/exclusive-stephen-moore-fed-crypto-central-bank" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">FRAX Finance</a>:</strong> Founding partner of first fractional-reserve stablecoin protocol reaching $846M market cap</li>
              <li><strong><a href="https://sportsagentblog.com/2021/05/01/josh-richards-griffin-johnson-and-business-partner-launch-crosscheck-sports/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">CrossCheck Sports</a>:</strong> Founding partner of Gen Z sports media outlet and NBA player representation agency</li>
            </ul>
          </div>

          {/* Honors & Recognition */}
          <div className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-2 font-sans">Honors & Recognition</h2>
            <ul className="list-disc text-sm ml-4 space-y-3 pl-2 text-gray-800">
              <li><strong><a href="https://www.forbes.com/30-under-30/2022/social-media/?profile=talent-x" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Forbes 30 Under 30</a></strong> - Social Media Category (2022)</li>
              <li><strong><a href="https://www.businessinsider.com/the-top-29-gen-z-vcs-changing-venture-capital-2021-2" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Business Insider: Top 29 Gen-Z VCs</a></strong> Changing Venture Capital</li>
              <li><strong><a href="https://www.businessinsider.com/top-power-players-using-tiktok-to-transform-the-music-industry-2020-8" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Business Insider: Top 24 Power Players</a></strong> Transforming the Music Industry via TikTok</li>
              <li><strong><a href="https://www.businessinsider.com/top-tiktok-talent-managers-agents-for-creators-power-list-2021-4" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Business Insider: Top 19 Talent Representatives</a></strong> Power List</li>
              <li><strong>Published Contributor:</strong> <a href="https://www.forbes.com/councils/forbesbusinesscouncil/people/michaelgruen/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Forbes Business Council</a>, <a href="https://web.archive.org/web/20230328115559/https://www.benzinga.com/author/michael-gruen" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Benzinga</a>, and <a href="https://www.rollingstone.com/author/michael-gruen/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">Rolling Stone</a></li>
            </ul>
          </div>

          {/* Community Leadership & Advocacy */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-2 font-sans">Community Leadership & Advocacy</h2>
            <ul className="list-disc text-sm ml-4 space-y-3 pl-2 text-gray-800">
              <li><strong>Creator Rights Initiative:</strong> Provided pro bono negotiation assistance for emerging content creators on IP protection and deal structures</li>
              <li><strong>Youth Civic Leadership Conference (Founder & Organizer, 2019):</strong> Co-organized political summit featuring Peter Thiel, Mark Cuban, Senator Rand Paul, Senator Joni Ernst, and Senator Orrin Hatch; 1,000+ attendees</li>
              <li><strong>Chai Lifeline:</strong> Organized fundraising campaigns generating $500,000+ for pediatric cancer support services</li>
              <li><strong>Pro Bono Public Speaker:</strong> Delivered talks on creator rights, digital media, and entertainment law at various forums, such as the <a href="https://blogs.chapman.edu/law/2017/04/06/l-a-dodgers-president-ceo-to-speak-at-chapmans-entertainment-sports-law-symposium/" className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">2017 Entertainment & Sports Law Symposium, Chapman Fowler School of Law</a></li>
            </ul>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
}
