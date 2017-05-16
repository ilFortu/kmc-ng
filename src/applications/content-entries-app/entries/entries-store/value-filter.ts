import { FilterItem, FilterItemLocalizedTooltip } from "./filter-item";
export abstract class ValueFilter<T> extends FilterItem{

    private _value : T;

    public get value() : T{
        return this._value;
    }

    constructor(value : T, label : string, tooltip? : FilterItemLocalizedTooltip)
    {
        super(label, tooltip);
        this._value = value;
    }
}