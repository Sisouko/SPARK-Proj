export function ChallengeCard () {

    return (
        <>
        <div>
           <div class="text-[#7A7060] text-[11px]  uppercase tracking-[0.8px] p-4">How are you feeling today?</div>
         <div class="flex gap-2">
        <button id="mood-low"    onclick="selectMood('low')"    class="mood-btn flex-1 px-2 py-[11px] pb-[10px] rounded-md border border-cream/[0.08] bg-surface text-muted font-sans text-[12px] cursor-pointer text-center transition-all duration-200 selected">
          <span class="text-[20px] block mb-1 leading-none">😴</span>Low energy
        </button>
        <button id="mood-medium" onclick="selectMood('medium')" class="mood-btn flex-1 px-2 py-[11px] pb-[10px] rounded-md border border-cream/[0.08] bg-surface text-muted font-sans text-[12px] cursor-pointer text-center transition-all duration-200">
          <span class="text-[20px] block mb-1 leading-none">😊</span>Good vibes
        </button>
        <button id="mood-high"   onclick="selectMood('high')"   class="mood-btn flex-1 px-2 py-[11px] pb-[10px] rounded-md border border-cream/[0.08] bg-surface text-muted font-sans text-[12px] cursor-pointer text-center transition-all duration-200">
          <span class="text-[20px] block mb-1 leading-none">🔥</span>On fire
        </button>
      </div>
        
        </div>
        </>
    )

}