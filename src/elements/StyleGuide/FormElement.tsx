"use client"
import React from 'react';
import NiceSelect from '../NiceSelect';
type TNiceSelectData = {
    id: number;
    option: string;
}
const FormElement = () => {
    const selectOption: TNiceSelectData[] = [
        {
            id: 1,
            option: "Select option One"
        },
        {
            id: 2,
            option: "Select option Two"
        },
        {
            id: 3,
            option: "Select option Three"
        }
    ]
    const selectHandler = () => { }

    return (
        <>
            <div id="formElements" className="elements__area">
                <div className="wrapper wrapper-nice-select">
                    <h5 className="style__guide-title mb-20">Form Elements</h5>
                    <div className="form__input-wrapper">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input">
                                        <input type="text" placeholder="First name" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input">
                                        <input type="text" placeholder="Last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input-title">
                                        <label>first name<span>*</span></label>
                                    </div>
                                    <div className="form__input">
                                        <input type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input-title">
                                        <label>Last name<span>*</span></label>
                                    </div>
                                    <div className="form__input">
                                        <input type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box icon-left">
                                    <div className="form__input">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box icon-left">
                                    <div className="form__input">
                                        <input type="text" placeholder="Your email" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form__input">
                                    <div className="form__input-title">
                                        <label>select option<span>*</span></label>
                                    </div>
                                    <div className="form__select">
                                        <NiceSelect
                                            options={selectOption}
                                            defaultCurrent={0}
                                            onChange={selectHandler}
                                            name=""
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from__input-box mb-30">
                                    <div className="form__input">
                                        <input type="text" placeholder="Your email" />
                                    </div>
                                </div>

                                <div className="from__input-box">
                                    <div className="form__input">
                                        <textarea name="name" placeholder="Write here"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="mb-20">Radio Button</h5>
                                <div className="singel__radio mb-10">
                                    <input type="radio" id="radio-d" name="Default" value="radio-d" />
                                    <label htmlFor="radio-d">Default</label>
                                </div>
                                <div className="singel__radio mb-10">
                                    <input type="radio" id="radio-s" name="Selected" value="radio-s" />
                                    <label htmlFor="radio-s">Selected</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="mb-20">Radio Button</h5>
                                <div className="singel__checkbox mb-10">
                                    <input type="checkbox" id="default" name="default" value="yes" />
                                    <label htmlFor="default">Default</label>
                                </div>
                                <div className="singel__checkbox mb-10">
                                    <input type="checkbox" id="selected" name="selected" value="yes" />
                                    <label htmlFor="selected">Selected</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="mb-20">Switch checkbox</h5>
                                <div className="single__switch d-flex align-content-center gap-3 mb-10">
                                    <label className="switch-checkbox">
                                        <input type="checkbox" />
                                        <span className="switch round"></span>
                                    </label>
                                    <p className="mb-0">Default</p>
                                </div>
                                <div className="single__switch d-flex align-content-center gap-3 mb-10">
                                    <label className="switch-checkbox">
                                        <input type="checkbox" />
                                        <span className="switch round"></span>
                                    </label>
                                    <p className="mb-0">Selected</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormElement;