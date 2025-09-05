"use client";

import { clientSideFunction } from "@/utils/client-utils";
import React from "react";

export default function ClientRoutePage(){
    const result = clientSideFunction();

    return (
        <>
        <h1>Client Route Page {result}</h1>
        </>
    )
}