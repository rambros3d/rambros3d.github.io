---
title: 'Generate PCB Coils in Easyeda pro'
description: 'Generate PCB Coils in Easyeda pro'
pubDate: 'Apr 29 2025'
heroImage: '../../assets/blog-16/PCB-Coils-easyeda.png'
tags: ["electronics", "pcb"]
---

<div class="gallery" contenteditable="false" data-is-empty="false" data-translation="Add images" data-columns="2">
<figure class="gallery__item"><a href="/assets/blog-16/gallery/CoilPad_11_400x.gif" data-size="350x350"><img src="/assets/blog-16/gallery/CoilPad_11_400x.gif" alt=""></a></figure>
<figure class="gallery__item"><a href="/assets/blog-16/gallery/Nested_Sequence_10_2_400x.gif" data-size="350x350"><img src="/assets/blog-16/gallery/Nested_Sequence_10_2_400x.gif" alt=""></a></figure>
</div>
<p><span style="font-size: 12pt;">Source: <a href="https://microbots.io/">https://microbots.io/</a> - CoilCell and CoilPad designed by Carl Bugeja</span></p>
<p>You might have seen these type of projects that use PCB coils to make solenoids, motors, and other actuators. If you’ve tried to make one yourself, you may have noticed that EasyEDA doesn’t have a built-in feature to create coils. Fortunately, missing features can often be added using plugins.</p>
<p>This article will guide you through the process of creating coils using the <strong>Coil Generator</strong> plugin. Here's some coils of different diameter, line width and line spacing generatedusing this plugin.</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/0260556a0c7b44149d7656005ba1859f.png" alt="" width="600" height="775"></p>
<p>This plugin creates coils by drawing many small line segments, as shown in the figure below.</p>
<h1><img src="https://image.easyeda.com/oshwhub/pullImage/c3c2b4b1616a4259a306fef42eb68f2f.png" alt="" width="500" height="375"></h1>
<p> </p>
<p>PCB Coil Generator: <a href="#INTERNAL_LINK#/file/media/files/pcb-coil-generator_v0.0.7.eext" target="_blank" rel="noopener noreferrer">Download eext file</a></p>
<p>Source code: <a href="https://github.com/medisoft/pcb-coil-generator">https://github.com/medisoft/pcb-coil-generator</a></p>
<h3>Credits:</h3>
<ul>
<li>Mario Medina - <a href="https://oshwlab.com/osoverflow/" target="_blank" rel="noopener">oshwlab</a> | <a href="https://github.com/medisoft/" target="_blank" rel="noopener">github</a></li>
<li>Andreasbernhofer - <a href="https://oshwlab.com/andreasbernhofer" target="_blank" rel="noopener">oshwlab</a></li>
</ul>
<h1>Plugin Installation:</h1>
<p>You can skip this section if you know how to install the extension.</p>
<p>1) Settings -&gt; Extensions -&gt; Extensions Manager</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/98e4eb54aeff4d2a99f91aa89ba9aae0.png" alt="" width="600" height="375"></p>
<p>2) Import extensions</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/6dc71355477343108355aab67677b42d.png" alt="" width="600" height="375"></p>
<p>3) Choose files -&gt; Select eext file</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/b3ffcb95cb81473bb0bdcb955b42d6d5.png" alt="" width="600" height="375"></p>
<p>4) Plugin Successfully added</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/78e8c03af9e34c8cb56a5b2a466d63a4.png" alt="" width="600" height="375"></p>
<p> </p>
<h1>How to generate Coils:</h1>
<p>Open Extension "PCB Coil Generator"</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/7b2047d1e7484acc9a4fac88713b62c9.png" alt="" width="600" height="375"></p>
<p>Click Generate</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/0a62003529794e9eb1e67c41105eb98d.png" alt="" width="600" height="375"></p>
<p>Adjust parameters according to your requirements</p>
<p><img src="https://image.easyeda.com/oshwhub/pullImage/62cc2fd215e94c2b8c1d9aed6cd4edd4.png" alt="" width="600" height="483"></p>
<p>All the units are in mils ( 1 Inch = 1000 mils)</p>
<p>After adjusting the parameters, click "Generate coil".</p>
<p><strong>Note:</strong></p>
<ul>
<li>There might be a bug where the line width might be 1/10 of what you set. If you face this error, adjust the width manually after generating the coil.</li>
</ul>
<h3>Disclaimer:</h3>
<ul>
<li>Currently, this plugin can only generate circular coils. I also tested another PCB coil generator that supports both English and another language, and it can generate square coils as well - but I couldn’t get it to work. I’ve included it in the attachments if you want to try it yourself.</li>
<li>I haven’t designed any projects using this coil generator yet. I explored PCB coil generation purely out of curiosity. If you have any project suggestions, feel free to share them - I’d be happy to make a project with PCB coils.</li>
</ul>
<p><em>Originally published on <a href="https://oshwlab.com/article/pcb-coil-generator" target="_blank" rel="noopener noreferrer">oshwlab.com</a></em></p>
