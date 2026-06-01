// import Link from 'next/link'
// import { ArrowRight, Calendar, Tag } from 'lucide-react'
// import { blogPosts } from '@/lib/data'
// import NewsletterForm from '@/components/NewsletterForm'
// import AnimatedSection from '@/components/AnimatedSection'

// export const metadata = {
//   title: 'Blog | Perugi Partners',
//   description: 'Insights for modern entrepreneurs.',
// }

// export default function Blog() {
//   const [featured, ...posts] = blogPosts

//   return (
//     <>
//       {/* Hero */}
//       <section className="relative min-h-[50vh] w-full flex items-center bg-background pt-28 pb-12">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="max-w-3xl">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Our Blog</span>
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
//               Insights for <span className="text-emerald-500">modern</span> entrepreneurs.
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-xl">
//               Practical guides, financial tips, and business insights to help you grow with confidence.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Featured Post */}
//       {featured && (
//         <section className="w-full px-6 lg:px-12 max-w-6xl mx-auto mb-12">
//           <AnimatedSection>
//             <Link href={`/blog/${featured.slug}`} className="group block">
//               <div className="grid lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-colors">
//                 <div className="aspect-video lg:aspect-auto lg:h-full">
//                   <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
//                 </div>
//                 <div className="p-8 lg:p-10">
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 mono uppercase tracking-wider">
//                       <Tag className="w-3 h-3" />{featured.category}
//                     </span>
//                     <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mono">
//                       <Calendar className="w-3 h-3" />
//                       {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//                     </span>
//                   </div>
//                   <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">{featured.title}</h2>
//                   <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
//                   <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 group-hover:gap-3 transition-all">
//                     Read Article <ArrowRight className="w-4 h-4" />
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </AnimatedSection>
//         </section>
//       )}

//       {/* Blog Grid */}
//       <section className="w-full px-6 lg:px-12 max-w-6xl mx-auto pb-16 lg:pb-24">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post, i) => (
//             <AnimatedSection key={post.slug} delay={i * 0.1}>
//               <Link href={`/blog/${post.slug}`} className="group block">
//                 <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-emerald-500/30 transition-colors">
//                   <div className="aspect-video overflow-hidden">
//                     <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-4 mb-3">
//                       <span className="text-xs text-emerald-500 mono uppercase tracking-wider">{post.category}</span>
//                       <span className="text-xs text-muted-foreground mono">
//                         {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
//                       </span>
//                     </div>
//                     <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-500 transition-colors">{post.title}</h3>
//                     <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
//                   </div>
//                 </div>
//               </Link>
//             </AnimatedSection>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
//           <AnimatedSection className="text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Get financial insights delivered to your <span className="text-emerald-500">inbox</span>.
//             </h2>
//             <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
//               Join our newsletter for monthly tips, guides, and insights to help you manage your business finances.
//             </p>
//             <NewsletterForm />
//           </AnimatedSection>
//         </div>
//       </section>
//     </>
//   )
// }


import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import NewsletterForm from '@/components/NewsletterForm'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: 'Blog | Perugi Partners',
  description: 'Insights for modern entrepreneurs.',
}

export default function Blog() {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section className="w-full px-6 lg:px-12 max-w-6xl mx-auto pt-28">
        <p className="text-muted-foreground">No blog posts found.</p>
      </section>
    )
  }

  const [featured, ...posts] = blogPosts

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] w-full flex items-center bg-background pt-28 pb-12">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
              Our Blog
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
              Insights for <span className="text-emerald-500">modern</span>{' '}
              entrepreneurs.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Practical guides, financial tips, and business insights to help you
              grow with confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="w-full px-6 lg:px-12 max-w-6xl mx-auto mb-12">
          <AnimatedSection>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-colors">
                <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 mono uppercase tracking-wider">
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mono">
                      <Calendar className="w-3 h-3" />
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">
                    {featured.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {featured.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </section>
      )}

      {/* Blog Grid */}
      <section className="w-full px-6 lg:px-12 max-w-6xl mx-auto pb-16 lg:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-emerald-500/30 transition-colors">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs text-emerald-500 mono uppercase tracking-wider">
                        {post.category}
                      </span>

                      <span className="text-xs text-muted-foreground mono">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-500 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get financial insights delivered to your{' '}
              <span className="text-emerald-500">inbox</span>.
            </h2>

            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our newsletter for monthly tips, guides, and insights to help
              you manage your business finances.
            </p>

            <NewsletterForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}