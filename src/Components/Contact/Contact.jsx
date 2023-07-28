import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <section id='contact' className='contact_wrapper'>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className='text-lg-start text-center'>
                <span className='subtitle'>My Complete Project </span>
                        <h2>Let’s Talk.</h2></div>
                    <div className="col-lg-6 order-1 order-lg-1 pe-lg-5 text-lg-start text-center">
                        {/* <span className='subtitle'>My Complete Project </span>
                        <h2>Let’s Talk.</h2> */}
                        
                        <form>
                            <div className="mb-4">
                                <input type='text' className='form-control' placeholder='Your Name...' autoComplete='off' />
                            </div>
                            <div className="mb-4">
                                <input type='email' className='form-control' placeholder='Your Email...' autoComplete='off' />
                            </div>
                            <div className="mb-4">
                                <input type='text' className='form-control' placeholder='Subject...' autoComplete='off' />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" id='message' placeholder='Your Message...' rows={5} cols={40} autoComplete='off' />
                            </div>
                            <div className='btn-wrapper'>
                                <button type="submit" className="btn mb-3 ">Send Message</button></div>

                        </form>
                    </div>
                    <div className='col-lg-6 order-2 mb-4 order-lg-1 mb-lg-0'>
                        <div className="info_items">
                            <h4>25 North Street, Dubai</h4>
                            <div className="info_wrap">
                                <div className="info_icon">
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJDMzg5QUY2NkJGMTFFQUJCQzNEQUQzOTA2QjRDM0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJDMzg5QUU2NkJGMTFFQUJCQzNEQUQzOTA2QjRDM0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0ZGY3MjMtMWY3ZC1kMjQyLTg1MzItMDI1YTg1NDAyNWJmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUtZmIxODgwNTA2ODZjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8jFW3AAABHVJREFUeNqUl3mIllUUh51vZlyaXLImU5JqnKiZTA3aTCrLKSwbtE1ICNtwRv8oosVyMpDENpIooqZt0LCkzSIrpmwzTExbjKgIcyylaRm1sawvm6meH/xeuLzcO8uFh/d777nvPfeee8655yvpKh03oI/tImiA0TACsg874DsowrOwsrRrW7G3yQp9UHiHJ38Z/oTNVtoNP8FhVvoZLIfO7rLqFVDe06QlPez4BHgPRsL9cDfsgx+8s6/gSD/XaBw73YvCefxeDJVwFX2r+7Pjm+ETeAMGwe1Wugva4TaogAlM/IoXtkcf8v44jOXnA/AUC2mBQl92/BJcAmOsJGv3wHwY7ve7YDxKLtYLk6+X2XmvDSejfzuPci8mueMGK/0Lzg/6D4eFMC3o+8fnnLVLoQZFswOlGt+lI+H3vSnF1fAYnAFXwpOw079XwibYEozfDX9kL+zoVzvi0yipBznbOtBRHAe30ndNzNT74QU5hN/Lvctz4Rx7bbv5wn06jhaotadrI9MdXs/Doyxop3ffqHeooq8tU9wES7WQiKM9BHV2OK34eBgCR2ijXsgB0FmugrNhMpOPz0+E8m8VksgmZYr/c7gsiiiWTKttzvVrsZOY5PLc5IfYw09Ftjknm8jjczimEDjR0ojSqX4+F5H9m3Ou7Kz38tjhTJeXbeXxs+Jcim+Cj52V8m2OTbgvIpMPlCXywIfaVUL2BMyQYm2/NTFonDNTf9uXQbzn29vyCSk+CNYmBimeP03IFD6/J2Qb7BsDIuZWomnPTDXPYTMwcCh5qjzzYMUgDA6+LzpsRuEwC/1dSZBY5PkTkTW5P8sX3Y6IkWVWcrQnHhQoLjofVzpOKwLFivlRNmetrZa1v2GsF3xiRLEWOVDhJMc5E7ZGLLPW1+CSiGwBnILpro7E62RdJMhmxsyN/KOCTTMtcVYVXnWsHQpDE7KTE8lISk+StaT4G7ggMcH3PufoXd6DVytSOhMy+dLQgi+DusQgJfhjE/H6m8861k6HHxOya3XXS/Ez7pgbGfS6HSO8IpWjT7M5qzHdFKiKVC/rImZWNVOjLJnl6lW+h4dElL/r89Rztj1ZOx3mRXXaF5T53rHnzsCxRkQUq26rQzYsc/PrHE5LclXlB17MBF+BqkJm2uGW2yI1PqpFvg6VZvegpBVuCJTKaqpWzgsLAWWoWXCnQ0u11msu7OY4berif9i7+sU7PcDqd8NGUA5+y/Od5fz/IAp3wFSn5WbGbcpXIK9qIKz37itdfbTZIvNdAmVtcMTp3odlTL4LFoM8f7Wr1Q28N6Zqrltgm7NOR9C/0clkTZh2w5BiV48oJzB5U27OLNXO6qnY63L4fO20uSCQ1bseawnSZqmVzvXYqmAh02G/z38MC+roa0Hf4OJPtdaNdrThjt/LvEg52Qr7woVM/ibKlPeXwRU+08b+/oVpduVZ9Nltt1feBy/6WW+lkpejdIt9QpaZklLa247DphvoeputzQlidHA8cp6jfESqLFt7m/B/AQYAHXZwbpBrmzcAAAAASUVORK5CYII=' alt='logo' />

                                </div>
                                <div className="info_text">
                                    Office Address
                                </div>
                            </div>
                        </div>

                        <div className="info_items">
                            <h4>+91 246 254 545</h4>
                            <div className="info_wrap">
                                <div className="info_icon">
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzFBNDJFMTU2NkJGMTFFQUJDNUZBQThGREU5RkY0MzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzFBNDJFMTQ2NkJGMTFFQUJDNUZBQThGREU5RkY0MzAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0ZGY3MjMtMWY3ZC1kMjQyLTg1MzItMDI1YTg1NDAyNWJmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUtZmIxODgwNTA2ODZjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4Qz83wAAArFJREFUeNq8lkloFEEUhjszg3EJhpiLyqBRR3NQEVEiQoJxB7eLAUUkGiJexAVBcIkiigdR1IDEg0EQQZCoJ0ERFBQFl1NUkohxAfc9cTkYJ8bvwT/QhJ6ZnunJPPiorurl73rv1asqiIcnOBnYKqiDaTAMIvATnsP5cLzzpN8PFfgUXgr20TK4C1fhIcRhMqyAOeo38APHciF8RrO8DCtd42PsfXiLkAk6vZHYXpo90AZVjP/OVrhDAsYXqIXjMBw+wj+5fJbdR6gL8TDXNzRWzFiP14dDKURPQDkMlehFOAvn9NEYTFS8X0AToh0I9UI1/R/QmumMLZYvoVIxfQVjYRR8cD+IiCM3R+09+nfUH0HzFTYx1uRX2Fxs8Zmh/hE4pZk5XsJehngDzUEo7O9yL2HL0ieK6+t0mZdKWOJ9yvRD6WJcD91+RH3aNVjrJ7mmwy0nd2bJGE0nbMlTBeb/uUEVcfNMmnlQxPWUZMItVgzgO5TCTdgeQLRO1a0G3sFjxtpgvFvYsnW5St9oYS6qDjDhNVqSpUrUCvhldR3xmBX5Zhin8ue2zzA4gLBtHt1WUNS32VfYrGlvh5TF9R4vmmhvkBDbavMYX2zVMOHq+06eDA/YMm1PCJfkSxhXW3hLTPgT7PN4pm+AtLfa5hPSel2oJHNbl7a8bK0YevrNdh3NUdgW0aa9CK7raPNArIcrAYTbYQti9o1CsAIyEnYR50b3JjEEdmvtVirhlsC3bDYJBIto9mv9/tWPNPL8s1TbYrNKZ3nQ3SmZJTuBbIBJcHqgsjvV0We2fmBqvoXvwQV4BAs87h+wMkgsa7IRjqS5vxqewiXo1OmxVT8yX0feFsQ3Z3KYz+RAH1WRWaYqZ3V8JxyG9/AH4bJczjhhb2Cj650d6tuSGZRkk0lp/wUYAJRTz58Rj/4VAAAAAElFTkSuQmCC' alt='logo' />

                                </div>
                                <div className="info_text">
                                    Official Contact Number
                                </div>
                            </div>
                        </div>

                        <div className="info_items">
                            <h4>info@trident.com</h4>
                            <div className="info_wrap">
                                <div className="info_icon">
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTQ3QzJCRUM2NkJGMTFFQTkwNzlGNUM5NjA5MEJEQjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTQ3QzJCRUI2NkJGMTFFQTkwNzlGNUM5NjA5MEJEQjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0ZGY3MjMtMWY3ZC1kMjQyLTg1MzItMDI1YTg1NDAyNWJmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUtZmIxODgwNTA2ODZjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rbRbawAAAlZJREFUeNqslk1IVFEUx2fGpwZB2zZBizTsi6IysSSFCoSgIFomqC36UCjCbWFtIzGCPij6pl0IbSpwUVFRORYEFZUERQUG0Qchkqb9DvwHDo83M29m3oXfnPfevXP/75xz7z0vPV21KEUbhK2wAGpgNpVsS8M/GIcROBDwcxb2aMAvmIHahIVN9JscMxZm+Ol2A27DXAjkecVUTY8FYNfnnM4KE6iGd/AIuuA79Mrzoo1Ji7sb1O3GHIO7YM5uyrh+8/wy9MC9xGIc1B3FXID3vGQ79qWJ54Tny5rHWWiFhwmJHtHtOtnlKbltbcqNb1LYN8DVCkQPSXQS1uLtT3X99cK+WW5b4DR0wJ0yRA9jTsBbqEd0NDwmKPD/Hi39bfAEmuPsbxfeL7AK0cmocZki82xX2Ju08UvJ6fp8onGEUwr7TVgDlwqI9kp0TDn9VGjSTMy07YTX0AnPtPfDnp7S7caonJYrbAttqY6+Rh/2UHit3eDZnCSELbz74CsshiFYqfD3OVHb+1egDV5UKnxe4c1qgX2AHRIwexw+wmrC+wA69aINeD0MNfkmDop4ahMNw5ZQnz2fUNhbEZxwZ3c3gp+5tL08ynVj1OrO5/FFTf40QjTX9puwF3XiFv7rOh6zUTnPCVeHPO1S/dxc7pGJeIeq0TJ47rpqvfC47IA8vW81E/5UUiRUjU7CEsu5Hr/yObaD+wzs1Vu2J1UWET+I6A8u+7G39Bk0m+aby5+/j1WVSpk4buG4htnlV/WQFlBaIbcPv3klVKI4w6a0C34rvW/+CzAAXzq5Df9Tgu4AAAAASUVORK5CYII=' alt='logo' />

                                </div>
                                <div className="info_text">
                                    Email Address
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
