'use client'

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); e.currentTarget.reset() }}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all"
      >
        Subscribe
      </button>
    </form>
  )
}
