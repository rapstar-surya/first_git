import React from 'react'
import Style from './Slider.module.css'
export default function Slider() {
    return (
        <>
            <h1>List of some rappers</h1>
            <p>Rapping is known to be a musical form of vocal delivery that incorporates "rhyme, rhythmic speech, and street vernacular". It is performed or chanted, usually over a backing beat or musical accompaniment. The components of rap include "content", "flow", and "delivery".</p>

            <div className={Style.wrapper}>
                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://www.usmagazine.com/wp-content/uploads/800043282_eminem-zoom-d3e91cfd-e6d5-45dc-9009-833bd2fc3e3e.jpg' className={Style.size} />
                        <p>Eminem</p> 
                        <div>Age: 50 years</div>
                        <div>Nationality: American</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://www.nme.com/wp-content/uploads/2021/04/Snoop-Dogg-Isley-Brothers.jpg' className={Style.size} />
                        <p>Snoop Dogg</p> 
                        <div>Age: 51 years</div>
                        <div>Nationality: American</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://1.bp.blogspot.com/-eoq-qgBDYlI/Xt-DbN2wyVI/AAAAAAAANS8/_pylJmwVlaonK4zwtjEjWDs90z7K5pXwACLcBGAsYHQ/s1600/Raftaar-Rapper%2B%25287%2529.jpg' className={Style.size} />
                        <p>Raftaar</p> 
                        <div>Age: 34 years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://i.pinimg.com/originals/1f/2d/9e/1f2d9e3c50292d50cca8907bd47d5a52.jpg' className={Style.size} />
                        <p>Badshah</p> 
                        <div>Age: 37 years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://th.bing.com/th/id/R.1b33a3128c1d5069db4f2134aa0a33ec?rik=x6ty90X9aEBWEA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Ax86_sjMnHQ%2fUo9HvOBIZyI%2fAAAAAAAACm8%2f1PBRhCFomLo%2fs1600%2f6.jpg&ehk=i41MxvpVIm57bV5018WD%2fGBY2BgRLC50b%2bA7wDaE5TA%3d&risl=&pid=ImgRaw&r=0' className={Style.size} />
                        <p>Bohemia</p> 
                        <div>Age: 43  years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://i.pinimg.com/originals/0f/96/1e/0f961eded24c59db5554aa174a59de1f.jpg' className={Style.size} />
                        <p>Divine</p> 
                        <div>Age: 32 years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://2.bp.blogspot.com/-GBOhTD5G2PI/WDaWXqxOe2I/AAAAAAAABAQ/_J3kfTUSmsUSA3dwdKytUkjNS0loPU-xwCLcB/s1600/95824f493c5485e54ee80c7e9937e232.jpg' className={Style.size} />
                        <p>Honey Singh</p> 
                        <div>Age: 40 years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://th.bing.com/th/id/OIP.PTp2Wie1-UxEh2iYYgydpgHaFS?pid=ImgDet&rs=1' className={Style.size} />
                        <p>King </p> 
                        <div>Age: 24 years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://i2.cinestaan.com/image-bank/1500-1500/123001-124000/123678.jpg' className={Style.size} />
                        <p>Ikka </p> 
                        <div>Age: 36 years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>

                <div className={Style.item}>
                    <div className={Style.content}>
                        <img src='https://files.prokerala.com/news/photos/imgs/1200/rapper-dino-james-890277.jpg' className={Style.size} />
                        <p>Dino James</p> 
                        <div>Age: 31 years</div>
                        <div>Nationality: Indian</div>
                    </div>
                </div>
            </div>
        </>
    )
}
