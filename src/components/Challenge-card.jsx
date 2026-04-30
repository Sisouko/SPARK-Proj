export function ChallengeCard () {

    return (
        <>
        <div>
           <div class="text-[#7A7060] text-[11px]  uppercase tracking-[0.8px] p-10">How are you feeling today?</div>
      <div className="flex gap-20 justify-center p-5">
        <div>
        <button className="text-[#E8A030] bg-[#e8a23023] w-30 h-15 rounded"> <span class="text-[20px] block mb-1 leading-none">😴</span>Low energy </button>
      </div>
      <div>
        <button className="text-[#1A1612] bg-[#7A7060] w-30 h-15  rounded"> <span class="text-[20px] block mb-1 leading-none">😊</span>Good vibes </button>
      </div>
      <div>
        <button className="text-[#1A1612] bg-[#7A7060] w-30 h-15 rounded"> <span class="text-[20px] block mb-1 leading-none">🔥</span>On fire</button>
      </div>
      </div>
      </div>
        </>
    )

}