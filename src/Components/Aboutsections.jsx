import React from "react";

function Aboutsections() {
    return (
        <div className="companyinto-container flex flex-col gap-y-[1.5em] items-center">
            <Aboutonesection title="Who are We?" >
                CEAT is Sri Lanka’s leading tyre brand in terms of overall market share,
                manufacturing capacity and brand equity. CEAT Kelani Holdings
                manufactures more than half of the country’s pneumatic tyre requirement
                and has achieved dominant market shares in most of the product segments.
                The CEAT brand was ranked fifth among Sri Lanka’s strongest brands and
                as the most valuable consumer brand in the ‘Motor’ segment in the 2021
                Brand Finance rankings and was also conferred a ‘AAA - ’ brand rating –
                the second best rating awarded to any consumer.
            </Aboutonesection>
            <Aboutonesection title="Our Vision" >
                CEAT is Sri Lanka’s leading tyre brand in terms of overall market share,
                manufacturing capacity and brand equity. CEAT Kelani Holdings
                manufactures more than half of the country’s pneumatic tyre
            </Aboutonesection>
            <Aboutonesection title=" Our Mission" >
                CEAT is Sri Lanka’s leading tyre brand in terms of overall market share,
                manufacturing capacity and brand equity. CEAT Kelani Holdings
                manufactures more than half of the country’s pneumatic tyre
            </Aboutonesection>
        </div>
    );
}

function Aboutonesection(props) {
    return (
        <div className="w-[75vw] p-[2em] rounded-[5px] bg-blue-100">
            <h1 className="mb-[0.5em] font-semibold text-[1.5em]">{props.title}</h1>
            <p align="justify" className="text-[1.1em]">
                {props.children}
            </p>
        </div>
    );
}

export default Aboutsections;
