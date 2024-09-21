import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function CaseStudies(){
    return (
        <>
        <div className="flex flex-col  gap-16 sm:pt-20 pt-8 ">
            <div id="rimjhim" className="flex sm:flex-nowrap flex-wrap  sm:gap-4">
                <div className={`telegraf sm:w-[60%] flex flex-col   sm:px-16 px-4 gap-4`}>
                    <h2 className="sm:text-6xl text-color-1 text-4xl font-bold">Rimjhim (Rebranding)</h2>
                    <p className="text-2xl leading-10 font-bold">The Challenge</p>
                    <p className="text-lg leading-10 font-bold">Rimjhim, a Pakistani fashion brand established in 1997, faced a significant branding challenge. Despite their rich history and exquisite craftsmanship, the brand had failed to gain widespread recognition. </p>
                    <p className="text-lg leading-10 font-bold">Their traditional approach to marketing and a lack of a strong online presence had limited their reach to a small, local audience. As a result, the brand was struggling to compete in the increasingly competitive fashion market.</p>
                    {/* <p className="text-xl font-bold">The Solution</p>
                    <p className="text-lg font-bold">To address Rimjhim's branding issues, our team embarked on a comprehensive rebranding strategy. We began by conducting in-depth market research to understand the brand's unique value proposition and identify their target audience. This analysis revealed that Rimjhim's strength lay in their ability to blend traditional Pakistani aesthetics with contemporary elegance.</p>
                    <p className="text-lg font-bold">Based on these insights, we developed a new brand identity that captured the essence of Rimjhim. This included a refreshed logo, a cohesive color palette, and a consistent brand voice. We also created a compelling brand story that highlighted the brand's heritage, craftsmanship, and commitment to empowering women.</p>
                    <p className="text-xl font-bold">The Results</p>
                    <p className="text-lg font-bold">The rebranding initiative proved to be a resounding success. The new brand identity resonated strongly with Rimjhim's target audience, and the brand's online presence saw a significant boost. Through strategic social media marketing, targeted advertising campaigns, and public relations efforts, we were able to elevate Rimjhim's visibility and establish them as a leading player in the Pakistani fashion industry.</p>
                    <p className="text-lg font-bold">As a result of the rebranding, Rimjhim experienced a surge in sales and brand awareness. The brand's reputation for quality, craftsmanship, and timeless design was solidified, and they were able to attract a wider customer base. The successful revitalization of Rimjhim serves as a testament to the power of effective branding and the importance of staying relevant in an ever-evolving market.</p> */}

                    {/* <p className="text-lg">As a premier digital and creative agency, we specialize in transforming visions into compelling realities through cutting-edge design, social media marketing, and immersive digital campaigns.</p> */}
                    {/* <Button className="bg-black border-2 rounded-none border-[#e5e900] garet font-bold self-end text-white">READ MORE</Button> */}
                </div>
                <div className="sm:w-1/2 h-[25rem]">
                    <Image priority className="w-full h-full object-contain bg-none" src={'/images/newhome/casestudies/Rimjhim Logo file (2).svg'} alt="first" width={400} height={400}/>
                </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap  sm:gap-4">
                <div className={`telegraf w-full flex flex-col   sm:px-16 px-4 gap-4`}>
                <p className="text-2xl font-bold">The Solution</p>
                    <div className="flex flex-wrap w-full gap-4">
                        <div className="flex sm:flex-nowrap flex-wrap items-center w-full gap-4">
                        <div className="sm:w-[60%] flex flex-col gap-4">
                        <p className="text-lg leading-10 font-bold">To address Rimjhim's branding issues, our team embarked on a comprehensive rebranding strategy. We began by conducting in-depth market research to understand the brand's unique value proposition and identify their target audience. This analysis revealed that Rimjhim's strength lay in their ability to blend traditional Pakistani aesthetics with contemporary elegance.</p>
                        <p className="text-lg leading-10 font-bold">Based on these insights, we developed a new brand identity that captured the essence of Rimjhim. This included a refreshed logo, a cohesive color palette, and a consistent brand voice. We also created a compelling brand story that highlighted the brand's heritage, craftsmanship, and commitment to empowering women.</p>
                        </div>
                        <div className="flex sm:w-1/2 flex-col gap-4">
                        <div className="w-full h-[15rem]">
                    <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/2.svg'} alt="first" width={400} height={400}/>
                </div>
                        {/* <div className="w-full h-[15rem]">
                    <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/1.svg'} alt="first" width={400} height={400}/>
                </div> */}
                        </div>
                        {/* <div className="sm:w-1/2 h-[15rem]">
                    <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/2.svg'} alt="first" width={400} height={400}/>
                </div> */}

                        </div>
                        {/* <div className="flex sm:flex-nowrap flex-wrap w-full gap-4">
                        <div className="sm:w-[60%] ">
                        <p className="text-lg font-bold">Based on these insights, we developed a new brand identity that captured the essence of Rimjhim. This included a refreshed logo, a cohesive color palette, and a consistent brand voice. We also created a compelling brand story that highlighted the brand's heritage, craftsmanship, and commitment to empowering women.</p>
                        </div>
                        <div className="sm:w-1/2 h-[15rem]">
                    <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/1.svg'} alt="first" width={400} height={400}/>
                </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="flex justify-center sm:flex-nowrap flex-wrap gap-4  sm:gap-4">
                <div className={`telegraf sm:w-[60%] flex flex-col   sm:px-16 px-4 gap-4`}>
                    <p className="text-2xl font-bold">The Results</p>
                    <p className="text-lg leading-10 font-bold">The rebranding initiative proved to be a resounding success. The new brand identity resonated strongly with Rimjhim's target audience, and the brand's online presence saw a significant boost. Through strategic social media marketing, targeted advertising campaigns, and public relations efforts, we were able to elevate Rimjhim's visibility and establish them as a leading player in the Pakistani fashion industry.</p>
                    <p className="text-lg leading-10 font-bold">As a result of the rebranding, Rimjhim experienced a surge in sales and brand awareness. The brand's reputation for quality, craftsmanship, and timeless design was solidified, and they were able to attract a wider customer base. The successful revitalization of Rimjhim serves as a testament to the power of effective branding and the importance of staying relevant in an ever-evolving market.</p>
                </div>
                <div className="sm:w-1/2 h-[25rem]">
                    <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/Rimjhim 3.svg'} alt="first" width={400} height={400}/>
                </div>
            </div>
            <hr className=" border-color-1"/>
            <div id="isuzu" className="flex sm:flex-nowrap flex-wrap sm:px-16 px-4 justify-center sm:gap-8">
                <div className={`telegraf sm:w-[60%] flex flex-col    gap-4`}>
                    <h2 className="sm:text-6xl text-color-1 text-4xl font-bold">ISUZU (Repositioning)</h2>
                    <p className="text-2xl font-bold">The Challenge</p>
                    <p className="text-lg leading-10 font-bold">Isuzu Motors faces challenges in the Pakistani market due to the perception of the D-Max 4x4 as a vehicle in competition with Toyota’s Revo. This limited its appeal to the broader passenger car market,  as there is no competition between the two products. The brand needed to reposition the D-Max to compete effectively against popular crossover models as the target audience looking to upgrade from a crossover had budget constraints jumping to a care like Revo.  </p>
                    <p className="text-lg leading-10 font-bold">Hence there is a blue ocean available  for D-Max to showcase itself as a superior vehicle to a crossover and attract the target audience that is looking to upgrade and cannot afford Revo.</p>
                    {/* <p className="text-xl font-bold">The Solution</p>
                    <p className="text-lg font-bold">To address Rimjhim's branding issues, our team embarked on a comprehensive rebranding strategy. We began by conducting in-depth market research to understand the brand's unique value proposition and identify their target audience. This analysis revealed that Rimjhim's strength lay in their ability to blend traditional Pakistani aesthetics with contemporary elegance.</p>
                    <p className="text-lg font-bold">Based on these insights, we developed a new brand identity that captured the essence of Rimjhim. This included a refreshed logo, a cohesive color palette, and a consistent brand voice. We also created a compelling brand story that highlighted the brand's heritage, craftsmanship, and commitment to empowering women.</p>
                    <p className="text-xl font-bold">The Results</p>
                    <p className="text-lg font-bold">The rebranding initiative proved to be a resounding success. The new brand identity resonated strongly with Rimjhim's target audience, and the brand's online presence saw a significant boost. Through strategic social media marketing, targeted advertising campaigns, and public relations efforts, we were able to elevate Rimjhim's visibility and establish them as a leading player in the Pakistani fashion industry.</p>
                    <p className="text-lg font-bold">As a result of the rebranding, Rimjhim experienced a surge in sales and brand awareness. The brand's reputation for quality, craftsmanship, and timeless design was solidified, and they were able to attract a wider customer base. The successful revitalization of Rimjhim serves as a testament to the power of effective branding and the importance of staying relevant in an ever-evolving market.</p> */}

                    {/* <p className="text-lg">As a premier digital and creative agency, we specialize in transforming visions into compelling realities through cutting-edge design, social media marketing, and immersive digital campaigns.</p> */}
                    {/* <Button className="bg-black border-2 rounded-none border-[#e5e900] garet font-bold self-end text-white">READ MORE</Button> */}
                </div>
                <div className="sm:w-1/2 h-[25rem]">
                    <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/Isuzu 1.svg'} alt="first" width={400} height={400}/>
                </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap  justify-center sm:px-16 px-4 gap-4">
                        <div className="telegraf sm:w-[60%] flex flex-col gap-4">
                        <p className="text-2xl font-bold">The Solution</p>
                        <p className="text-lg leading-10 font-bold">We propose that Isuzu focus on highlighting the D-Max's unique features and target specific segments to effectively reposition the vehicle. By emphasizing the D-Max's off-road capabilities, fuel efficiency, and comfort, we believe it can position itself as a superior alternative to crossovers.</p>
                        </div>
                        <div className="sm:w-1/2 h-[15rem]">
                    <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/Isuzu 2.svg'} alt="first" width={400} height={400}/>
                </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap  justify-center sm:px-16 px-4 gap-4">
            <div className="telegraf sm:w-[60%] flex flex-col gap-4">
            {/* <p className="text-2xl font-bold">The Solution</p> */}
            <p className="text-lg leading-10 font-bold">Additionally, targeting adventure enthusiasts, urban commuters, and families can help tailor marketing efforts to resonate with the needs of each group. Creating a distinct brand identity through a new tagline and a targeted marketing campaign can further enhance the D-Max's appeal and differentiate it from competitors. By implementing these strategies, we believe Isuzu can successfully reposition the D-Max and attract a wider audience, driving sales and market share.</p>
            </div>
            <div className="sm:w-1/2 h-[15rem]">
        <Image priority className="w-full h-full object-contain" src={'/images/newhome/casestudies/Isuzu 3.svg'} alt="first" width={400} height={400}/>
    </div>
            </div>
        </div>
        
        </>
    )
}