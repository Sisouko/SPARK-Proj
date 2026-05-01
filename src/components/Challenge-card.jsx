export function ChallengeCard () {

    return (
        <>
        <div>
           <div class="text-[#7A7060] text-[11px]  uppercase tracking-[0.8px] p-10">How are you feeling today?</div>
      <div className="flex gap-8 justify-center p-5">
        <div>
        <button className="text-[#] bg-[#] w-30 h-15 rounded"> <span class="text-[20px] block mb-1 leading-none">😴</span>Low energy </button>
      </div>
      <div>
        <button className="text-[#1A1612] bg-[#7A7060] w-30 h-15  rounded"> <span class="text-[20px] block mb-1 leading-none">😊</span>Good vibes </button>
      </div>
      <div>
        <button className="text-[#1A1612] bg-[#7A7060] w-30 h-15 rounded"> <span class="text-[20px] block mb-1 leading-none">🔥</span>On fire</button>
      </div>
      </div>
      <div className="w-auto h-auto bg-[#e8a23029] flex-col items-center justify-center rounded m-10 p-3">
        <div className="bg-[#4a8c5c80] w-30 h-8 m-7 rounded flex items-center justify-center ">
         <h1 className="text-[#00ff4c] font-[DM]">Wellness</h1></div>
<div class="text-[#7A7060] uppercase tracking-[0.8px] m-3">Challenge of the day</div>
      <div><h1 className="font-[Playfair] text-[#F5EDD8] text-5xl m-3">Step outside for 5 minutes</h1>
      <button type="button" className="text-[#F5EDD8] bg-gradient-to-r from-yellow-700 to-yellow-500 hover:bg-gradient-to-bl  font-[DM] rounded text-sm px-4 py-2.5 m-5"> Easy · 1 XP</button>
      <p className="text-[#C8BA9A] font-[DM SANS] text-2xl m-3">Fresh air, no destination. Stand outside, look at the sky, and let your mind wander.</p>
      <button>Mark as done</button>
      </div>
      </div>
      </div>
        </>
    )

}
