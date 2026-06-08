import Image from 'next/image'

export default function FounderSignature() {
  return (
    // <div className="mt-12 flex items-center gap-4">
      
    //   {/* Image */}
    //   <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
    //     <Image
    //       src="/images/jabez-roberts.jpg"
    //       alt="Founder"
    //       width={56}
    //       height={56}
    //       className="object-cover w-full h-full"
    //     />
    //   </div>

    //   {/* Text */}
    //   <div className="flex flex-col">
    //     <p className="font-semibold text-foreground leading-tight">
    //       Jabez Roberts
    //     </p>
    //     <p className="text-sm text-muted-foreground">
    //       Founder, Perugi Partners
    //     </p>
    //   </div>

    // </div>

    <div className="mt-12 flex items-center gap-4">
  
        <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
            <Image
            src="/images/jabez-roberts.jpg"
            alt="Founder"
            width={48}
            height={48}
            className="object-cover w-full h-full"
            />
        </div>

        <div className="flex flex-col">
            <p className="font-medium text-foreground">
            Jabez Roberts
            </p>
            <p className="text-sm text-muted-foreground">
            Founder, Perugi Partners
            </p>
        </div>

    </div>
  )
}