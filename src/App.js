import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import bgImage from './assets/Intro.jpg'
import graphic from './assets/graphic.png'
import webdesign from './assets/webdesign.png'
import webdevelopment from './assets/webdevelopment.png'
import Icon from './assets/Icon.svg'
import Products from './components/Products/Products';


class App extends Component {
    state = {
        mockData: [
            {
                title: 'UX',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
                img: graphic,
                checkBoxId: 'checkbox_1'
            },
            {
                title: 'Webdesign',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
                img: webdesign,
                checkBoxId: 'checkbox_2'
            },
            {
                title: 'Web Development',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
                img: webdevelopment,
                checkBoxId: 'checkbox_3'
            },

        ]
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="container">
                    <Header bgImage={bgImage} title={'Code Challange'}/>
                    <div className="product-wrapper">
                        <h2 className="product-wrapper__title">Products</h2>
                        {
                            this.state.mockData.map((data, index) => {
                                return (
                                    <Products
                                        key={index}
                                        checkBoxId={data.checkBoxId}
                                        img={data.img}
                                        title={data.title}
                                        description={data.description}/>
                                )
                            })
                        }
                    </div>
                    <div className="special">
                        <div className="special__single">
                            <div className="special__checkmark">
                                <input type="checkbox" name="cb" id="checkbox_4"/>
                                <label htmlFor="checkbox_4" id="checkbox">
                                    <svg viewBox="0 0 100 100">
                                        <path className="box"
                                              d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                        <polyline className="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                    </svg>
                                </label>
                            </div>
                            <img src={Icon}/>
                            <div className="special__content">
                                <h3 className="special__pro-title"><span> I would like a personal</span> Packaging.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="kontakt">
                        <h2 className="kontakt__title">Kontakt</h2>
                    </div>
                    <form method="" id="main-form">
                        <div className="kontakt__select">
                            <select className="kontakt__select-wrapper">
                                <option value="Salutation">
                                    Salutation
                                </option>

                                <option value="GoodBye!">
                                    GoodBye!
                                </option>
                            </select>
                        </div>
                        <div className="kontakt__form">
                            <input type="text" text='true' name="name" className="kontakt__form-field" required/>
                            <label className="kontakt__name" htmlFor="name">
                                <span className="kontakt__labelname">Frist Name</span>
                            </label>
                        </div>
                        <div className="kontakt__form">
                            <input type="text" text='true' name="name" className="kontakt__form-field" required/>
                            <label className="kontakt__name" htmlFor="name">
                                <span className="kontakt__labelname">Last Name</span>
                            </label>
                        </div>
                        <div className="textarea">
                            <textarea/>
                            <label className="textarea__name" htmlFor="name">
                                <span className="textarea__message">Message</span>
                            </label>
                        </div>

                        <div className="dsz__checkmark">
                            <input type="checkbox" name="cb" id="checkbox_5"/>
                            <label htmlFor="checkbox_5" id="checkbox">
                                <svg viewBox="0 0 100 100">
                                    <path className="box"
                                          d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                    <polyline className="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                </svg>
                                I've read the <a href="#">Terms & Conditions</a> and accept them.
                            </label>
                        </div>

                        <div className="send__info-btn">
                            <button type="submit" className="submit">
                                <div className="submit__btn">
                                    <span>SEND INFORMATION</span>
                                    <span className="material-icons">east</span>
                                </div>

                            </button>
                        </div>


                    </form>
                </div>


            </div>
        );
    }
}

export default App;