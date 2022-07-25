import React from 'react'
import { Container } from './../BootstrapIndex'
import NDTV from './../../Assets/ndtv.webp'
import vouge from './../../Assets/vogue.webp'
import hindustan from './../../Assets/hindustan.webp'
import grazia from './../../Assets/grazia.webp'
import cosmopolitan from './../../Assets/cosmopolitan.webp'
import './FeatureUs.client.css'
import ReactElasticCarousel from 'react-elastic-carousel'

const FeatureUs = () => {
    const featureData=[
        
        {
            featureBrandImg:cosmopolitan,
        },
        {
            featureBrandImg:NDTV,
        },
        {
            featureBrandImg:vouge,
        },
        {
            featureBrandImg:hindustan,
        },
        {
            featureBrandImg:grazia,
        }
    ]
  return (
    <div className='feature_us mt-feature_us'>
        <Container>
        <h1 className='py-5'>They feature us because You love us</h1>
        <ReactElasticCarousel itemsToShow={5} itemsToScroll={0} itemPadding={[0,0]}>
        {
            featureData.map((brand,i)=>(
                <img className="featureBrand_img" src={brand.featureBrandImg} key={i}></img>
            ))
        }
        </ReactElasticCarousel>
        </Container>
    </div>
  )
}

export default FeatureUs