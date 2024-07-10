'use client'

import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

export default function Email() {
    const [displaySummary, isSummaryDisplayed] = useState(false);

    return(
        <>
        <div className="w-full h-10 bg-gray-300 top-0">
            <div className="container px-4 h-full">
            <div className="flex items-center h-full">
                {/* Email selector here? */}
                <span className="flex-1">Using all emails</span>

                <FormControl className="contents">
                    <FormLabel className="flex-1">
                        Display summary?
                    </FormLabel>
                    <Switch className="flex-1" onChange={(event) => {
                        event.target.checked ? isSummaryDisplayed(true) : isSummaryDisplayed(false)
                    }}/>
                </FormControl>
            </div>
            </div>
        </div>

        {displaySummary ? 
        <div>
            Summary will be displayed here.
        </div> 
        : 
        <div>
            List of emails will be displayed here.
            {/* Create an Email component and make a list of those */ }
        </div>
        }
        </>
    );
}