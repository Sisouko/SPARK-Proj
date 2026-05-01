export function ChallengeCard () {

    return (
        <>
        <div>
           <div className="text-[#7A7060] text-2xl  uppercase tracking-[0.8px] p-10">How are you feeling today?</div>
      <div className="flex gap-8 justify-center p-2">
        <div>
        <button onClick={() => {}} className="text-[#E8A030] bg-[#e8a23050] w-30 h-15 rounded"> <span className="text-[20px] block mb-1 leading-none">😴</span>Low energy </button>
      </div>
      <div>
        <button onClick={() => {}} className="text-[#7A7060] bg-[#e8a23029] w-30 h-15  rounded"> <span className="text-[20px] block mb-1 leading-none">😊</span>Good vibes </button>
      </div>
      <div>
        <button onClick={() => {}} className="text-[#7A7060] bg-[#e8a23029] w-30 h-15 rounded"> <span className="text-[20px] block mb-1 leading-none">🔥</span>On fire</button>
      </div>
      </div>
      <div className="w-auto h-auto bg-[#e8a23029] flex-col items-center justify-center rounded m-10 p-3">
        <div className="bg-[#4a8c5c80] w-30 h-8 m-7 rounded flex items-center justify-center ">
         <h1 className="text-[#00ff4c] font-[DM]">Wellness</h1></div>
<div className="text-[#7A7060] uppercase tracking-[0.8px] m-3">Challenge of the day</div>
      <div><h1 className="font-[Playfair] text-[#F5EDD8] text-5xl m-3">Step outside for 5 minutes</h1>
      <button onClick={() => {}} type="button" className="text-[#F5EDD8] bg-linear-to-r from-[#774502] to-[#E8A030] hover:bg-linear-to-bl  font-[DM] rounded text-sm px-4 py-2.5 m-5"> Easy · 1 XP</button>
      <p className="text-[#C8BA9A] font-[DM SANS] text-2xl m-3 p-4">Fresh air, no destination. Stand outside, look at the sky, and let your mind wander.</p>
      <button onClick={() => {}} type="button" className="inline-flex items-center justify-center border  font-medium text-center transition-all duration-300 ease-in text-sm rounded-md py-2 px-4 bg-[#E8A030] text-[#F5EDD8] hover:bg-[#774502] shadow-none hover:shadow-none w-full">Mark as done</button>
      </div>
      </div>
      </div>
        </>
    )

}
