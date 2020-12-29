import { ApiResourceBase } from "./ApiResourceBase";

export class Hello extends ApiResourceBase {

    public constructor() {
        super('GET', 'v1/hello');
    }
}