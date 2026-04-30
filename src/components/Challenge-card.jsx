export function ChallengeCard () {

    return (
        <>
        <div>
           <div class="text-[#7A7060] text-[11px]  uppercase tracking-[0.8px] p-10">How are you feeling today?</div>
      <div className="flex gap-8 justify-center p-5">
        <div>
        <button className="text-[#] bg-[#e8a23023] w-30 h-15 rounded"> <span class="text-[20px] block mb-1 leading-none">😴</span>Low energy </button>
      </div>
      <div>
        <button className="text-[#1A1612] bg-[#7A7060] w-30 h-15  rounded"> <span class="text-[20px] block mb-1 leading-none">😊</span>Good vibes </button>
      </div>
      <div>
        <button className="text-[#1A1612] bg-[#7A7060] w-30 h-15 rounded"> <span class="text-[20px] block mb-1 leading-none">🔥</span>On fire</button>
      </div>
      </div>
      <div className="w-full h-65 ">
        <div className="bg-[#4a8c5c2b] w-30 h-8 m-10 rounded flex items-center justify-center">
         <h1 className="text-[#6ABF84]">Wellness</h1></div>
<div class="text-[#7A7060] text-[11px]  uppercase tracking-[0.8px] p-10">Challenge of the day</div>
      <div><h1 className="font text-[#F5EDD8] ">Step outside for 5 minutes</h1></div>
      </div>
      </div>
        </>
    )

}