---
title: 'Jump Start Your PCB Adventure'
description: 'Jump Start Your PCB Adventure'
pubDate: 'Mar 12 2025'
heroImage: '../../assets/blog-2/Article-3-thumb.jpg'
tags: ["electronics", "pcb"]
---

<div class="detail_info-top__r_Z1L">
<h4 class="detail_intro__Hjqqa">Introduction: Getting started with an electronics project? You need to look into jlc's ecosystem</h4>
</div>
<p style="text-align: justify;"><span style="font-size: 14pt;">Today, many hobbyists are learning PCB design to create their own electronic boards. <strong>PCBs are more affordable than ever,</strong> which motivates many makers to learn PCB design. This wouldn't have been possible even 20 years ago.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">My PCB design adventure began in 2019 with an <a href="Introduction: Getting started with an electronics project? You need to look into jlc's ecosystem" target="_blank" rel="noopener noreferrer">online tutorial</a>. I ordered the PCBs from JLCPCB and the parts from LCSC. JLCPCB had just launched their assembly service, but I still got the parts separately just for the adventure of soldering those smd parts. It was a great experience getting the design become a reality.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">If it was the 90s or even the early 2000s, I wouldn't have bothered with PCB design. It was way too expensive, and manufacturers weren't interested in small-time makers like us. It's the same reason we don't really do IC design now - the cost to get a wafer made is crazy high (and that’s not even counting slicing it up and packaging the chips), Selling a kidney might not be enough.<br></span><span style="font-size: 14pt;">Hopefully, things will change when some fab starts doing prototype orders for hobbyists like us. IC design software has come a long way, so maybe by 2030 we can get our own custom ICs - that would be awesome.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">Back to the present: If you're a hobbyist looking to create your own PCBs, it's now possible to design and get them made in under a month. You'll need some basic electronics knowledge and familiarity with components like transistors, resistors, and capacitors. Working with the ICs is no problem - we just refer to the datasheets. Fun fact: I designed my first PCB without even knowing how crystals worked! The point is, you only need to know enough to get started; nobody's an expert right away.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">Before diving in, lets familiarize these terms</span></p>
<ul style="text-align: justify;">
<li><span style="font-size: 14pt;"><strong>EDA</strong> - Electronic Design Automation (PCB design software)</span></li>
<li><span style="font-size: 14pt;"><strong>DRC</strong> - Design Rule Check</span></li>
<li><span style="font-size: 14pt;"><strong>DFM</strong> - Design For Manufacturing</span></li>
<li><span style="font-size: 14pt;"><strong>PCBA</strong> - Printed Circuit Board Assembly</span></li>
<li><span style="font-size: 14pt;"><strong>THT</strong> - Through Hole Technology</span></li>
<li><span style="font-size: 14pt;"><strong>SMT</strong> - Surface Mount Technology</span></li>
<li><span style="font-size: 14pt;"><strong>SMD</strong> - Surfact Mount Device</span></li>
</ul>
<p style="text-align: justify;"><span style="font-size: 14pt;">From PCB design to fabrication - here's how you can make it <strong>cost-effective</strong> and <strong>warp-speed</strong> your development time.</span></p>
<h2 style="text-align: justify;"><span style="font-size: 18pt;">1) Free Software First</span></h2>
<p><span style="font-size: 18pt;"><img src="https://image.easyeda.com/oshwhub/pullImage/1f80da5baebe4f48abc5f4890ec6b309.jpg" alt="" width="1200" height="800"></span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">When starting with PCB design, free software is the way to go. <strong>EasyEDA</strong> (cloud-based) and <strong>KiCad</strong> (open source) are the best options. For beginners, I recommend EasyEDA due to its user-friendly interface. Once you get the hang of PCB design, you can switch to KiCad or any other software - the core skills will transfer.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">I personally use EasyEDA for my open-source projects because its fully integrated with JLCPCB &amp; LCSC, which is where our members usually get our boards. Since the files end up at JLCPCB anyway, I'm not worried about using their cloud storage.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">That said, You can also use Kicad - It's a <strong>fantastic open-source option</strong> that's constantly getting better. And if you like working with JLCPCB, there are some great open-source tools like <a href="https://github.com/uPesy/easyeda2kicad.py">easyeda2kicad</a> and <a href="https://github.com/Bouni/kicad-jlcpcb-tools">kicad-jlcpcb-tools</a> to make things easier.</span></p>
<h2 style="text-align: justify;"><span style="font-size: 18pt;">2) Manufacturer Capabilities</span></h2>
<p><span style="font-size: 18pt;"><img src="https://image.easyeda.com/oshwhub/pullImage/a3a99ddc1afd4585bd73d639e24234e7.jpg" alt="" width="1200" height="800"></span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">When designing a PCB, follow your manufacturer's capacilities (reference: <a href="https://jlcpcb.com/capabilities/pcb-capabilities">JLCPCB</a>, <a href="https://www.pcbway.com/capabilities.html">PCBWay</a>, <a href="https://www.nextpcb.com/pcb-capabilities">NextPCB</a>). <strong>Set your software's DRC to match these rules</strong>; it will then flag any violations.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">These specifications generally result in faster production and lower costs:</span></p>
<ul style="text-align: justify;">
<li><span style="font-size: 14pt;">FR4 board</span></li>
<li><span style="font-size: 14pt;">2,4 layer</span></li>
<li><span style="font-size: 14pt;">1.2, 1.6mm board thickness</span></li>
<li><span style="font-size: 14pt;">Vias 0.3mm or larger, smaller vias increase cost.</span></li>
<li><span style="font-size: 14pt;">Green color soldermask</span></li>
</ul>
<h2 style="text-align: justify;"><span style="font-size: 18pt;">3) Start with Hand-Solderable parts</span></h2>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/f46fcf2ce6554036b999d2b7b882e84b.jpg" alt="" width="1200" height="400"></p>
<p><span style="font-size: 12pt;">image source: <a href="https://core-emt.com/smd-size-chart">https://core-emt.com/smd-size-chart</a></span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">When starting with SMD components, choose larger, hand-solderable sizes for <strong>easier rework</strong>. Avoid packages smaller than <strong>0603</strong> or those with hidden leads like <strong>QFNs</strong> and <strong>BGAs</strong>, as these are difficult to rework manually. Once you gain experience, you can move to smaller packages. While smaller components are often slightly cheaper, the difference is negligible for small quantities.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">In general, <strong>prefer SMD components over through-hole</strong>. They are typically less expensive, especially for PCB assembly service.</span></p>
<h2 style="text-align: justify;"><span style="font-size: 18pt;">4) The Cost-Benefit of PCB Assembly</span></h2>
<p style="text-align: justify;"><img src="https://image.easyeda.com/oshwhub/pullImage/884f4a3d9bd14a4c93f25a5eb235f453.png"></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">Many manufacturers now offer <strong>affordable assembly</strong> (PCBA). For example, JLCPCB's assembly cost is only around $8-$25 for 5-10 boards.</span></p>
<ul>
<li style="text-align: left;"><span style="font-size: 14pt;">Depending on the complexity of your design, this can save you around 20-60 minutes of soldering time per board. </span><span style="font-size: 14pt;">Unless you want to manually reflow them or practice hand-soldering SMDs, just get your boards assembled.</span></li>
<li style="text-align: left;"><span style="font-size: 14pt;"><strong>Double-sided assembly</strong> is considerably <strong>more expensive</strong>, usually costing 2-4 times more; as it adds an <strong>extra production step</strong> and requires a <strong>custom assembly fixture</strong>. For most designs, you should be able to pack the parts onto a single side.</span></li>
<li style="text-align: left;"><span style="font-size: 14pt;">Other than the time-cost benefit, Sometimes getting <strong>PCBA can be cheaper</strong> than getting the bare boards and components separately. Just look up why some governments have less import tax for Assembled PCB compared to bare PCB - use that to your advantage.</span></li>
</ul>
<h2 style="text-align: center;"><span style="font-size: 18pt;">- JLCPCB's ecosystem -</span></h2>
<p style="text-align: justify;"><span style="font-size: 14pt;">The previous tips were general to all PCB manufacturers. Now we will see how to optimize costs even more, specific to JLCPCB.</span></p>
<ul style="text-align: justify;">
<li><span style="font-size: 14pt;">Stick with <strong>"Economic" PCBA </strong>for prototypes. The "Standard" option is only needed for <strong>fine-pitch parts</strong> and special components.</span></li>
<li><span style="font-size: 14pt;">Use components from the <a href="https://jlcpcb.com/parts"><strong>JLCPCB parts</strong></a> library, they can be assembled using their PCBA service</span></li>
<li><span style="font-size: 14pt;">Pick <a href="https://jlcpcb.com/parts/basic_parts"><strong>basic/preferred parts</strong></a> for passives since Extended components are charged $3 extra.</span></li>
</ul>
<p style="text-align: justify;"><span style="font-size: 14pt;">As of March 2025, JLCPCB has great deals for 4 and 6 layer prototypes also. That's a great excuse to try it out.</span></p>
<h3 style="text-align: justify;"><span style="font-size: 14pt;">Funding Your Open-Source Hardware:</span></h3>
<p style="text-align: justify;"><span style="font-size: 14pt;">The OSHWLab Stars initiative offers valuable prototyping support for open-source hardware projects. You can find more details in <strong><a href="https://oshwlab.com/article/open-source-projects">this article</a></strong>.</span></p>
<h3 style="text-align: justify;"><span style="font-size: 14pt;">Ultimate Advantage:</span></h3>
<p style="text-align: justify;"><span style="font-size: 14pt;">JLCPCB's access to components from its sister company - LCSC, gives them a significant advantage over competitors, particularly for assembled PCBs. Nowadays bare PCB production is fast across most manufacturers. But <strong>Component sourcing time</strong> is the bottleneck, it can take an extra 1-3 weeks.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">JLCPCB has zero Component sourcing time if you use parts from their library. The whole production (including assembly) typically takes less than a week for 2-6 layer boards.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">This highly integrated supply chain allows them to provide the <strong>best lead time</strong> at the most <strong>affordable rates</strong>. This allowed them to capitalize on the <strong>price elasticity of demand</strong> by triggerring substantial demand from hobbyists and small businesses. Like I said before, I wouldnt have gotten into PCB design if it werent for these companies.</span></p>
<h2 style="text-align: center;"><span style="font-size: 18pt;"><strong>- Taking Your Project to Market -</strong></span></h2>
<p style="text-align: justify;"><span style="font-size: 14pt;">Once you've completed prototyping and built a following, you may find there's demand for your product. What started as a <strong>hobby project</strong> could become a <strong>marketable product</strong>. You may not have expected this, but some people will want to buy <strong>your product, from you</strong>.</span></p>
<p style="text-align: justify;"><span style="font-size: 14pt;">Whether you plan to sell bare <strong>PCBs</strong>, <strong>DIY kits</strong>, or fully <strong>Assembled devices</strong>, you'll need to consider additional services like <strong>kitting</strong> (packaging components together) and <strong>subassembly</strong> (assembling parts of the product). Also learn about DFM. This journey can be a wild ride, you'll get valuable learning experiences and the potential for a side hustle.</span></p>
<h3 style="text-align: left;"><span style="font-size: 14pt;">Important considerations:</span></h3>
<ul>
<li style="text-align: left;"><span style="font-size: 14pt;">I use JLCPCB, so this article is biased in their favor. The focus here is on fast and affordable PCB prototyping. If you have a better alternative, let me know.</span></li>
<li style="text-align: left;"><span style="font-size: 14pt;">The sales reps from various PCB companies say that their QC is better so they can't match with jlc's prices (for low volume orders), is it true? We will find out.</span></li>
<li style="text-align: left;"><span style="font-size: 14pt;">Based on the assumption that most hobbyists would be sharing their projects with the community, I have recommended EasyEDA. If you're working on some secret stuff, then I don't have to say the obvious ;)</span></li>
</ul>
<p><em>Article originally published on <a href="https://oshwlab.com/article/easyeda-jlcpcb" target="_blank" rel="noopener noreferrer">oshwlab.com</a></em></p>
