// import { notFound } from 'next/navigation'
// import Link from 'next/link'
// import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
// import { blogPosts } from '@/lib/data'
// import AnimatedSection from '@/components/AnimatedSection'

// export function generateStaticParams() {
//   return blogPosts.map((post) => ({ slug: post.slug }))
// }

// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = blogPosts.find((p) => p.slug === params.slug)
//   if (!post) return { title: 'Not Found' }
//   return { title: `${post.title} | Perugi Partners Blog` }
// }

// function formatInline(text: string): string {
//   return text
//     .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//     .replace(/\*(.*?)\*/g, '<em>$1</em>')
//     .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-emerald-500 hover:underline">$1</a>')
// }

// function parseContent(content: string) {
//   const lines = content.trim().split('\n')
//   const elements: React.ReactNode[] = []
//   let inList = false
//   let listItems: React.ReactNode[] = []

//   lines.forEach((line, i) => {
//     const trimmed = line.trim()
//     if (trimmed.startsWith('# ')) {
//       if (inList) { elements.push(<ul key={`l-${i}`} className="space-y-2 mb-6">{listItems}</ul>); listItems = []; inList = false }
//       elements.push(<h1 key={i} className="text-3xl lg:text-4xl font-bold mt-12 mb-6">{trimmed.replace('# ', '')}</h1>)
//     } else if (trimmed.startsWith('## ')) {
//       if (inList) { elements.push(<ul key={`l-${i}`} className="space-y-2 mb-6">{listItems}</ul>); listItems = []; inList = false }
//       elements.push(<h2 key={i} className="text-2xl lg:text-3xl font-bold mt-10 mb-4">{trimmed.replace('## ', '')}</h2>)
//     } else if (trimmed.startsWith('### ')) {
//       if (inList) { elements.push(<ul key={`l-${i}`} className="space-y-2 mb-6">{listItems}</ul>); listItems = []; inList = false }
//       elements.push(<h3 key={i} className="text-xl font-bold mt-8 mb-3">{trimmed.replace('### ', '')}</h3>)
//     } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
//       inList = true
//       listItems.push(<li key={`li-${i}`} className="flex items-start gap-2">
//         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
//         <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed.substring(2)) }} />
//       </li>)
//     } else if (trimmed === '') {
//       if (inList) { elements.push(<ul key={`l-${i}`} className="space-y-2 mb-6">{listItems}</ul>); listItems = []; inList = false }
//     } else {
//       if (inList) { elements.push(<ul key={`l-${i}`} className="space-y-2 mb-6">{listItems}</ul>); listItems = []; inList = false }
//       elements.push(<p key={i} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />)
//     }
//   })
//   if (inList) elements.push(<ul key="l-f" className="space-y-2 mb-6">{listItems}</ul>)
//   return elements
// }

// export default function BlogPost({ params }: { params: { slug: string } }) {
//   const post = blogPosts.find((p) => p.slug === params.slug)
//   if (!post) return notFound()

//   const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2)

//   return (
//     <article className="w-full bg-background pt-28 pb-16">
//       {/* Hero */}
//       <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
//         <AnimatedSection>
//           <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
//             <ArrowLeft className="w-4 h-4" /> Back to Blog
//           </Link>
//           <div className="flex items-center gap-4 mb-6">
//             <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 mono uppercase tracking-wider">
//               <Tag className="w-3 h-3" />{post.category}
//             </span>
//             <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mono">
//               <Calendar className="w-3 h-3" />
//               {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//             </span>
//           </div>
//           <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-[0.95]">{post.title}</h1>
//           <div className="flex items-center gap-3 mb-8">
//             <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
//               <User className="w-5 h-5 text-emerald-500" />
//             </div>
//             <div>
//               <p className="font-medium text-sm">Perugi Partners Team</p>
//               <p className="text-xs text-muted-foreground">Financial Experts</p>
//             </div>
//           </div>
//         </AnimatedSection>
//       </div>

//       {/* Image */}
//       <div className="w-full px-6 lg:px-12 max-w-5xl mx-auto mb-12">
//         <AnimatedSection delay={0.2}>
//           <div className="rounded-3xl overflow-hidden">
//             <img src={post.image} alt={post.title} className="w-full h-64 lg:h-96 object-cover" />
//           </div>
//         </AnimatedSection>
//       </div>

//       {/* Content */}
//       <div className="w-full px-6 lg:px-12 max-w-3xl mx-auto">
//         <AnimatedSection delay={0.3}>
//           <div className="prose prose-lg max-w-none">
//             {parseContent(post.content)}
//           </div>
//         </AnimatedSection>
//       </div>

