import * as React from "react";
import "./App.css";
import Background from "./images/polka.jpg";
import Brennis from "./images/brennis.png";
import HBD from "./images/hbd.gif";
import X from "./images/x.png";
import Note from "./images/note.png";
import JSConfetti from "js-confetti";
import { motion } from "framer-motion";

import Friendly from "./images/friendly.png";
import Social from "./images/social.png";
import Laugh from "./images/laugh.png";
import Teeth from "./images/teeth.png";
import Positive from "./images/positive.png";
import Lead from "./images/lead.png";
import Kacey from "./images/kacey.png";
import Jacked from "./images/muscle.png";
import Yap from "./images/yap.png";
import Grandpa from "./images/grandpa.png";
import Nice from "./images/nice.png";
import Frog from "./images/frog.png";
import Adobo from "./images/adobo.png";
import Music from "./images/music.png";
import Chicken from "./images/chicken.png";
import Strength from "./images/strength.png";
import Trust from "./images/trust.png";
import Soothe from "./images/soothe.png";
import Joke from "./images/joke.png";
import Cheeto from "./images/cheeto.png";
import Chef from "./images/chef.png";

function App() {
  const [open, setOpen] = React.useState(false);
  const [person, setPerson] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [from, setFrom] = React.useState("");

  const handleOpen = (newPerson = "", newMsg = "", newFrom = "") => {
    setOpen(!open);
    setPerson(newPerson);
    setMsg(newMsg);
    setFrom(newFrom);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const jsConfetti = new JSConfetti();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${Background})`,
          backgroundRepeat: "repeat-x-y",
          backgroundSize: "100px",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* top row ============================================================================*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100vw",
              justifyContent: "space-evenly",
            }}
          >
            <button
              onClick={() => {
                handleOpen("Brandon", "The friendly face 🤠", "Christy");
              }}
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Friendly}
                style={{
                  height: "90px",
                }}
                alt="friendly"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Brandon",
                  "Very socially aware, yet is incredibly considerate, tries not to dominate the conversation, and ensures everyone has their voice heard to a degree. I very much appreciate that about him.",
                  "Kevin"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Social}
                style={{
                  height: "90px",
                }}
                alt="social"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Brandon",
                  "I appreciate his brightness and positive vibe he brings to the room every time. His energy is contagious, and it's always a pleasure to be around him. Love his sexy laughter; it's one of the things that makes him so endearing.",
                  "Jae"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Positive}
                style={{
                  height: "90px",
                }}
                alt="positive"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Brandon",
                  "Happy birthday Brandon! Jay was onto something about ur laugh but it also gives such intense frat boy and it all clicked for me when you said you transferred from business. Anyways, hope you have a great day and I’m sure I’ll see what you’re up to because I stalk you on bereal (in a normal non-creepy way).",
                  "Vanessa"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Laugh}
                style={{
                  height: "90px",
                }}
                alt="laugh"
              />
            </button>
            <button
              onClick={() => {
                handleOpen("Brandon", "Insanely good smiles.", "Christopher");
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Teeth}
                style={{
                  height: "90px",
                }}
                alt="teeth"
              />
            </button>{" "}
            <button
              onClick={() => {
                handleOpen(
                  "Brandon",
                  "My co-op lead! Very friendly and fun to talk to !!",
                  "Sam"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Lead}
                style={{
                  height: "90px",
                }}
                alt="lead"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Brandon",
                  "Open to listening to Kacey Musgraves",
                  "Sofiya"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Kacey}
                style={{
                  height: "90px",
                }}
                alt="kacey"
              />
            </button>
            <button
              onClick={() => {
                handleOpen("Brandon", "He's jacked", "Ed");
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Jacked}
                style={{
                  height: "90px",
                }}
                alt="jacked"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Brandon",
                  "I really appreciate how you stop by my desk to chat in the morning and your ability to lock in when needed. Remember that time I asked if you were Indonesian cause of your laugh LOL mb mb Hope you have a great day and even better year :))",
                  "Christine"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Yap}
                style={{
                  height: "90px",
                }}
                alt="yap"
              />
            </button>
            <button
              onClick={() => {
                handleOpen("Brandon", "a very joyful presence and lights up the room when he walks in. also great skills in regards to getting the most flavour out of grapes and Cheetos", "Conor");
              }}
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Cheeto}
                style={{
                  height: "90px",
                }}
                alt="cheeto"
              />
            </button>
            <button
              onClick={() => {
                handleOpen("Brandon", "he always laughs at my joke (he's a bully though)...LOL happy birthday!", "Angie (aka sona main)");
              }}
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Joke}
                style={{
                  height: "90px",
                }}
                alt="joke"
              />
            </button>
          </div>
         

          {/* middle row  ========================================================================*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <button
              onClick={() => {
                jsConfetti.addConfetti({
                  emojis: ["🌈", "✨", "🎂", "🥳", "🎉", "🎁"],
                  emojiSize: 70,
                });
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Brennis}
                style={{
                  height: "400px",
                }}
                alt="brennis"
              />
            </button>
            <img
              src={HBD}
              style={{
                height: "400px",
              }}
              alt="hbd"
            />
          </div>


          {/* bottom row =========================================================================*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100vw",
              justifyContent: "space-evenly",
            }}
          >
            <button
              onClick={() => {
                handleOpen("Dennis", "The grandpa vibe 👴🏼", "Christy");
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Grandpa}
                style={{
                  height: "90px",
                }}
                alt="grandpa"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Dennis",
                  "I love how he is considerate, helpful, but also humble. He will clearly communicate his perspective or provide advice on topics he is knowledgeable in, but he does so in a constructive, and non-condescending manner.",
                  "Kevin"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Nice}
                style={{
                  height: "90px",
                }}
                alt="nice"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Dennis",
                  "Happy birthday Dennis! it brings me amusement every time you bring unseasoned boiled chicken but I respect the healthy eating/ gym bro grind. Also you do a good frog pose and I know who to go to if I want #hugelats.",
                  "Vanessa"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Frog}
                style={{
                  height: "90px",
                }}
                alt="frog"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Dennis",
                  "Makes Adobo that is certified good by his filipino mom",
                  "Christoper"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Adobo}
                style={{
                  height: "90px",
                }}
                alt="adobo"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Dennis",
                  "I appreciate his muscular physique. It's impressive to see how dedicated he is to maintaining his fitness. Pleasing to watch every time he moves, his strength and agility are truly inspiring.",
                  "Jae"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Strength}
                style={{
                  height: "90px",
                }}
                alt="strength"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Dennis",
                  "Old man who loves to rave. He’s so hip.",
                  "Sam"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Music}
                style={{
                  height: "90px",
                }}
                alt="music"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Dennis",
                  "Dedication to eating poached chicken",
                  "Sofiya"
                );
              }}
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Chicken}
                style={{
                  height: "90px",
                }}
                alt="chicken"
              />
            </button>
            <button
              onClick={() => {
                handleOpen("Dennis", "He's jacked", "Ed");
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Jacked}
                style={{
                  height: "90px",
                }}
                alt="jacked"
              />
            </button>
            <button
              onClick={() => {
                handleOpen(
                  "Dennis",
                  "Dear Pawpaw Dennis, I admire your resilience against age and any obstacles that are in your path. You seem like a real trustworthy person, and I’m really glad to have met you :)) (can I pls try ur homemade adobo one day !!!) (not gonna wish you a good year until u meet ur adobo quota)",
                  "Christine"
                );
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Trust}
                style={{
                  height: "90px",
                }}
                alt="trust"
              />
            </button>

            <button
              onClick={() => {
                handleOpen("Dennis", "quite possibly the soothest guy in the office", "Conor");
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Soothe}
                style={{
                  height: "90px",
                }}
                alt="soothe"
              />
            </button>
            <button
              onClick={() => {
                handleOpen("Dennis", "he's so chill and he's a chef, he never cooks for us so i wouldn't know if he's lying or not anyways happy birthday!", "Angie");
              }}
            >
              {" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src={Chef}
                style={{
                  height: "90px",
                }}
                alt="chef"
              />
            </button>
          </div>
        </div>

        {/* show popup ===========================================================================*/}
        {open && (
          <div
            style={{
              position: "absolute",
              margin: "0",
              height: "650px",
              width: "500px",
              background: `url(${Note})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <div style={{ position: "absolute", top: "160px", right: "0px" }}>
                <button onClick={handleClose}>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    src={X}
                    style={{
                      height: "100px",
                    }}
                    alt="x button"
                  />
                  close
                </button>
              </div>
              <div
                style={{
                  position: "relative",
                  top: "170px",
                  left: "80px",
                  maxWidth: "350px",
                  maxHeight: "290px",
                  overflow: "auto",
                }}
              >
                <p
                  style={{
                    fontFamily: "Comic Sans MS",
                    fontSize: "25px",
                    fontWeight: "700",
                    paddingBottom: "15px",
                  }}
                >
                  I like {person} because...
                </p>
                <p
                  style={{
                    fontFamily: "Comic Sans MS",
                    fontSize: "25px",
                    paddingBottom: "15px",
                  }}
                >
                  "{msg}"
                </p>
                <p
                  style={{
                    fontFamily: "Comic Sans MS",
                    fontSize: "25px",
                    fontStyle: "italic",
                    paddingLeft: "200px",
                  }}
                >
                  - {from}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
