---
title: 'Ordering Boards for OSHWLab Projects'
description: 'Ordering Boards for OSHWLab Projects'
pubDate: 'Feb 18 2025'
heroImage: '../../assets/blog-4/Article2-oshwlab-direct-order.jpg'
tags: ["electronics", "pcb"]
---

<div class="detail_info-top__r_Z1L">
<h4 class="detail_intro__Hjqqa">Introduction: Are you new to this hobby, do you want to replicate a community project? Here's the easy way</h4>
<p>This will guide you through all the steps to order a Board for a project shared on OSHWLab.</p>
<p>To get a PCB made, you'll usually need these files:</p>
<ul>
<li><strong>Gerber</strong> - this is the blueprint of the PCB</li>
<li><strong>BOM</strong> (Bill of materials) - A shopping list of all the parts you need for your board</li>
<li><strong>CPL</strong> (Component placement list) - aka "pick and place" file</li>
</ul>
<p>The BOM and CPL are required if you want the manufacturer to assemble the board. If you just need the bare PCB, the Gerber files are enough.</p>
<div id="73dc89ccc33caea7">
<div>
<div>
<div>
<div>
<div>
<div id="model-response-message-contentr_73dc89ccc33caea7" dir="ltr">
<p>All the projects on OSHWLab are designed using EasyEDA, so we'll look at a simpler approach today.</p>
<div><span style="font-family: var(--font-base); font-size: 1.60181em; font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing);">Step 1:</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<p>Open the project in Easyeda using the open "Drawing Button"</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/5385f4301f9344f593d52d03fcae1c6e.png" width="500" height="369"></p>
<h2>Step 2:</h2>
<p>Open the project. Each design will have a schematic file and a PCB file.</p>
<p>If there are multiple PCB versions, choose the one recommended by the designer.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/f42fe3f6f03d4d08b4d8769859a53ac6.png" width="500" height="318"></p>
<h2>Step 3:</h2>
<p>After the PCB is opened click the "Order PCB" button</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/48f3665541b84068b778a509e764d475.png" width="500" height="295"></p>
<p>In Standard version, it will be under Fabrication</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/912601dd376749a7b0f87cd0d1972c90.png" width="500" height="295"></p>
<h2>Step 4:</h2>
<p>Confirm the generated data</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/79f8c0287b884845867cef2514493ab9.png" width="500" height="285"></p>
<p>The Standard version will ask for manual confirmation to check for DRC. The project designer would have already made sure it does not have any errors.<br>But it doesnt hurt to double-check. If no errors pop up, you can proceed.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/6279b856960f4b44b93a8d6069d76e6d.png" width="502" height="138"></p>
<h2>Step 5:</h2>
<p>All the necessary files will be automatically uploaded to the JLCPCB website, and the quote page will open.</p>
<p>Here are the specifications to adjust:</p>
<ul>
<li>Base material (usually FR4)</li>
<li>PCB thickness</li>
<li>PCB color - your choice, green is cheapest</li>
<li>Surface finish - Lead-free recommended for health</li>
</ul>
<p>You can leave the other specs unchanged</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/2301b2a7fe7e4920b9797bd71598664d.png" width="500" height="327"></p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/0443589ff7ad4534a9d214232f16043d.png" width="500" height="219"></p>
<p>Leave the high-end specs at their default values. You can choose to remove the order number if you prefer.</p>
<h2>Step 6:</h2>
<p>Enable PCBA is component assembly if required (Highly recommended).<br>You can save a lot of time using this option.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/8c5170ab57b14533a9294e2294d8c622.png" width="500" height="314"></p>
<p>You can also choose to have only 2/5 boards assembled.</p>
<p>The PCBA advanced options can be left at their default settings.</p>
<p>Click "NEXT" and proceed, again.</p>
<h2>Step 7:</h2>
<p>Normally, you'd have to upload the BOM and CPL files at this step.  However, since we're ordering directly from EasyEDA, these files are also uploaded automatically.</p>
<p>You might see some errors, but generally, you can ignore them if the components are labeled <strong>DNP</strong> (Do Not Populate) or <strong>IGNORE, </strong>or as directed by project designer. This just means the component isn't included in the BOM and won't be placed during assembly.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/5628fb2103584b448608d0408ee25d4c.png" width="500" height="171"></p>
<h2>Step 8:</h2>
<p>This will show an overview of the components in the BOM.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/76b85cd8f1874b0eb428647061de8341.png" width="501" height="179"></p>
<p>If all components are selected, you can proceed.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/8408a5d16faa4ecf95f425f336e83a18.png" width="502" height="149"></p>
<p>Here's the tricky part: if a component is out of stock or there's an inventory shortage, you'll have to choose a suitable substitute. This is usually easy for passive components like diodes, resistors, capacitors, and LEDs. However, if an IC is not available, you'll need to find an alternative that's pin-compatible.</p>
<h2>Step 9:</h2>
<p>Next, you'll get an overview of the component placements. I haven't had any issues with EasyEDA and JLCPCB so far, so it should be good.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/49f71e2d5de84574a6d1edc5c6590e38.png" width="501" height="309"></p>
<p>But if anything looks out of place, double-check the design and adjust the placement as needed.</p>
<h2>Step 10:</h2>
<p>Here you'll see a full price breakdown for your boards.</p>
<p>For bureaucracy reasons, you'll need to select a product class.  <strong>Choose "DIY"</strong> unless you're absolutely sure it's something else.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/0567593ddc184be38bfddfa26a7a32af.png" width="500" height="291"></p>
<p>Finally "Add to cart"</p>
<p>And that's how you order the Assembled boards to replicate a board shared in OSHWLab.</p>
<h3>Notes:</h3>
<p>I have made a proposal for a real One-click option. Share your interest in the forum - <a href="https://oshwlab.com/forum/post/8b4d6880e8524452881d5df257d333c4">VIEW HERE</a></p>
<ul>
<li>The projects on OSHWLab are shared by community members like you and me. so the risk is yours to take.</li>
<li>The One-click order option is only applicable if you're using JLCPCB for fabrication.</li>
<li>I recommend this approach for hobbyists with some electronics experience. It's definitely not for absolute beginners.</li>
</ul>
<p><em>Article originally published on <a href="https://oshwlab.com/article/ordering-boards-for-oshwlab-projects" target="_blank" rel="noopener noreferrer">oshwlab.com</a></em></p>
</div>
