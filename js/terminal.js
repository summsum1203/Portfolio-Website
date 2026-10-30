/**
 * SASSY.CODE TERMINAL - Summer Davis Interactive Easter Egg CLI
 * Shows off real JavaScript prowess, technical creativity, and sassy attitude.
 */

(function () {
  const terminalOverlay = document.getElementById('terminal-overlay');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const terminalClose = document.getElementById('terminal-close');
  const terminalTrigger = document.getElementById('btn-terminal-trigger');
  const terminalHeroTrigger = document.getElementById('btn-hero-terminal');

  if (!terminalOverlay || !terminalInput) return;

  const sassyQuotes = [
    "My code is so clean, even your senior architect's linter wants to thank me.",
    "Why settle for a plain cookie-cutter website when you can have SASSy, smart, and accessible?",
    "18 years of customer de-escalation means production bugs don't scare me—I negotiate with them.",
    "Accessibility isn't an afterthought in my stack. If everyone can't use it, it's not done.",
    "Semantic HTML + modern SCSS + responsive JavaScript = pure web alchemy.",
    "I make CSS Grid and Flexbox behave like well-trained puppies (ask Shysti Mae)."
  ];

  const commands = {
    help: () => `
<p class="highlight">=== AVAILABLE SASSY COMMANDS ===</p>
<p><strong>bio</strong>         - Summer's story & non-traditional superpower</p>
<p><strong>education</strong>   - Academic credentials (APSU 4.0, APUS 3.41 & AIU honors)</p>
<p><strong>projects</strong>    - Featured production apps & case studies</p>
<p><strong>skills</strong>      - Core tech stack & design capabilities</p>
<p><strong>attitude</strong>    - Dispense a fresh dose of SASSy tech wisdom</p>
<p><strong>shysti</strong>      - Meet Shysti Mae, Chief Happiness Officer 🐾</p>
<p><strong>presentation</strong> - View Summer's Canva Portfolio Slide Deck</p>
<p><strong>resume</strong>      - Download Summer's ATS-friendly resume</p>
<p><strong>contact</strong>     - Connect directly via email or LinkedIn</p>
<p><strong>clear</strong>       - Clear terminal screen</p>
<p><strong>exit</strong>        - Close the SASSy terminal</p>
<p><strong>sudo hire-summer</strong> - ✨ The hiring manager shortcut</p>
`,

    bio: () => `
<p class="highlight">=== WHO IS SUMMER BETHANY DAVIS? ===</p>
<p>Summer is a Frontend Web Developer & UX Designer based in Newport, TN.</p>
<p>Her superpower? An 18-year masterclass in human empathy, conflict de-escalation, and retail customer leadership—channelled into high-converting, WCAG 2.1 AA accessible web applications.</p>
<p>She holds a 3.8 GPA in Business Administration from AIU, completed technical coursework at APUS with a 3.4061 GPA, and is currently attending Austin Peay State University with a 4.0 GPA pursuing her Bachelor of Science in Computer Information Technology.</p>
<p class="prompt-line">Verdict: Passionate, unstoppable, detail-obsessed, and 100% SASSy.</p>
`,

    education: () => `
<p class="highlight">=== ACADEMIC JOURNEY & CREDENTIALS ===</p>
<p>🎓 <strong>Austin Peay State University (APSU)</strong> (March 2026 – Present)</p>
<p>• Status: Currently Attending / In Progress (Pursuing B.S. in Computer Information Technology)</p>
<p>• Current GPA: <strong>4.0</strong></p>
<br>
<p>🎓 <strong>American Public University System (APUS)</strong> (Transferred March 2026)</p>
<p>• Studies: Undergraduate Computer Information Technology (Web & Data)</p>
<p>• GPA: <strong>3.4061</strong> | Transferred credits to Austin Peay State University (No Degree Completion)</p>
<p>• Relevant Coursework: Web Dev Fundamentals, Intermediate Web Dev, JavaScript Programming, Python Fundamentals (ENTD220), CSCI1010/1011, SQL Database Design, IT Project Management.</p>
<br>
<p>🎓 <strong>American InterContinental University (AIU)</strong> (2022 – 2023)</p>
<p>• Program: Business Administration | GPA: <strong>3.8 (Dean's List caliber)</strong></p>
<p>• Transferred credits to American Public University System (No Degree Completion)</p>
<p>• Focus: Conversion psychology, consumer behavior, strategic marketing, organizational communications.</p>
<br>
<p>📜 <strong>Certifications & Badges:</strong></p>
<p>• Responsive Web Design, WCAG 2.1 AA Accessibility, Git/GitHub Version Control.</p>
`,

    projects: () => `
<p class="highlight">=== FEATURED PROJECTS & CASE STUDIES ===</p>
<p>1. <strong>Unleashing Truth</strong> - Responsive advocacy web platform (HTML5/CSS3/JS, WCAG compliant).</p>
<p>2. <strong>Paw’tique Boutique</strong> - E-commerce boutique brand experience for pet lovers.</p>
<p>3. <strong>SASSy Pomodoro Studio</strong> - High-focus productivity app with custom intervals & sound alerts.</p>
<p>4. <strong>Health Communications Hub</strong> - Accessible health infographic & layout portal.</p>
<p>5. <strong>SASSy UI Component Lab</strong> - Reusable changelog, datepicker, custom dropdowns.</p>
<p>6. <strong>Python Visual CLI Tools</strong> - Academic CLI utilities and markdown processor.</p>
<p class="prompt-line">Type 'resume' or visit the #projects section on the page for live previews!</p>
`,

    skills: () => `
<p class="highlight">=== TECHNICAL STACK & SUPERPOWERS ===</p>
<p>💻 <strong>Frontend:</strong> HTML5 (Semantic), CSS3/SASS/SCSS, JavaScript (ES6+), TypeScript, React, REST APIs</p>
<p>🎨 <strong>UI/UX:</strong> Figma wireframing & prototyping, Design Systems, Typography, Responsive Layouts</p>
<p>♿ <strong>Accessibility:</strong> WCAG 2.1 AA, Semantic Landmarks, ARIA roles, Screen Reader Testing</p>
<p>🛠️ <strong>Tools & DevOps:</strong> Git, GitHub, Netlify, VS Code, Antigravity IDE, Python 3</p>
<p>⚡ <strong>Soft Skills:</strong> Empathetic Leadership, De-escalation, Agile Teamwork, Relentless Curiosity</p>
`,

    attitude: () => {
      const quote = sassyQuotes[Math.floor(Math.random() * sassyQuotes.length)];
      return `<p class="success">💬 SASSy Wisdom: "${quote}"</p>`;
    },

    shysti: () => `
<p class="highlight">🐾 MEET SHYSTI MAE — CHIEF HAPPINESS OFFICER</p>
<pre style="color: #ffaa40; font-size: 0.75rem; line-height: 1.2;">
  / \\__
 (    @\\___
 /         O
/   (_____/
/_____/   U
</pre>
<p>Shysti Mae is Summer's beloved canine muse, pet photo contest star, and chief bug-detector. Whenever code gets tricky, Shysti reminds Summer to take a walk, breathe, and come back with fresh eyes.</p>
`,

    presentation: () => {
      const link = document.createElement('a');
      link.href = 'assets/docs/Summer_Davis_Portfolio_Presentation.pdf';
      link.target = '_blank';
      link.click();
      return `<p class="success">📊 Summer_Davis_Portfolio_Presentation.pdf opened in a new tab!</p>`;
    },

    resume: () => {
      const link = document.createElement('a');
      link.href = 'assets/docs/Summer_Davis_Resume.pdf';
      link.download = 'Summer_Davis_Resume.pdf';
      link.target = '_blank';
      link.click();
      return `<p class="success">📄 Summer_Davis_Resume.pdf opened / downloaded successfully!</p>`;
    },

    contact: () => `
<p class="highlight">=== GET IN TOUCH WITH SUMMER ===</p>
<p>📧 Email: <a href="mailto:summerD1203@gmail.com" style="color: #00f0ff;">summerD1203@gmail.com</a></p>
<p>💼 LinkedIn: <a href="https://www.linkedin.com/in/summer-davis-61a8296248" target="_blank" style="color: #00f0ff;">linkedin.com/in/summer-davis-61a8296248</a></p>
<p>🐙 GitHub: <a href="https://github.com/summsum1203" target="_blank" style="color: #00f0ff;">github.com/summsum1203</a></p>
<p>📍 Location: Newport, TN (Open to Remote Worldwide, Hybrid, & Relocation)</p>
`,

    'sudo hire-summer': () => `
<p class="success" style="font-size: 1.1rem; font-weight: bold;">🎉 [ACCESS GRANTED - EXECUTIVE HIRING CLEARANCE] 🎉</p>
<p class="highlight">Congratulations! You've unlocked the smartest hire of 2026.</p>
<p>What you get with Summer:</p>
<p>✔ Strong technical frontend foundations + clean semantic code</p>
<p>✔ 18 years of high-EQ human empathy & bulletproof work ethic</p>
<p>✔ Academic excellence (4.0 APSU CIT / 3.4061 APUS / 3.8 AIU Business)</p>
<p>✔ Unmatched creativity, grit, and cultural energy</p>
<p class="prompt-line">👉 Next step: Send an interview invite to <a href="mailto:summerD1203@gmail.com?subject=Interview%20Invitation%20for%20Summer%20Davis" style="color: #00f0ff; text-decoration: underline;">summerD1203@gmail.com</a>!</p>
`,

    clear: () => {
      terminalOutput.innerHTML = '';
      return '';
    },

    exit: () => {
      closeTerminal();
      return '';
    }
  };

  function openTerminal() {
    terminalOverlay.classList.add('open');
    terminalInput.focus();
  }

  function closeTerminal() {
    terminalOverlay.classList.remove('open');
  }

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    // Append user input line
    const userLine = document.createElement('div');
    userLine.innerHTML = `<span class="terminal-prompt">visitor@sassycode:~$</span> ${escapeHTML(cmdRaw)}`;
    terminalOutput.appendChild(userLine);

    // Evaluate
    if (commands[cmd]) {
      const result = commands[cmd]();
      if (result) {
        const respBlock = document.createElement('div');
        respBlock.innerHTML = result;
        terminalOutput.appendChild(respBlock);
      }
    } else {
      const errLine = document.createElement('div');
      errLine.innerHTML = `<p style="color: #ff5f56;">Command not recognized: '${escapeHTML(cmdRaw)}'. Type <strong class="highlight">help</strong> for a list of valid commands.</p>`;
      terminalOutput.appendChild(errLine);
    }

    // Scroll to bottom
    const body = terminalOverlay.querySelector('.terminal-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Event Listeners
  if (terminalTrigger) terminalTrigger.addEventListener('click', openTerminal);
  if (terminalHeroTrigger) terminalHeroTrigger.addEventListener('click', openTerminal);
  if (terminalClose) terminalClose.addEventListener('click', closeTerminal);

  terminalOverlay.addEventListener('click', (e) => {
    if (e.target === terminalOverlay) closeTerminal();
  });

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      handleCommand(val);
    }
  });

  // Global Keyboard Shortcut: Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (terminalOverlay.classList.contains('open')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    } else if (e.key === 'Escape' && terminalOverlay.classList.contains('open')) {
      closeTerminal();
    }
  });
})();
