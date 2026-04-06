export default function GiaHanPortfolio() {
  const achievements = [
    "IELTS 6.5",
    "DELF B1 tiếng Pháp",
    "President của Dự án đêm nhạc gây quỹ thiện nguyện “Trai Nghiem Show 8.0”",
    "President BimSon Music Club",
    "Member of External Relations Department của dự án thanh niên vì cộng đồng Z Concert",
    "Member of Media Department của Olympia BimSon Club",
  ];

  const skills = [
    "Ngoại ngữ",
    "Leadership skills",
    "Chơi drum",
    "Chơi piano",
    "Chơi guitar",
  ];

  const hobbies = ["Chơi piano", "Vẽ tranh sơn dầu"];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-violet-100 to-cyan-100 text-slate-700">
      <div className="relative">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute left-10 top-12 h-40 w-40 rounded-full bg-pink-200 blur-3xl" />
          <div className="absolute right-10 top-24 h-52 w-52 rounded-full bg-cyan-200 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-violet-200 blur-3xl" />
        </div>

        <main className="relative mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
          <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/50 bg-white/40 p-8 shadow-2xl backdrop-blur-xl">
              <p className="mb-3 inline-block rounded-full border border-white/70 bg-white/60 px-4 py-1 text-sm tracking-[0.25em] text-violet-500 uppercase">
                Dreamcore Portfolio
              </p>
              <h1 className="text-4xl font-bold leading-tight text-violet-700 md:text-6xl">
                Nguyễn Vũ Gia Hân
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                Một thế giới mềm như mây, dịu như nhạc, và rực rỡ như những lớp màu sơn dầu.
                Đây là góc nhỏ ghi lại hành trình học tập, nghệ thuật, ngoại ngữ và khả năng lãnh đạo của mình.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/kieu.han.9406417"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-violet-300 bg-violet-200/60 px-5 py-3 text-sm font-medium text-violet-800 transition hover:scale-105"
                >
                  Facebook
                </a>
                <a
                  href="#achievements"
                  className="rounded-full border border-cyan-300 bg-cyan-200/60 px-5 py-3 text-sm font-medium text-cyan-900 transition hover:scale-105"
                >
                  Xem thành tựu
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="relative rounded-[2rem] border border-white/60 bg-white/40 p-4 shadow-2xl backdrop-blur-xl">
                <div className="absolute -left-4 -top-4 rounded-full border border-pink-200 bg-pink-100/80 px-4 py-2 text-xs tracking-[0.3em] text-pink-500 uppercase shadow-lg">
                  soft memory
                </div>
                <img
                  src="https://files.catbox.moe/j4trfg.jpg"
                  alt="Nguyễn Vũ Gia Hân"
                  className="h-[440px] w-full rounded-[1.5rem] object-cover shadow-xl"
                />
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-6 shadow-xl backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-violet-700">Sở thích</h2>
              <div className="mt-4 space-y-3">
                {hobbies.map((item) => (
                  <div key={item} className="rounded-2xl bg-pink-100/70 px-4 py-3 text-sm shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-6 shadow-xl backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-cyan-700">Sở trường</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-200 bg-cyan-100/80 px-4 py-2 text-sm text-cyan-900 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-6 shadow-xl backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-pink-700">Điểm nhấn</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Kết hợp tư duy nghệ thuật, khả năng ngoại ngữ và năng lực lãnh đạo để tạo nên những dự án vừa đẹp về cảm xúc, vừa mạnh về giá trị cộng đồng.
              </p>
            </div>
          </section>

          <section
            id="achievements"
            className="mt-10 rounded-[2rem] border border-white/60 bg-white/45 p-7 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-violet-400">milestones</p>
                <h2 className="text-3xl font-bold text-violet-700">Thành tựu & Hoạt động</h2>
              </div>
              <p className="text-sm text-slate-500">Những dấu mốc nổi bật trên hành trình phát triển bản thân</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {achievements.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/70 bg-gradient-to-br from-white/70 to-white/40 p-5 shadow-lg"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-violet-200/80 text-sm font-semibold text-violet-800">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-7 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">languages & leadership</p>
              <h2 className="mt-2 text-3xl font-bold text-cyan-700">Bản sắc của mình</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Mình theo đuổi hình ảnh một người trẻ vừa có chiều sâu nghệ thuật, vừa có tinh thần trách nhiệm với cộng đồng.
                Ngoại ngữ giúp mình kết nối rộng hơn, âm nhạc giúp mình cảm nhận sâu hơn, và leadership giúp mình biến ý tưởng thành hành động.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-violet-200/40 via-pink-100/50 to-cyan-100/50 p-7 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-white/60 p-5 text-center shadow-lg">
                  <div className="text-3xl font-bold text-violet-700">6.5</div>
                  <div className="mt-2 text-sm text-slate-600">IELTS</div>
                </div>
                <div className="rounded-[1.5rem] bg-white/60 p-5 text-center shadow-lg">
                  <div className="text-3xl font-bold text-cyan-700">B1</div>
                  <div className="mt-2 text-sm text-slate-600">DELF Pháp</div>
                </div>
                <div className="rounded-[1.5rem] bg-white/60 p-5 text-center shadow-lg">
                  <div className="text-3xl font-bold text-pink-700">3</div>
                  <div className="mt-2 text-sm text-slate-600">Nhạc cụ</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
