---
title: 'Mini RC tank upgrade'
description: 'Mini RC tank upgrade'
pubDate: 'May 15 2025'
heroImage: '../../assets/blog-18/instructable-thumb.jpg'
tags: []
---

<div class="gallery" contenteditable="false" data-is-empty="false" data-translation="Add images" data-columns="3">
<figure class="gallery__item"><a href="/assets/blog-18/gallery/intro-1.jpg" data-size="3225x2416"><img src="/assets/blog-18/gallery/intro-1-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/supply-board-1.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/supply-board-1-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
</div>
<p>I bought this little toy tank a couple of years ago. It was fun to play with for a bit. But after some time, it felt like it could do more. It didn't have proportional speed control, and there were no cool shooting lights.<br>I thought about upgrading it, but I was busy with other things. Recently, I designed a control board called <strong><a href="https://oshwlab.com/shreeramlive/mikro-rc" target="_blank" rel="noopener noreferrer">Mikro</a></strong>. This tank project seemed like a good way to try out the features of this board. So, let's upgrade this toy tank!</p>
<p><strong>List of components:</strong></p>
<ul>
<li>Mini RC Tank</li>
<li>Wireless Control Board (Mikro)</li>
<li>Micro LEDs with Pre-soldered Wires</li>
<li>Tactile Push Button - On/Off Switch</li>
<li>Mini Lithium-ion (Li-ion) Battery Cell</li>
</ul>
<p>For the electronics to control the tank, you could use any ESP32 based board, it can be connected to motor drivers and battery charging circuits to control RC toys. For this project, I chose to use the Mikro board because it is small enough to fit inside the tank's body.</p>
<p>About the power, the original toy tank used a 2.4V NiMH battery. However, the Mikro board is designed to work with lithium batteries only. So I used a lithium cell which was lying around.</p>
<p>Mikro is an Open Source Project: <a href="https://oshwlab.com/shreeramlive/mikro-rc">View the design on <strong>OSHWLAB</strong></a></p>
<h1 class="align-center">1. Disassembly</h1>
<div class="gallery" contenteditable="false" data-is-empty="false" data-translation="Add images" data-columns="2">
<figure class="gallery__item"><a href="/assets/blog-18/gallery/disassembly-4.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/disassembly-4-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/disassembly-1.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/disassembly-1-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/disassembly-2.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/disassembly-2-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/disassembly-3.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/disassembly-3-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
</div>
<p>Disassembling the tank was an easy job. There were only 4 screws securing the body, they were easily accessible after removing the rubber tracks.</p>
<p>After that the only thing left to do was soldering. 4 motor wires, 2 led wires and the battery.</p>
<p>The Battery included is a 2.4V 80mAh NiMh battery. We will replace it with a higher capacity 3.7V 120mAh Li-ion cell.</p>
<h1 class="align-center">2. Rewiring</h1>
<div class="gallery" contenteditable="false" data-is-empty="false" data-translation="Add images" data-columns="2">
<figure class="gallery__item"><a href="/assets/blog-18/gallery/rewiring-led-1.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/rewiring-led-1-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/rewiring-led-2.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/rewiring-led-2-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/rewiring-button-1.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/rewiring-button-1-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/rewiring-button-2.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/rewiring-button-2-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
</div>
<p>First lets add some headlights, these SMD leds come presoldered with wires. Two holes were made on the tank body and the wires were routed to the inside.</p>
<p>The factory board had an slide switch for power. We will use a tactile switch for power control. The switch is accessible from the bottom of the tank.</p>
<p>Rest of the connections, the motors and the turret led connections are the similar to the factory board.</p>
<p class="align-center"><span style="color: var(--headings-color); font-family: var(--font-base); font-size: 1.80203em; font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing); text-align: center;">3. Reassembly</span></p>
<div class="gallery" contenteditable="false" data-is-empty="false" data-translation="Add images" data-columns="2">
<figure class="gallery__item"><a href="/assets/blog-18/gallery/rewiring-button-3-2.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/rewiring-button-3-2-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/reassembly-button-1.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/reassembly-button-1-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
<figure class="gallery__item"><a href="/assets/blog-18/gallery/tank-with-leds-front-annotated.jpg" data-size="2000x1500"><img src="/assets/blog-18/gallery/tank-with-leds-front-annotated-thumbnail.jpg" alt="" width="768" height="576"></a></figure>
</div>
<p>Finally we will cram everything and screw it together. It is more congested than the factory setup since we are using a bigger battery.</p>
<p>The magnetic connector is accessible on the front side of the tank. Also the antenna is routed inside the turret and points outside.</p>
<p>After some coding work, the tank is finally working as expected. So the project is a success. The features of this board were tested and we also have an upgraded tank.</p>
<p>This project is part of the Mikro series.</p>
