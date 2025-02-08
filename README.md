<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code4Change Hackathon</title>
    <style>
        .collapsible {
            background-color: #f1f1f1;
            cursor: pointer;
            padding: 10px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 18px;
            font-weight: bold;
        }
        .content {
            padding: 0 15px;
            display: none;
            overflow: hidden;
            background-color: white;
        }
    </style>
</head>
<body>
    <div align="center">
        <img src="/c4c_logo.png" alt="c4c_Logo" width="600">
        <h3 align="center">🚀 Code4Change Hackathon</h3>
        <p align="center">
            A 36-hour Ideathon & Hackathon organized by IEEE-SSIT & CSED
            <br>
            <a href="https://madhavc9-code4change-hackathon.netlify.app/" target="_blank"><strong> Live Website »</strong></a>
        </p>
    </div>
    <h1>🚀 Code4Change Hackathon</h1>
    <p><strong>A 36-hour Ideathon & Hackathon organized by IEEE-SSIT & CSED</strong></p>
    <button class="collapsible">🌟 About The Hackathon</button>
    <div class="content">
        <p>Welcome to <strong>Code4Change</strong>, where innovation meets impact! Our event emphasizes business models and ideation, welcoming participants of all coding levels.</p>
        <p>Join us for a **SHARK TANK TWIST** experience where creativity knows no bounds—let’s code for change! 💡🔥</p>
    </div>
    <button class="collapsible">📅 Event Details</button>
    <div class="content">
        <ul>
            <li><strong>🗓️ Dates:</strong> 19th March - 21st March 2024</li>
            <li><strong>👥 Team Size:</strong> 2 to 5 members</li>
            <li><strong>💰 Free Registrations</strong></li>
            <li><strong>🏆 Cash Prizes</strong> (to be announced soon!)</li>
        </ul>
    </div>
    <button class="collapsible">🔹 Features</button>
    <div class="content">
        <ul>
            <li>✨ Fully responsive **HTML & CSS website**</li>
            <li>📝 **Single & Team Registration** functionality</li>
            <li>📢 **Hackathon Tracks, Schedule, and FAQs**</li>
            <li>🎨 Modern & engaging UI with animations</li>
        </ul>
    </div>
    <button class="collapsible">🏆 Prizes & Awards</button>
    <div class="content">
        <ul>
            <li>💰 Cash Prizes</li>
            <li>📈 Funding Opportunities</li>
            <li>🎖️ More Prizes for Winners</li>
            <li>🎁 Goodies for All</li>
            <li>🎓 Internship Opportunities</li>
            <li>📝 Certificate of Participation</li>
        </ul>
    </div>
    <button class="collapsible">📌 Event Schedule</button>
    <div class="content">
        <ul>
            <li>🟢 **Phase 1:** Registrations (Mar 14 - Mar 18)</li>
            <li>💡 **Phase 2:** Ideation</li>
            <li>👨‍💻 **Phase 3:** Hackathon</li>
            <li>🦈 **Phase 4:** Shark Tank Round</li>
        </ul>
    </div>
    <button class="collapsible">🎯 Hackathon Tracks</button>
    <div class="content">
        <ul>
            <li>💵 Finance</li>
            <li>♻️ Circular Economy</li>
            <li>🏗️ Innovation & Infrastructure</li>
            <li>🩺 Health & Wellbeing</li>
            <li>📚 Education & AI</li>
            <li>🌎 Open Innovation</li>
            <li>🤱 Maternal & Neonatal Health</li>
            <li>👨‍💻 Programming Hub - Technical Content Writing with AI</li>
        </ul>
    </div>
    <button class="collapsible">📢 Sponsors</button>
    <div class="content">
        <ul>
            <li>💡 Programming Hub</li>
            <li>🚀 ALTAIR</li>
            <li>📚 Graduation</li>
        </ul>
    </div>
    <button class="collapsible">❓ FAQs</button>
    <div class="content">
        <ul>
            <li>🛠️ <strong>Who can participate?</strong> - Open to all students and professionals.</li>
            <li>💵 <strong>How much does it cost?</strong> - Free registration!</li>
            <li>📝 <strong>How can I apply?</strong> - Fill the registration form before March 18.</li>
            <li>👨‍💻 <strong>What if I don’t know how to code?</strong> - No worries, just bring your creativity and ideas!</li>
        </ul>
    </div>
    <button class="collapsible">🛠️ Tech Stack</button>
    <div class="content">
        <ul>
            <li>🌐 **HTML & CSS** for front-end</li>
            <li>📄 **Static web pages**</li>
            <li>📱 **Fully responsive design**</li>
        </ul>
    </div>
    <footer>
        <p align="center">💻 Made by <strong>Madhav Choudhary</strong> | Developed for IEEE-SSIT & CSED</p>
    </footer>
    <script>
        var coll = document.getElementsByClassName("collapsible");
        for (var i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    </script>
</body>
</html>
