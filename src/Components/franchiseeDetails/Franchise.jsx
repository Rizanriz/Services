import React from 'react'
import Carousel from './Carousel'
import ContactInfo from './ContactInfo';
import Button from '../complaints/Button';
// import FranchiceDetails from './FranchiceDetails';

function Franchise() {

    const imageArray = [
        'https://mir-s3-cdn-cf.behance.net/project_modules/hd/6139fe95757635.5e9f0237cf687.png',
        'https://www.pepsioman.com/orc_admin/uploads/sliders/1661335819_Mainbanner03.jpg',
        'https://www.coca-cola.com/content/dam/onexp/ng/home-image/brands/fanta/banner%20desktop%20fanta.png',
        'https://media.assettype.com/creativegaga%2F2023-05%2F29615382-0486-49dd-ab85-3a3556eac567%2FMirinda_Hero_Image.jpeg',
        'https://cdn.dribbble.com/userupload/13209054/file/original-43dab0c434e30c0a1d7749a7dcfe5b16.jpg?resize=752x',
      ];
      const franchiseeData = {
        FranchiseeName:"COCO COLA",
        name: "Tom Jose",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis. Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In",
      };
      const contactData = [
        { label: "Address", value: "KK Building, Ernakulam" },
        { label: "Pin", value: "2255" },
        { label: "Email", value: "acr@email.com" },
        { label: "Phone", value: "8528525558" },
      ];
  return (
    <>
        <Carousel images={imageArray} />

        <div className="mt-10">
            
        {/* <FranchiceDetails {...franchiseeData} /> */}

        <div className='px-3'>
            <div className="w-full mx-auto mb-4 bg-slate-200 text-gray-600 shadow-lg rounded-lg overflow-hidden">
                <div className="p-4 flex flex-row flex-wrap items-center border-b-2 gap-4">
                    <div className="w-12 h-12 bg-gray-300 text-black rounded-full flex items-center justify-center text-xl font-bold">
                        {franchiseeData.name[0]}
                    </div>
                    <div>
                        <h2 className="text-xl text-black font-bold">{franchiseeData.FranchiseeName}</h2>
                        <p>{franchiseeData.name}</p>
                    </div>
                    <div className='ml-auto'>
                        <Button onClick={() => console.log('Chat/Call clicked')}
                            variant={'primary'} >
                            <div className="flex items-center justify-center px-6 lg:px-28 sm:px-16 gap-2">
                                Chat/Contact
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="p-4">
                    <p>{franchiseeData.description}</p>
                </div>
            </div>
        </div>

        <ContactInfo contactData={contactData} />
      </div>
    </>
  )
}

export default Franchise