import { usePlayerContext } from "./contexts/PlayerContext";
import firstPic from "./assets/one.jpg";
import secondPic from "./assets/two.jpg";
import thirdPic from "./assets/ml.jpg";
import fourthPic from "./assets/four.jpg";
import fifthPic from "./assets/five.jpg";
import sixthPic from "./assets/six.jpg";
import { createEffect, createSignal, Show } from "solid-js";

export default function App() {
  const { playing, playOrPause, play } = usePlayerContext();
  const [first, setFirst] = createSignal(true);

  return (
    <div class="bg-gradient-to-b from-rose-200 text-black/60 via-pink-200 to-violet-200 snap-y snap-mandatory overflow-auto">
      <div class="flex left-0 right-0 p-2 justify-end fixed top-0">
        <button
          onclick={playOrPause}
          class="rounded-full border-2 border-orange-500 p-0.5"
        >
          <img
            src="https://i.scdn.co/image/ab67616d0000b27380af37c3283fdcc2392a4042"
            alt=""
            class="h-10 h-10 rounded-full"
          />
        </button>
      </div>

      <div class="h-screen flex items-center justify-center text-6xl text-center leading-snug font-medium snap-center">
        <p>Happy Monthsary, Love</p>
      </div>

      <div class="h-screen flex justify-center items-center text-center leading-snug font-medium snap-center gap-2 p-2">
        <img
          src={firstPic}
          alt=""
          class="w-full rounded-md border border-black/30"
        />
      </div>

      <div class="h-screen flex justify-center items-center text-center leading-snug font-medium snap-center gap-2 p-2">
        <img
          src={secondPic}
          alt=""
          class="w-full rounded-md border border-black/30"
        />
      </div>

      <div class="h-screen flex justify-center items-center text-center leading-snug font-medium snap-center gap-2 p-2">
        <img
          src={thirdPic}
          alt=""
          class="w-full rounded-md border border-black/30"
        />
      </div>

      <div class="h-screen flex justify-center items-center text-center leading-snug font-medium snap-center gap-2 p-2">
        <img
          src={fourthPic}
          alt=""
          class="w-full rounded-md border border-black/30"
        />
      </div>

      <div class="h-screen flex justify-center items-center text-center leading-snug font-medium snap-center gap-2 p-2">
        <img
          src={fifthPic}
          alt=""
          class="w-full rounded-md border border-black/30"
        />
      </div>

      <div class="h-screen flex justify-center items-center text-center leading-snug font-medium snap-center gap-2 p-2">
        <img
          src={sixthPic}
          alt=""
          class="w-full rounded-md border border-black/30"
        />
      </div>

      <div class="h-screen flex items-center justify-center mx-auto text-4xl max-w-[14ch] text-center leading-snug font-medium snap-center">
        <p>I want to thank you for all the things you did to me</p>
      </div>

      <div class="h-screen flex items-center justify-center mx-auto text-4xl max-w-[14ch] text-center leading-snug font-medium snap-center">
        <p>Because of you, I am now even more motivated to continue</p>
      </div>

      <div class="h-screen flex items-center justify-center mx-auto text-4xl max-w-[14ch] text-center leading-snug font-medium snap-center">
        <p>Because of you, my confidence increased</p>
      </div>

      <div class="h-screen flex items-center justify-center mx-auto text-4xl max-w-[14ch] text-center leading-snug font-medium snap-center">
        <p>Because of you, I always got smile on my face</p>
      </div>

      <div class="h-screen flex items-center justify-center mx-auto text-5xl max-w-[14ch] text-center leading-snug font-medium snap-center">
        <p>I hope we'll be forever</p>
      </div>

      <div class="h-screen flex items-center justify-center text-5xl text-center leading-snug font-medium snap-center">
        <p>Because ...</p>
      </div>

      <div class="h-auto py-10 mx-auto text-lg px-8 text-justify leading-relaxed font-medium snap-center">
        <p>
          Ever since I have met you, my day always starts great. Even if we're
          not in good terms, just the thought of you having in my life really
          makes me happy. You were the one who really made me feel that I am
          loved, and appreciated. I hope that your actions toward me will not
          change. I am really sorry for the bad things I always do when we
          argue. I can't promise you that I can change that behavior, but I can
          promise you that I will not talk, nor flirt to any other girls when
          things are not good for us. I know that I am being repetitive with the
          phrases and words I say, but I just want you to know that I really,
          really mean it. I chose this music because I want to remind you that
          you're always here, with me. Thank you for always supporting me, and
          being here through my ups and downs. You made me feel like I can do
          all things as long as I have you. Please don't carry a problem you
          can't handle as I am here, whose ready to help you carry the burden so
          that you don't feel pressured, and anxious. You're really beautiful,
          please do not think ugly of yourself, in which I think you don't and
          that's what I love about you. Please keep that confidence in you.
          Please don't get tired of me. I love you so much, Love.
        </p>
        <p class="mt-10 text-sm text-end">
          Sincerely, <br />
          Aeron
        </p>
      </div>

      <div class="h-screen flex items-center justify-center text-5xl text-center leading-snug font-medium snap-center">
        <p>Thanks for reading, love</p>
      </div>

      <div class="px-8 h-screen flex items-center justify-center text-xl text-center leading-snug font-medium snap-center">
        <p>
          I made this kasi di ko natapos yung isa, which is yung gift ko talaga
          huhu. But I'll make sure to give it to you after I'm done. Listen to
          the music muna, I know umpisa pa lang yung music and natapos ka na e,
          hahaha
        </p>
      </div>

      <div class="h-screen flex items-center justify-center text-4xl px-8 text-center leading-snug font-medium snap-center">
        <p>I love you so, so much my love. Please be my forever.</p>
      </div>
    </div>
  );
}
