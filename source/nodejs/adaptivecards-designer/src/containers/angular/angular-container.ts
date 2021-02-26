// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Adaptive from "@asseco/adaptivecards";
import { HostContainer } from "../host-container";
import * as hostConfig from "../../hostConfigs/angular.json";

export class AngularContainer extends HostContainer {
	public renderTo(hostElement: HTMLElement) {
        this.cardHost.classList.add("angularOuterContainer");

        let frame = document.createElement("div");
        frame.className = "angularInnerContainer";
        frame.appendChild(this.cardHost);

        hostElement.appendChild(frame);
    }

    public getHostConfig(): Adaptive.HostConfig {
        return new Adaptive.HostConfig(hostConfig);
    }

    get targetVersion(): Adaptive.Version {
        return Adaptive.Versions.v1_2;
    }
}
