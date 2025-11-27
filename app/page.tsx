'use client';

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>أهلاً بك</h1>
        <p>مرحباً بك في أول تجربة تفاعلية معنا.</p>
        <button
          className="cta"
          onClick={() => alert("سعيدون بزيارتك!")}
        >
          اضغط للترحيب
        </button>
      </section>
    </main>
  );
}
