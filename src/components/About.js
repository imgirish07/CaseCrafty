import React, { useState } from 'react'

const About = (props) => {
    return (
        <>
            <div >
                <div className="accordion" id="accordionExample"  >
                    <h1 style={{color: props.mode==='dark'?'white':'black'}} >About CaseCrafty</h1>
                    <div className="accordion-item"  >
                        <h2 className="accordion-header"  >
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? '#051327' : '#cfe2ff', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                <strong>Welcome to the CaseCrafty</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#184d70' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                
                                    A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text.
                                
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item"  >
                        <h2 className="accordion-header"  >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? '#051327' : '#cfe2ff', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                <strong> How to use CaseCrafty online?</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#184d70' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                Did you write a complete note or document without realizing it in caps lock? Don't worry, you don't have to delete and rewrite everything. You can now use our CaseCrafty to convert the text instantly so that it has the correct capitalization style.

                                    The upper case to lower case converter can be used to convert uppercase to lowercase,lowercase to uppercase, case title to case sentence, etc.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item"  >
                        <h2 className="accordion-header"  >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? '#051327' : '#cfe2ff', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                <strong>Is CaseCrafty free?</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#184d70' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                Yes, CaseCrafty is completely free to use and users are not required to pay any sort of fee.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <button type="button" className="btn btn-primary " onClick={handleDarkMode} >{btnText} </button> */}

        </>
    )
}
export default About;
