import 'photoswipe/style.css';
import React, { useEffect } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Page from '../components/Page';
import ParallaxHeader from '../components/ParallaxHeader';



const SingleWorks = () => {
    const [images, setImages] = React.useState([]);
    const fetchImages = async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=9')
        const data = await response.json();
        setImages(data);

    }
    useEffect(() => {
        fetchImages();
    }, [])


    const paragraph = "Upon entry, a sensation of sumptuous elegance instantaneously engulfs this Modern Luxury home interior – a divine blend of monochromatic neutral tones and a curated palette of muted taupe, soft grey and lustrous marble tiles forms the foundation of this abode. A consistent theme of clean-lined furnishings and timeless textures throughout the home radiates tranquillity and absolute comfort. An open plan concept connects the dining to the living area and extends to the balcony, boasting a luxurious sense of spaciousness across the communal zone. A curved display shelving unit stands tall, highlighting a grand collection of personal memorabilia and designer’s items –  a statement piece of the home. Countering the clutter-free space of this alluring abode, contemporary additions like abstract paintings and sleek light fixtures are artfully situated to inject character and warmth. A harmonious blend of deep neutral tones and dimmed lighting evokes a hotel-like atmosphere in this lavish home.";

    const paragraphs = [...Array(2).fill(paragraph)];
    return (
        <Page title={"Single Post"}>
            <ParallaxHeader subheader="Residential Interior Design - 2-BR Resale Condo Renovation">Single Post</ParallaxHeader>
            <div className="main-content my-10">
                <div className="w-full">
                    <div className="w-8/12 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-1/3">
                                <div className="m-3">
                                    <div className='border-t-[3px] border-t-ss-red-400 w-12'></div>
                                    <h2 className='text-[2.1rem] tracking-normal font-bold my-3'>A True Depiction Of Modern Elegance – Modern Luxury Interior Design</h2>

                                    {
                                        paragraphs.map((para, index) => (
                                            <p className='mt-3 font-normal text-justify text-gray-700 text-sm' key={index}>{para}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="video m-3">
                                    <iframe className='w-full max-w-full h-96' title='video' src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className='m-3 flex flex-wrap justify-between'>
                                    <Gallery>
                                        {
                                            images.map((image, index) => (
                                                <Item
                                                    key={index}
                                                    original={image?.download_url}
                                                    width={image?.width}
                                                    height={image?.height}
                                                >
                                                    {
                                                        ({ ref, open }) =>
                                                        (
                                                            <img ref={ref} className="w-[210px] h-[210px] mb-2" src={image?.download_url} alt={image.author} onClick={open} />
                                                        )
                                                    }
                                                </Item>
                                            ))

                                        }
                                    </Gallery>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default SingleWorks;