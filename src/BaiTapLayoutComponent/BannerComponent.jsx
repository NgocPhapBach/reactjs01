import React, { Component } from 'react'

export default class BannerComponent extends Component {
    render() {
        return (
            <header className="py-3">
                <div className="px-5">
                    <div className="p-3 bg-light rounded-3">
                        <div className="m-2 m-lg-5">
                            <h1 className="display-5 fw-bold">A warm welcome!</h1>
                            <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
