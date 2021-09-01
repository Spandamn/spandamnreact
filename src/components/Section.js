function Section(prop) {

const sections = {workHTML: (<div>
  <strong><h2>My Work</h2></strong><ul><li>I\'m a contributor to <a href="https://pokemonshowdown.com" target="_blank">Pokemon Showdown</a>, an online game simulator which averages 32 thousand+ users. I am also <a href="https://pokemonshowdown.com/credits" target="_blank">credited for contributing</a>.</li><li>I have written an independant <a href="https://github.com/Spandamn/Pokemon-Showdown-Java-Bot" target="_blank">bot</a> for Pokemon Showdown in Java, which is the only bot for the website written in Java.</li><li>I have forked and worked on a <a href="https://github.com/Spandamn/Abyssal-Bot" target="_blank">JavaScript based Pokemon Showdown Bot</a>.</li><li>I have written more than 12 poems, although I dont intend to publish them haha.</li><li>I have also forked and worked on a <a href="https://github.com/Spandamn/DH" target="_blank">side server of Pokemon Showdown</a>.</li><li>I created a game webpage for second year internals <a href="https://pokemonshowdown.com" target="_blank">HTML Project</a> using mainly JavaScript.</li><li>I created a node.js based <a href="https://gist.github.com/Spandamn/08e4a4ac3f0f52bcb5afd7ed94474c10" target="_blank">script</a> which extracts messages from messages.json (from Instagram\'s data dumps) and creates separate .txt files for Instagram DMs with different people.</li><li>I created a node.js based <a href="https://gist.github.com/Spandamn/754d4c68f1d389ddec76389cae29a151" target="_blank">script</a> which attempts to fix lagging or early subtitles for movies.</li><li>I created <a href="https://gist.github.com/Spandamn/47135e8e830f5a75205539a59a53cce4" target="_blank">3 games</a> written in Java for my 10th grade ICSE project for Computer Applications.</li></ul>
</div>),
                strengthHTML: (<div>
                  <strong><h2>My Strengths</h2></strong><ul><li>I started programming with C++ from 7th grade at <a href="https://singhaniaschool.org" target="_blank">Smt. Sulochanadevi Singhania School.</a></li><li>I chose Computer Applications as my optional subject in 9th grade, and studied Java for 4 years there.</li><li>Since I have been using Computers since I was a small child, my typing speed is faster than most people.</li><li>I use Github, and have knowledge of using git.</li><li>I have studied JavaScript, HTML by contributing to Pokemon Showdown for 4+ years. My main strength is server side programming through node.js.</li><li>I studied C and Python at JNEC Aurangabad, and also studied Python through outside courses.</li><li>I\'ve been using Linux since I was 16; hence I am well versed with Linux terminal commands. I use Ubuntu 20.04 as my main OS.</li><li>I have also studied and know how to use digital graphics tools like Corel Draw and Inkscape. I have designed logos and business cards for my friend\'s startups using these softwares.</li><li>I can also operate Microsoft Office software well.</li><li>My curiosity to learn more keeps me motivated to learn new things in the computer science field.</li><li>This website was not made using tools like Wordpress, I hard-coded it.</li></ul>
                </div>),
                hobbyHTML: (<div>
                  <strong><h2>My Hobbies</h2></strong><ul><li>I like playing sports like badminton, football, etc.</li><li>I also learned to play the guitar.</li><li>I like listening to music.</li><li>I like programming.</li><li>Learning new languages is also one of my interests.</li><li>Contributing to <a href="https://pokemonshowdown.com" target="_blank">Pokemon Showdown.</a> is also one of my hobbies.</li><li>Following my curiosity towards new and interesting things is the thing that keeps me going.</li><li>I also occasionally write Poetry.</li></ul>
                </div>
                ),
            }
  return (
    <section class={'sec'+prop.n} id={"section" + prop.n} data-scroll-index={prop.index} data-anchor={"page" + prop.n}>
        <div class="pp-tableCell">
            <div class={prop.indiv} id={prop.inid}>{sections[prop.inid+"HTML"]}</div>
        </div>
    </section>
  );
}
export default Section;