//       {/* Related */}
//       {relatedPosts.length > 0 && (
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto mt-20 pt-12 border-t border-border">
//           <AnimatedSection>
//             <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               {relatedPosts.map((rp) => (
//                 <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
//                   <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-emerald-500/30 transition-colors">
//                     <div className="aspect-video overflow-hidden">
//                       <img src={rp.image} alt={rp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
//                     </div>
//                     <div className="p-5">
//                       <span className="text-xs text-emerald-500 mono uppercase tracking-wider">{rp.category}</span>
//                       <h4 className="font-bold mt-2 group-hover:text-emerald-500 transition-colors">{rp.title}</h4>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </AnimatedSection>
//         </div>
//       )}
//     </article>
//   )
// }


import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'

// Required for Next 16 dynamic params
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// FIXED: params is now a Promise in Next 16
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${post.title} | Perugi Partners Blog`,
  }
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-emerald-500 hover:underline">$1</a>'
    )
}

function parseContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let inList = false
  let listItems: React.ReactNode[] = []

  lines.forEach((line, i) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('# ')) {
      if (inList) {
        elements.push(
          <ul key={`l-${i}`} className="space-y-2 mb-6">
            {listItems}
          </ul>
        )
        listItems = []
        inList = false
      }

      elements.push(
        <h1 key={i} className="text-3xl lg:text-4xl font-bold mt-12 mb-6">
          {trimmed.replace('# ', '')}
        </h1>
      )
    } else if (trimmed.startsWith('## ')) {
      if (inList) {
        elements.push(
          <ul key={`l-${i}`} className="space-y-2 mb-6">
            {listItems}
          </ul>
        )
        listItems = []
        inList = false
      }

      elements.push(
        <h2 key={i} className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
          {trimmed.replace('## ', '')}
        </h2>
      )
    } else if (trimmed.startsWith('### ')) {
      if (inList) {
        elements.push(
          <ul key={`l-${i}`} className="space-y-2 mb-6">
            {listItems}
          </ul>
        )
        listItems = []
        inList = false
      }

      elements.push(
        <h3 key={i} className="text-xl font-bold mt-8 mb-3">
          {trimmed.replace('### ', '')}
        </h3>
      )
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      inList = true

      listItems.push(
        <li key={`li-${i}`} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
          <span
            dangerouslySetInnerHTML={{
              __html: formatInline(trimmed.substring(2)),
            }}
          />
        </li>
      )
    } else if (trimmed === '') {
      if (inList) {
        elements.push(
          <ul key={`l-${i}`} className="space-y-2 mb-6">
            {listItems}
          </ul>
        )
        listItems = []
        inList = false
      }
    } else {
      if (inList) {
        elements.push(
          <ul key={`l-${i}`} className="space-y-2 mb-6">
            {listItems}
          </ul>
        )
        listItems = []
        inList = false
      }

      elements.push(
        <p
          key={i}
          className="mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: formatInline(trimmed),
          }}
        />
      )
    }
  })

  if (inList) {
    elements.push(
      <ul key="l-f" className="space-y-2 mb-6">
        {listItems}
      </ul>
    )
  }

  return elements
}

// FIXED: params is Promise in Next 16
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2)

  return (
    <article className="w-full bg-background pt-28 pb-16">
      {/* Hero */}
      <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 mono uppercase tracking-wider">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mono">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-[0.95]">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <User className="w-5 h-5 text-emerald-500" />
            </div>

            <div>
              <p className="font-medium text-sm">Perugi Partners Team</p>
              <p className="text-xs text-muted-foreground">
                Financial Experts
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Image */}
      <div className="w-full px-6 lg:px-12 max-w-5xl mx-auto mb-12">
        <AnimatedSection delay={0.2}>
          <div className="relative w-full h-64 lg:h-96 rounded-3xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Content */}
      <div className="w-full px-6 lg:px-12 max-w-3xl mx-auto">
        <AnimatedSection delay={0.3}>
          <div className="prose prose-lg max-w-none">
            {parseContent(post.content)}
          </div>
        </AnimatedSection>
      </div>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto mt-20 pt-12 border-t border-border">
          <AnimatedSection>
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block"
                >
                  <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-emerald-500/30 transition-colors">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5">
                      <span className="text-xs text-emerald-500 mono uppercase tracking-wider">
                        {rp.category}
                      </span>

                      <h4 className="font-bold mt-2 group-hover:text-emerald-500 transition-colors">
                        {rp.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      )}
    </article>
  )
}